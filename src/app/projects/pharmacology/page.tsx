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
  "A clinical-nutrition practice's bilingual service site, built with the Santa Media team: 25 Arabic-first pages in plain HTML, CSS and JavaScript, with the forms wired to Supabase. My parts were the home page's design and section order, the phone experience and the sub-pages, and the Arabic/RTL version.";

export const metadata: Metadata = {
  title: "Pharmacology — a bilingual brand and service site — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "Pharmacology — a bilingual clinical-nutrition site, with Santa Media",
    description: DESCRIPTION,
    type: "article",
    url: siteUrl("/projects/pharmacology"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmacology — a bilingual clinical-nutrition site, with Santa Media",
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
          eyebrow: <T en="Web · Client work · Design and front-end" ar="ويب · عمل لعميل · تصميم وواجهة" />,
          status: <T en="Client work, with Santa Media" ar="عمل لعميل، مع Santa Media" />,
          title: (
            <T
              en="Pharmacology: a bilingual clinic site, built with a team."
              ar="Pharmacology: موقع عيادة ثنائي اللغة، بُني مع فريق."
            />
          ),
          lede: (
            <T
              en="Pharmacology is the brand of a clinical-nutrition practice run by the client, Dr. Ahmed Elkhateeb (Pharm.D). I worked on the site with the Santa Media team: 25 pages, fully bilingual and Arabic-first, in plain HTML, CSS and JavaScript so it stays fast. My parts were the home page's design and section order, the phone experience and the sub-pages, and the Arabic/RTL version. The brand identity and the rest of the build were the team's."
              ar="Pharmacology علامة عيادة تغذية سريرية يديرها العميل د. أحمد الخطيب (دكتور صيدلة). عملتُ على الموقع مع فريق Santa Media: 25 صفحة، ثنائية اللغة بالكامل وعربية أولاً، بـHTML وCSS وJavaScript صِرف ليبقى سريعاً. وكانت أجزائي تصميم الصفحة الرئيسية وترتيب أقسامها، وتجربة الهاتف والصفحات الفرعية، والنسخة العربية باتجاه اليمين. أما الهوية البصرية وبقية البناء فكانت للفريق."
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
          { value: "27/80", label: <T en="Commits mine, alongside the Santa Media team" ar="كوميت لي، إلى جانب فريق Santa Media" /> },
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
                    en="The client is a pharmacist who does medication-aware clinical nutrition. The site was a Santa Media team build. What was mine is the home page's design and section order, the phone experience and the sub-pages, and the Arabic/RTL version."
                    ar="العميل صيدلي يقدّم تغذية سريرية واعية بالأدوية. وكان الموقع بناءً لفريق Santa Media. وما كان لي هو تصميم الصفحة الرئيسية وترتيب أقسامها، وتجربة الهاتف والصفحات الفرعية، والنسخة العربية باتجاه اليمين."
                  />
                </Lead>
                <FactGrid
                  items={[
                    { label: <T en="My role" ar="دوري" />, value: <T en="Home page, phone UX, sub-pages, Arabic/RTL" ar="الصفحة الرئيسية، وتجربة الهاتف، والصفحات الفرعية، والعربية" /> },
                    { label: <T en="Client" ar="العميل" />, value: <T en="Dr. Ahmed Elkhateeb (Pharm.D)" ar="د. أحمد الخطيب (دكتور صيدلة)" /> },
                    { label: <T en="Domain" ar="المجال" />, value: <T en="Clinical-nutrition brand" ar="علامة تغذيةٍ سريرية" /> },
                    { label: <T en="Team" ar="الفريق" />, value: <T en="Santa Media, 27 of 80 commits mine" ar="Santa Media، و27 من 80 كوميت لي" /> },
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
                    en="The site existed already, and it had aged the way unmanaged sites do: CSS layered on CSS until the rules fought each other, spacing with no rhythm left, and copy that had stopped sounding like one brand. Patching it would have meant inheriting all of that, so the Santa Media team rebuilt it on a single design system, keeping the authoritative copy and pricing, so the look holds as the practice adds pages. Inside that build, my part started with the home page: its design and the order of its sections, which is the story a visitor reads."
                    ar="كان الموقع موجوداً أصلاً، وقد تقادم كما تتقادم المواقع غير المُدارة: أنماط CSS فوق أنماط حتى تصارعت القواعد، وتباعد لم يبقَ له إيقاع، ونصوص لم تعد تبدو كعلامة واحدة. وترقيعه كان يعني وراثة ذلك كله، فأعاد فريق Santa Media بناءه على نظام تصميم واحد، مع إبقاء النصوص والأسعار المرجعية، ليصمد المظهر مع إضافة العيادة صفحات جديدة. وداخل ذلك البناء بدأ نصيبي بالصفحة الرئيسية: تصميمها وترتيب أقسامها، وهو القصة التي يقرؤها الزائر."
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
                    en="The site sits on a token layer the team built, and the brand identity is theirs, not mine: a calm navy and sage palette, a fluid bilingual type scale pairing an Arabic display face with Inter Tight, and a fixed set of spacing, radius, shadow and motion values, all declared once and never hardcoded again inside a component. Above that is one component library covering navigation, hero, buttons, cards, badges, accordions, a floating WhatsApp button, forms and a footer. New pages compose existing parts rather than inventing new ones, and that is the only reason 25 pages still look like one site. The pages I designed, the home page and the sub-pages, were composed inside that system rather than around it."
                    ar="يقوم الموقع على طبقة رموز بناها الفريق، والهوية البصرية لهم لا لي: لوحة هادئة من الكحلي والميرمية، ومقياس خطوط ثنائي اللغة مرن يقرن خطّ عرض عربي مع Inter Tight، ومجموعة ثابتة من قيم التباعد والحواف والظلال والحركة، كلها مُعلَنة مرة واحدة ولا تُرمَّز مرة أخرى داخل مكوّن. وفوقها مكتبة مكوّنات واحدة تغطّي التنقّل والواجهة والأزرار والبطاقات والشارات والأكورديون وزرّ واتساب عائم والنماذج والتذييل. تُركَّب الصفحات الجديدة من أجزاء موجودة بدل اختراع غيرها، وهذا السبب الوحيد لبقاء 25 صفحة تبدو موقعاً واحداً. والصفحات التي صمّمتُها، الرئيسية والفرعية، رُكِّبت داخل ذلك النظام لا حوله."
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
                    en="The Arabic/RTL version was my part. The site loads in Arabic and switches to English on a toggle. It is genuinely RTL: every string lives in one bilingual dictionary and renders through data attributes, and the layout uses CSS logical properties throughout, so switching language moves direction, type and spacing correctly instead of mirroring a Latin design. English is the adaptation here."
                    ar="النسخة العربية باتجاه اليمين كانت نصيبي. يُحمَّل الموقع بالعربية ويتحوّل إلى الإنجليزية بزرّ. وهو عربي الاتجاه فعلاً: كل نصّ يعيش في قاموس ثنائي اللغة واحد ويُعرَض عبر سمات البيانات، والتخطيط يستخدم خصائص CSS المنطقية في كل مكان، فتبديل اللغة ينقل الاتجاه والخطّ والتباعد كما يجب بدل أن يعكس تصميماً لاتينياً. والإنجليزية هي التكييف هنا."
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
                    en="The practice sells a ladder of offers and the site is structured to match: e-books at the bottom, then a group cohort, maintenance and premium plans, private one-to-one tracks, an ongoing retainer, and a Ramadan programme. Around those sit the supporting pages: an about page carrying the client's credentials, a services overview, a consultancy comparison, an FAQ, a multi-step application form, a thank-you flow, a supplements landing page, and the full set of legal pages for privacy, terms, medical disclaimer and refunds. Of these, the supplements landing page and the legal pages were mine, along with the mobile UX passes across the site."
                    ar="تبيع العيادة سلّماً من العروض والموقع مبنيّ ليطابقه: الكتب الإلكترونية في الأسفل، ثم مجموعة جماعية، وخطط صيانة ومتميّزة، ومسارات فردية خاصة، واشتراك مستمر، وبرنامج رمضان. وحولها تقع الصفحات المساندة: صفحة تعريف تحمل شهادات العميل، ونظرة عامة على الخدمات، ومقارنة استشارات، وأسئلة شائعة، ونموذج تقديم متعدّد الخطوات، وتدفّق شكر، وصفحة هبوط للمكمّلات، ومجموعة الصفحات القانونية كاملة للخصوصية والشروط وإخلاء المسؤولية الطبية والاسترجاع. ومن هذه كانت صفحة المكمّلات والصفحات القانونية من نصيبي، مع جولات تجربة الهاتف عبر الموقع."
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
                    en="Plain HTML, CSS and JavaScript with no build step keeps the site light and deployable in seconds. The interactive parts are hand-written: a scroll-aware glass navbar, reveal-on-scroll that respects reduced-motion, an accordion, and a multi-step application form. The two forms that need a backend, the application and the email waitlist, are wired to Supabase and loaded only on the pages that have them. Every primary call to action also offers a pre-filled WhatsApp link. Most of this engineering is the team's; my share was the sub-pages and the mobile UX passes. The first version was scoped to the public brand and booking surface on purpose, with the client area, auth and payments left for a later phase instead of half-built."
                    ar="HTML وCSS وJavaScript صِرف بلا خطوة بناء يُبقي الموقع خفيفاً وقابلاً للنشر في ثوانٍ. والأجزاء التفاعلية مكتوبة يدوياً: شريط تنقّل زجاجي واعٍ بالتمرير، وكشف عند التمرير يحترم تقليل الحركة، وأكورديون، ونموذج تقديم متعدّد الخطوات. والنموذجان اللذان يحتاجان خادماً، التقديم وقائمة البريد، موصولان بـSupabase ويُحمَّلان على صفحاتهما فقط. وكل دعوة رئيسية تقدّم أيضاً رابط واتساب معبّأً مسبقاً. ومعظم هذه الهندسة للفريق؛ وكان نصيبي الصفحات الفرعية وجولات تجربة الهاتف. وحُدِّد نطاق النسخة الأولى بواجهة العلامة والحجز العامة عن قصد، مع ترك منطقة العميل والمصادقة والمدفوعات لمرحلة لاحقة بدل بنائها نصفاً."
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
                    en="This is the project where a design system stopped being a nice-to-have for me. Those 25 pages only stay coherent because they share one token layer and one component set, and designing the home page and the sub-pages inside a system someone else built showed me why. It is also where I learned to work as one part of a team build: owning the page narrative, the phone experience and the Arabic edition, and leaving the rest to the people who owned it. The habit it left me with is to build on a system rather than on willpower."
                    ar="هذا هو المشروع الذي توقّف فيه نظام التصميم عن كونه رفاهية عندي. تلك الصفحات الـ25 تبقى متماسكة فقط لأنها تتشارك طبقة رموز واحدة ومجموعة مكوّنات واحدة، وتصميم الصفحة الرئيسية والصفحات الفرعية داخل نظام بناه غيري أراني السبب. وهو أيضاً حيث تعلّمتُ أن أعمل جزءاً من بناء جماعي: أتولّى سرد الصفحة وتجربة الهاتف والنسخة العربية، وأترك الباقي لمن تولّاه. والعادة التي تركها لي أن أبني على نظام لا على قوّة الإرادة."
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
