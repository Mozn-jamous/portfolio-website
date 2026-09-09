import type { Metadata } from "next";
import {
  CaseStudyLayout,
  Callout,
  FactGrid,
  Figure,
  Lead,
} from "@/components/case-study/CaseStudyLayout";
import {
  StructuredData,
  caseStudyStructuredData,
} from "@/components/site/StructuredData";
import { T } from "@/components/i18n/T";
import { siteUrl } from "@/lib/base-path";

const DESCRIPTION =
  "A clinical-nutrition practice's brand and service site, redesigned and rewritten from scratch: 25 bilingual Arabic-first pages on one design-token system, in plain HTML, CSS and JavaScript, with the forms wired to Supabase.";

export const metadata: Metadata = {
  title: "Pharmacology — a bilingual brand and service site — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "Pharmacology — a clinical-nutrition brand, rebuilt from scratch",
    description: DESCRIPTION,
    type: "article",
    url: siteUrl("/projects/pharmacology"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmacology — a clinical-nutrition brand, redesigned and rebuilt",
    description: DESCRIPTION,
  },
};

export default function PharmacologyPage() {
  return (
    <>
      <StructuredData
        data={caseStudyStructuredData({
          name: "Pharmacology — a bilingual brand and service site",
          description: DESCRIPTION,
          path: "/projects/pharmacology",
          year: "2026",
        })}
      />
      <CaseStudyLayout
        meta={{
          eyebrow: <T en="Web · Design system · Redesign and build" ar="ويب · نظام تصميم · إعادة تصميم وبناء" />,
          status: <T en="Client work, third version" ar="عمل لعميل، النسخة الثالثة" />,
          title: (
            <T
              en="Pharmacology: a brand, rebuilt from the ground up."
              ar="Pharmacology: علامة أُعيد بناؤها من الأساس."
            />
          ),
          lede: (
            <T
              en="Pharmacology is the brand of a clinical-nutrition practice run by the client, Dr. Ahmed Elkhateeb (Pharm.D). The previous site had drifted: CSS overlapping CSS, spacing with no rhythm left, copy that had stopped sounding like one brand. I redesigned it and rewrote it from scratch as a third version: 25 pages, fully bilingual and Arabic-first, on one design-token system, in plain HTML, CSS and JavaScript so it stays fast."
              ar="Pharmacology علامة عيادة تغذية سريرية يديرها العميل د. أحمد الخطيب (دكتور صيدلة). كان الموقع السابق قد انحرف: أنماط CSS فوق أنماط، وتباعد لم يبقَ له إيقاع، ونصوص لم تعد تبدو كعلامة واحدة. أعدتُ تصميمه وكتبته من الصفر نسخةً ثالثة: 25 صفحة، ثنائية اللغة بالكامل وعربية أولاً، على نظام رموز تصميم واحد، بـHTML وCSS وJavaScript صِرف ليبقى سريعاً."
            />
          ),
          year: "2026",
          role: <T en="Designer + front-end engineer" ar="مصمّمة + مهندسة واجهة" />,
          stack: [
            "HTML",
            "CSS",
            "JavaScript",
            "Design tokens",
            "Bilingual i18n",
            "Supabase",
            "Arabic / RTL",
          ],
        }}
        metrics={[
          { value: "25", label: <T en="Pages, covering brand, services and legal" ar="صفحة، تغطّي العلامة والخدمات والقانوني" /> },
          { value: <T en="EN / AR" ar="إنجليزي / عربي" />, label: <T en="Fully bilingual, Arabic first" ar="ثنائي اللغة بالكامل، والعربية أولاً" /> },
          { value: <T en="One system" ar="نظام واحد" />, label: <T en="One token layer and about 30 components" ar="طبقة رموز واحدة ونحو 30 مكوّناً" /> },
          { value: <T en="Vanilla" ar="بلا إطار" />, label: <T en="No build step, so it is fast by default" ar="بلا خطوة بناء، فهو سريع افتراضياً" /> },
        ]}
        sections={[
          {
            kicker: <T en="Overview" ar="نظرة عامة" />,
            heading: <T en="What it is, and what I did." ar="ما هو، وما الذي فعلته." />,
            body: (
              <>
                <Lead>
                  <T
                    en="The practice belongs to the client, a pharmacist who does medication-aware clinical nutrition. The brand, the site and the system underneath it were my job. I did the redesign and the rewrite, and owned both the visual design and the front-end code."
                    ar="العيادة للعميل، وهو صيدلي يقدّم تغذية سريرية واعية بالأدوية. أما العلامة والموقع والنظام تحته فكانت مهمّتي. توليتُ إعادة التصميم وإعادة الكتابة، وكان التصميم البصري وكود الواجهة كلاهما لي."
                  />
                </Lead>
                <FactGrid
                  items={[
                    { label: <T en="My role" ar="دوري" />, value: <T en="Redesigned it and wrote the front-end" ar="أعدتُ تصميمه وكتبتُ الواجهة" /> },
                    { label: <T en="Client" ar="العميل" />, value: <T en="Dr. Ahmed Elkhateeb (Pharm.D)" ar="د. أحمد الخطيب (دكتور صيدلة)" /> },
                    { label: <T en="Domain" ar="المجال" />, value: <T en="Clinical-nutrition brand" ar="علامة تغذيةٍ سريرية" /> },
                    { label: <T en="Scope" ar="النطاق" />, value: <T en="25 pages, third version" ar="25 صفحة، النسخة الثالثة" /> },
                    { label: <T en="Languages" ar="اللغات" />, value: <T en="Arabic and English, Arabic first" ar="عربي وإنجليزي، والعربية أولاً" /> },
                    { label: <T en="Build" ar="البناء" />, value: <T en="Vanilla, with Supabase forms" ar="بلا إطار، مع نماذج Supabase" /> },
                  ]}
                />
              </>
            ),
          },
          {
            kicker: <T en="The brief" ar="الموجز" />,
            heading: <T en="A brand that had drifted." ar="علامةٌ انحرفت." />,
            body: (
              <>
                <p>
                  <T
                    en="The site existed already, and it had aged the way unmanaged sites do: CSS layered on CSS until the rules fought each other, spacing with no rhythm left, and copy that had stopped sounding like one brand. Patching it would have meant inheriting all of that, so I started over. I kept the authoritative copy and pricing, threw out the tangled foundation, and rebuilt on a single design system so the look holds as the practice adds pages."
                    ar="كان الموقع موجوداً أصلاً، وقد تقادم كما تتقادم المواقع غير المُدارة: أنماط CSS فوق أنماط حتى تصارعت القواعد، وتباعد لم يبقَ له إيقاع، ونصوص لم تعد تبدو كعلامة واحدة. وترقيعه كان يعني أن أرث ذلك كله، فبدأتُ من جديد. أبقيتُ النصوص والأسعار المرجعية، وتخلّصتُ من الأساس المتشابك، وأعدتُ البناء على نظام تصميم واحد ليصمد المظهر مع إضافة العيادة صفحات جديدة."
                  />
                </p>
              </>
            ),
          },
          {
            kicker: <T en="Design system" ar="نظام التصميم" />,
            heading: <T en="One place that decides how it looks." ar="مكان واحد يقرّر كيف يبدو." />,
            body: (
              <>
                <p>
                  <T
                    en="The rewrite sits on a token layer: a calm navy and sage palette, a fluid bilingual type scale pairing an Arabic display face with Inter Tight, and a fixed set of spacing, radius, shadow and motion values, all declared once and never hardcoded again inside a component. Above that is one component library covering navigation, hero, buttons, cards, badges, accordions, a floating WhatsApp button, forms and a footer. New pages compose existing parts rather than inventing new ones, and that is the only reason 25 pages still look like one site."
                    ar="تقوم إعادة الكتابة على طبقة رموز: لوحة هادئة من الكحلي والميرمية، ومقياس خطوط ثنائي اللغة مرن يقرن خطّ عرض عربي مع Inter Tight، ومجموعة ثابتة من قيم التباعد والحواف والظلال والحركة، كلها مُعلَنة مرة واحدة ولا تُرمَّز مرة أخرى داخل مكوّن. وفوقها مكتبة مكوّنات واحدة تغطّي التنقّل والواجهة والأزرار والبطاقات والشارات والأكورديون وزرّ واتساب عائم والنماذج والتذييل. تُركَّب الصفحات الجديدة من أجزاء موجودة بدل اختراع غيرها، وهذا السبب الوحيد لبقاء 25 صفحة تبدو موقعاً واحداً."
                  />
                </p>
                <FactGrid
                  items={[
                    { label: <T en="Tokens" ar="الرموز" />, value: <T en="Colour, type, spacing, motion" ar="لون، وخط، وتباعد، وحركة" /> },
                    { label: <T en="Palette" ar="اللوحة" />, value: <T en="Navy and sage on warm paper" ar="كحلي وميرمية على ورق دافئ" /> },
                    { label: <T en="Type" ar="الخط" />, value: <T en="An Arabic display face with Inter Tight" ar="خطّ عرض عربي مع Inter Tight" /> },
                    { label: <T en="Components" ar="المكوّنات" />, value: <T en="About 30 shared patterns" ar="نحو 30 نمطاً مشتركاً" /> },
                  ]}
                />
              </>
            ),
          },
          {
            kicker: <T en="Bilingual, Arabic first" ar="ثنائي اللغة، والعربية أولاً" />,
            heading: <T en="Arabic is the original here." ar="العربية هي الأصل هنا." />,
            body: (
              <>
                <p>
                  <T
                    en="The site loads in Arabic and switches to English on a toggle. It is genuinely RTL: every string lives in one bilingual dictionary and renders through data attributes, and the layout uses CSS logical properties throughout, so switching language moves direction, type and spacing correctly instead of mirroring a Latin design. English is the adaptation here."
                    ar="يُحمَّل الموقع بالعربية ويتحوّل إلى الإنجليزية بزرّ. وهو عربي الاتجاه فعلاً: كل نصّ يعيش في قاموس ثنائي اللغة واحد ويُعرَض عبر سمات البيانات، والتخطيط يستخدم خصائص CSS المنطقية في كل مكان، فتبديل اللغة ينقل الاتجاه والخطّ والتباعد كما يجب بدل أن يعكس تصميماً لاتينياً. والإنجليزية هي التكييف هنا."
                  />
                </p>
                <Figure
                  src="/work/pharmacology/home.webp"
                  label="Pharmacology — homepage (Arabic)"
                  caption={<T en="The rebuilt homepage: the navy hero, the bilingual type, and the English toggle in the nav." ar="الصفحة الرئيسية بعد إعادة البناء: الواجهة الكحلية، والخطّ ثنائي اللغة، وزرّ الإنجليزية في الشريط." />}
                />
                <Callout kicker={<T en="Why this matters" ar="لماذا يهمّ هذا" />}>
                  <T
                    en="Most sites that call themselves bilingual are an English layout with Arabic poured into it, and Arabic users can feel that. Designing in Arabic first, and keeping every string in one dictionary, is what stops the two languages drifting apart over time."
                    ar="معظم المواقع التي تسمّي نفسها ثنائية اللغة تخطيط إنجليزي صُبّت فيه العربية، والمستخدم العربي يشعر بذلك. والتصميم بالعربية أولاً، مع إبقاء كل نصّ في قاموس واحد، هو ما يمنع اللغتين من التباعد مع الوقت."
                  />
                </Callout>
              </>
            ),
          },
          {
            kicker: <T en="Service architecture" ar="بنية الخدمات" />,
            heading: <T en="A 25-page service ladder." ar="سلّم خدماتٍ من 25 صفحة." />,
            body: (
              <>
                <p>
                  <T
                    en="The practice sells a ladder of offers and the site is structured to match: e-books at the bottom, then a group cohort, maintenance and premium plans, private one-to-one tracks, an ongoing retainer, and a Ramadan programme. Around those sit the supporting pages: an about page carrying the client's credentials, a services overview, a consultancy comparison, an FAQ, a multi-step application form, a thank-you flow, and the full set of legal pages for privacy, terms, medical disclaimer and refunds."
                    ar="تبيع العيادة سلّماً من العروض والموقع مبنيّ ليطابقه: الكتب الإلكترونية في الأسفل، ثم مجموعة جماعية، وخطط صيانة ومتميّزة، ومسارات فردية خاصة، واشتراك مستمر، وبرنامج رمضان. وحولها تقع الصفحات المساندة: صفحة تعريف تحمل شهادات العميل، ونظرة عامة على الخدمات، ومقارنة استشارات، وأسئلة شائعة، ونموذج تقديم متعدّد الخطوات، وتدفّق شكر، ومجموعة الصفحات القانونية كاملة للخصوصية والشروط وإخلاء المسؤولية الطبية والاسترجاع."
                  />
                </p>
                <Figure
                  src="/work/pharmacology/services.webp"
                  label="Pharmacology — services"
                  caption={<T en="The service ladder, with one component system carried across every tier and page." ar="سلّم الخدمات، ونظام مكوّنات واحد يمتدّ عبر كل مستوى وصفحة." />}
                />
              </>
            ),
          },
          {
            kicker: <T en="Engineering" ar="الهندسة" />,
            heading: <T en="Fast on purpose, and scoped on purpose." ar="سريع عن قصد، ومحدّد النطاق عن قصد." />,
            body: (
              <>
                <p>
                  <T
                    en="Plain HTML, CSS and JavaScript with no build step keeps the site light and deployable in seconds. The interactive parts are hand-written: a scroll-aware glass navbar, reveal-on-scroll that respects reduced-motion, an accordion, and a multi-step application form. The two forms that need a backend, the application and the email waitlist, are wired to Supabase and loaded only on the pages that have them. Every primary call to action also offers a pre-filled WhatsApp link. I scoped the first version to the public brand and booking surface on purpose, and left the client area, auth and payments for a later phase instead of half-building them."
                    ar="HTML وCSS وJavaScript صِرف بلا خطوة بناء يُبقي الموقع خفيفاً وقابلاً للنشر في ثوانٍ. والأجزاء التفاعلية مكتوبة يدوياً: شريط تنقّل زجاجي واعٍ بالتمرير، وكشف عند التمرير يحترم تقليل الحركة، وأكورديون، ونموذج تقديم متعدّد الخطوات. والنموذجان اللذان يحتاجان خادماً، التقديم وقائمة البريد، موصولان بـSupabase ويُحمَّلان على صفحاتهما فقط. وكل دعوة رئيسية تقدّم أيضاً رابط واتساب معبّأً مسبقاً. وحدّدتُ نطاق النسخة الأولى بواجهة العلامة والحجز العامة عن قصد، وتركتُ منطقة العميل والمصادقة والمدفوعات لمرحلة لاحقة بدل أن أبنيها نصفاً."
                  />
                </p>
                <FactGrid
                  items={[
                    { label: <T en="Stack" ar="التقنيات" />, value: <T en="HTML, CSS and JS, no build step" ar="HTML وCSS وJS، بلا خطوة بناء" /> },
                    { label: <T en="Forms" ar="النماذج" />, value: <T en="Supabase, for applications and the waitlist" ar="Supabase، للتقديم وقائمة الانتظار" /> },
                    { label: <T en="Contact" ar="التواصل" />, value: <T en="WhatsApp deep links" ar="روابط واتساب مباشرة" /> },
                    { label: <T en="First version" ar="النسخة الأولى" />, value: <T en="The public site, without auth or payments yet" ar="الموقع العام، بلا مصادقة أو مدفوعات بعد" /> },
                  ]}
                />
              </>
            ),
          },
          {
            kicker: <T en="Reflection" ar="تأمّل" />,
            heading: <T en="What I took from it." ar="ما الذي خرجتُ به." />,
            body: (
              <>
                <p>
                  <T
                    en="This is the project where a design system stopped being a nice-to-have for me. Those 25 pages only stay coherent because they share one token layer and one component set. It is also where I found out I can take a drifted, inherited codebase and turn it into something a non-technical owner can keep growing. The habit it left me with is to rebuild on a system rather than on willpower."
                    ar="هذا هو المشروع الذي توقّف فيه نظام التصميم عن كونه رفاهية عندي. تلك الصفحات الـ25 تبقى متماسكة فقط لأنها تتشارك طبقة رموز واحدة ومجموعة مكوّنات واحدة. وهو أيضاً حيث عرفتُ أنني أستطيع أخذ كود موروث منحرف وتحويله إلى شيء يستطيع مالك غير تقني أن يواصل تنميته. والعادة التي تركها لي أن أعيد البناء على نظام لا على قوّة الإرادة."
                  />
                </p>
              </>
            ),
          },
        ]}
        nextProject={{
          label: (
            <T
              en="Divano: an interior-design firm's site, retyped and retold →"
              ar="Divano: موقع شركة تصميم داخلي، أُعيدت طباعته وروايته →"
            />
          ),
          href: "/projects/divano",
        }}
      />
    </>
  );
}
