import docx
import sys
from pathlib import Path

cv_paths = [
    r"C:\Users\mesho\Downloads\Mozn_CV_Dev_ATS (1).docx",
    r"C:\Users\mesho\Downloads\Mozn_CV_Odoo_ATS (1).docx",
]

for path in cv_paths:
    print(f"\n{'='*80}")
    print(f"FILE: {Path(path).name}")
    print('='*80)
    try:
        doc = docx.Document(path)
        for block in doc.element.body.iter():
            tag = block.tag.split('}')[-1]
            if tag == 'p':
                text = ''.join(node.text or '' for node in block.iter() if node.tag.endswith('}t'))
                if text.strip():
                    print(text)
            elif tag == 'tbl':
                for row in block.iter():
                    if row.tag.endswith('}tr'):
                        cells = []
                        for cell in row.iter():
                            if cell.tag.endswith('}tc'):
                                cell_text = ' '.join(t.text or '' for t in cell.iter() if t.tag.endswith('}t'))
                                cells.append(cell_text.strip())
                        if cells:
                            print(' | '.join(cells))
    except Exception as e:
        print(f"ERROR: {e}")
