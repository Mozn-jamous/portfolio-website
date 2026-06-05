import docx
import sys

doc = docx.Document(r"C:\Users\mesho\OneDrive\Desktop\portfolio-website\docs\Portfolio_Specification_v1.docx")
out_path = r"C:\Users\mesho\OneDrive\Desktop\portfolio-website\docs\Portfolio_Specification_v1.md"

lines = []
for block in doc.element.body.iter():
    tag = block.tag.split('}')[-1]
    if tag == 'p':
        text = ''.join(node.text or '' for node in block.iter() if node.tag.endswith('}t'))
        style = ''
        for pPr in block.iter():
            if pPr.tag.endswith('}pStyle'):
                style = pPr.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}val', '')
                break
        if text.strip():
            if 'Heading1' in style or 'Title' in style:
                lines.append(f"\n# {text}\n")
            elif 'Heading2' in style:
                lines.append(f"\n## {text}\n")
            elif 'Heading3' in style:
                lines.append(f"\n### {text}\n")
            elif 'Heading4' in style:
                lines.append(f"\n#### {text}\n")
            else:
                lines.append(text)
    elif tag == 'tbl':
        rows = []
        for row in block.iter():
            if row.tag.endswith('}tr'):
                cells = []
                for cell in row.iter():
                    if cell.tag.endswith('}tc'):
                        cell_text = ' '.join(t.text or '' for t in cell.iter() if t.tag.endswith('}t'))
                        cells.append(cell_text.strip())
                if cells:
                    rows.append(cells)
        if rows:
            lines.append('\n| ' + ' | '.join(rows[0]) + ' |')
            lines.append('| ' + ' | '.join(['---'] * len(rows[0])) + ' |')
            for r in rows[1:]:
                if len(r) < len(rows[0]):
                    r = r + [''] * (len(rows[0]) - len(r))
                lines.append('| ' + ' | '.join(r[:len(rows[0])]) + ' |')
            lines.append('')

content = '\n'.join(lines)
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Extracted {len(content)} chars -> {out_path}")
print(f"Lines: {len(lines)}")
