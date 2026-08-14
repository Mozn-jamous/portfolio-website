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
  "A complete redesign and from-scratch rebuild of the Pharmacology brand & service site for a clinical-nutrition practice — 25 bilingual (Arabic-first, RTL) pages on a locked design-token system, built in vanilla HTML/CSS/JS with Supabase-wired forms.";

export const metadata: Metadata = {
  title: "Pharmacology — bilingual brand & service site (redesign + build) — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "Pharmacology — a clinical-nutrition brand, redesigned and rebuilt",
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
          name: "Pharmacology — bilingual brand & service site",
          description: DESCRIPTION,
          path: "/projects/pharmacology",
          year: "2026",
        })}
      />
      <CaseStudyLayout
        meta={{
          eyebrow: <T en="Web · Design System · Redesign + Build" ar="ويب · نظام تصميم · إعادة تصميم وبناء" />,
          status: <T en="Client work · Rebuilt v3" ar="عمل لعميل · إعادة بناء v3" />,
          title: (
            <T
              en="Pharmacology — a brand, redesigned from the ground up."
              ar="Pharmacology — علامةٌ أُعيد تصميمها من الأساس."
            />
          ),
          lede: (
            <T
              en="Pharmacology is the brand of a clinical-nutrition practice run by the client, Dr. Ahmed Elkhateeb (Pharm.D). Its previous site had drifted — overlapping CSS, inconsistent spacing, copy that no longer carried the brand. I redesigned it completely and rebuilt it from scratch as a clean v3: a 25-page, fully bilingual (Arabic-first, RTL) brand and service site on a locked design-token system, built in vanilla HTML/CSS/JS for speed."
              ar="Pharmacology علامةُ عيادة تغذيةٍ سريرية يديرها العميل د. أحمد الخطيب (دكتور صيدلة). كان موقعها السابق قد انحرف — أنماط CSS متداخلة، وتباعدٌ غير متّسق، ونصوصٌ لم تعد تحمل العلامة. أعدتُ تصميمه بالكامل وبنيته من الصفر كنسخةٍ ثالثة نظيفة: موقع علامةٍ وخدماتٍ من 25 صفحة، ثنائي اللغة بالكامل (عربيّ أولاً، من اليمين لليسار) على نظام رموز تصميمٍ مُحكَم، مبنيّ بـHTML/CSS/JS صِرف من أجل السرعة."
            />
          ),
          year: "2026",
          role: <T en="Designer + Front-end Developer (complete redesign)" ar="مصمّمة + مطوّرة واجهة (إعادة تصميم كاملة)" />,
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
          { value: "25", label: <T en="Pages — brand, services & legal" ar="صفحات — علامة وخدمات وقانوني" /> },
          { value: <T en="EN / AR" ar="إنجليزي / عربي" />, label: <T en="Fully bilingual, RTL-first" ar="ثنائي اللغة بالكامل، عربيّ أولاً" /> },
          { value: <T en="One system" ar="نظام واحد" />, label: <T en="Locked design tokens, ~30 components" ar="رموز تصميمٍ محكمة، ~30 مكوّناً" /> },
          { value: <T en="Vanilla" ar="بلا إطار" />, label: <T en="No build step — fast by default" ar="دون خطوة بناء — سريعٌ افتراضياً" /> },
        ]}
        sections={[
          {
            kicker: <T en="Overview" ar="نظرة عامة" />,
            heading: <T en="What it is, and what I did." ar="ما هو، وما الذي فعلته." />,
            body: (
              <>
                <Lead>
                  <T
                    en="The practice belongs to the client — a pharmacist who does medication-aware clinical nutrition. The brand, the site, and the system it runs on were my job: a full redesign and a from-scratch rebuild, owning both the visual design and the front-end code."
                    ar="العيادة للعميل — صيدليٌّ يقدّم تغذيةً سريرية واعيةً بالأدوية. أمّا العلامة والموقع والنظام الذي يقوم عليه فكانت مهمّتي: إعادة تصميمٍ كاملة وإعادة بناءٍ من الصفر، بملكيّة التصميم البصري وكود الواجهة معاً."
                  />
                </Lead>
                <FactGrid
                  items={[
                    { label: <T en="My role" ar="دوري" />, value: <T en="Redesign + front-end build" ar="إعادة تصميم + بناء الواجهة" /> },
                    { label: <T en="Client" ar="العميل" />, value: <T en="Dr. Ahmed Elkhateeb (Pharm.D)" ar="د. أحمد الخطيب (دكتور صيدلة)" /> },
                    { label: <T en="Domain" ar="المجال" />, value: <T en="Clinical-nutrition brand" ar="علامة تغذيةٍ سريرية" /> },
                    { label: <T en="Scope" ar="النطاق" />, value: <T en="25 pages, v3 rebuild" ar="25 صفحة، إعادة بناء v3" /> },
                    { label: <T en="Languages" ar="اللغات" />, value: <T en="Arabic + English (RTL-first)" ar="عربي + إنجليزي (عربيّ أولاً)" /> },
                    { label: <T en="Build" ar="البناء" />, value: <T en="Vanilla + Supabase forms" ar="بلا إطار + نماذج Supabase" /> },
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
                    en="The site already existed, but it had aged the way unmanaged sites do: CSS layered on CSS until rules fought each other, spacing that no longer had a rhythm, and copy that had stopped sounding like one brand. Rather than patch it, I started over — keeping the authoritative copy and pricing, throwing out the tangled foundation, and rebuilding on a single design system so the look stays consistent as the practice adds pages."
                    ar="كان الموقع موجوداً، لكنه تقادم كما تتقادم المواقع غير المُدارة: أنماط CSS فوق أنماط حتى تصارعت القواعد، وتباعدٌ فقد إيقاعه، ونصوصٌ لم تعد تبدو كعلامةٍ واحدة. وبدلاً من ترقيعه، بدأتُ من جديد — مع الإبقاء على النصوص والأسعار المرجعية، والتخلّص من الأساس المتشابك، وإعادة البناء على نظام تصميمٍ واحدٍ كي يبقى المظهر متّسقاً مع إضافة العيادة صفحاتٍ جديدة."
                  />
                </p>
              </>
            ),
          },
          {
            kicker: <T en="Design system" ar="نظام التصميم" />,
            heading: <T en="One source of truth for the look." ar="مصدرٌ واحد للحقيقة في المظهر." />,
            body: (
              <>
                <p>
                  <T
                    en="The rebuild is anchored on a token layer: a calm navy-and-sage palette, a fluid bilingual type scale (an Arabic display face paired with Inter Tight for Latin), and a fixed set of spacing, radius, shadow, and motion values — all declared in one place and never re-hardcoded in a component. On top of it sits a single component library: navigation, hero, buttons, cards, badges, accordions, a floating WhatsApp action button, forms, and a footer. New pages compose existing parts instead of inventing new ones, which is what keeps 25 pages looking like one site."
                    ar="ترتكز إعادة البناء على طبقة رموز: لوحةٌ هادئة من الكحلي والميرمية (الأخضر الباهت)، ومقياس خطوطٍ ثنائي اللغة مرن (خطّ عرضٍ عربي مع Inter Tight للّاتينية)، ومجموعةٌ ثابتة من قيم التباعد والحواف والظلال والحركة — كلّها مُعلَنةٌ في مكانٍ واحد ولا يُعاد ترميزها داخل مكوّن. وفوقها مكتبة مكوّناتٍ واحدة: تنقّل، وواجهة، وأزرار، وبطاقات، وشارات، وأكورديون، وزرّ واتساب عائم، ونماذج، وتذييل. تُركَّب الصفحات الجديدة من أجزاءٍ موجودة بدل اختراع غيرها، وهذا ما يُبقي 25 صفحةً تبدو موقعاً واحداً."
                  />
                </p>
                <FactGrid
                  items={[
                    { label: <T en="Tokens" ar="الرموز" />, value: <T en="Color · type · space · motion" ar="لون · خط · تباعد · حركة" /> },
                    { label: <T en="Palette" ar="اللوحة" />, value: <T en="Navy + sage, warm paper" ar="كحلي + ميرمية، ورقٌ دافئ" /> },
                    { label: <T en="Type" ar="الخط" />, value: <T en="Arabic display + Inter Tight" ar="عرضٌ عربي + Inter Tight" /> },
                    { label: <T en="Components" ar="المكوّنات" />, value: <T en="~30 shared patterns" ar="~30 نمطاً مشتركاً" /> },
                  ]}
                />
              </>
            ),
          },
          {
            kicker: <T en="Bilingual, RTL-first" ar="ثنائي اللغة، عربيّ أولاً" />,
            heading: <T en="Arabic as the primary, not the mirror." ar="العربية كالأساس، لا المرآة." />,
            body: (
              <>
                <p>
                  <T
                    en="The site is Arabic by default and English on toggle. Crucially it's RTL-native: every copy string lives in a single bilingual dictionary and renders through data attributes, and the layout uses CSS logical properties throughout — so flipping the language flips direction, type, and spacing correctly instead of mirroring a Latin design. The English version is the adaptation; the Arabic is the real thing."
                    ar="الموقع عربيٌّ افتراضاً وإنجليزيٌّ عند التبديل. والأهمّ أنه من اليمين لليسار أصلاً: كلّ نصٍّ يعيش في قاموسٍ ثنائي اللغة واحد ويُعرَض عبر سمات البيانات، والتخطيط يستخدم خصائص CSS المنطقية في كلّ مكان — فتبديل اللغة يقلب الاتجاه والخطّ والتباعد بشكلٍ صحيح بدل عكس تصميمٍ لاتيني. النسخة الإنجليزية هي التكييف؛ والعربية هي الأصل."
                  />
                </p>
                <Figure
                  src="/work/pharmacology/home.webp"
                  label="Pharmacology — homepage (Arabic)"
                  caption={<T en="The rebuilt homepage: navy hero, bilingual type, and the EN toggle in the nav." ar="الصفحة الرئيسية المُعاد بناؤها: واجهة كحلية، وخطٌّ ثنائي اللغة، وزرّ الإنجليزية في الشريط." />}
                />
                <Callout kicker={<T en="Why this matters" ar="لماذا يهمّ هذا" />}>
                  <T
                    en="Most “bilingual” sites are an English layout with Arabic poured in, and they read as foreign to Arabic users. Designing RTL-first — and keeping all copy in one dictionary — means the Arabic experience is first-class and the two languages can't drift apart."
                    ar="معظم المواقع «ثنائية اللغة» هي تخطيطٌ إنجليزي صُبّت فيه العربية، فتُقرأ غريبةً على المستخدم العربي. التصميمُ من اليمين لليسار أولاً — وإبقاءُ كلّ النصوص في قاموسٍ واحد — يعني أن التجربة العربية من الدرجة الأولى وأن اللغتين لا تنفصلان."
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
                    en="The practice sells a ladder of offers, and the site is structured to match it — from e-books up through a group cohort, maintenance and premium plans, private one-to-one tracks, and an ongoing retainer, plus a Ramadan-specific program. Around the offers sit the supporting pages: an about page that presents the client's credentials, a services overview, a consultancy comparison, an FAQ, a multi-step application form, a thank-you flow, and the full set of legal pages (privacy, terms, medical disclaimer, refund)."
                    ar="تبيع العيادة سلّماً من العروض، والموقع مبنيٌّ ليطابقه — من الكتب الإلكترونية صعوداً إلى مجموعةٍ جماعية، وخطط صيانةٍ ومتميّزة، ومساراتٍ فردية خاصة، واشتراكٍ مستمر، إضافةً إلى برنامجٍ خاصٍّ برمضان. وحول العروض تقع الصفحات المساندة: صفحة تعريفٍ تعرض شهادات العميل، ونظرة عامة على الخدمات، ومقارنة استشارات، وأسئلة شائعة، ونموذج تقديمٍ متعدّد الخطوات، وتدفّق شكر، ومجموعة الصفحات القانونية كاملة (الخصوصية، الشروط، إخلاء المسؤولية الطبية، الاسترجاع)."
                  />
                </p>
                <Figure
                  src="/work/pharmacology/services.webp"
                  label="Pharmacology — services"
                  caption={<T en="The service ladder — one component system carried across every tier and page." ar="سلّم الخدمات — نظام مكوّناتٍ واحد يمتدّ عبر كل مستوى وصفحة." />}
                />
              </>
            ),
          },
          {
            kicker: <T en="Engineering" ar="الهندسة" />,
            heading: <T en="Fast on purpose, scoped on purpose." ar="سريعٌ عن قصد، ومحدّد النطاق عن قصد." />,
            body: (
              <>
                <p>
                  <T
                    en="Vanilla HTML/CSS/JS with no build step keeps the site light and instantly deployable. The interactive parts are hand-written: a scroll-aware glass navbar, reveal-on-scroll that respects reduced-motion, an accordion, and a multi-step application form. The two forms that need a backend — the application and the email waitlist — are wired to Supabase, loaded lazily only on the pages that have them; every primary call-to-action also offers a pre-filled WhatsApp deep link. I deliberately scoped V1 to the public brand and booking surface, leaving the client area, auth, and payments for a later phase rather than half-building them."
                    ar="HTML/CSS/JS صِرف دون خطوة بناء يُبقي الموقع خفيفاً وقابلاً للنشر فوراً. والأجزاء التفاعلية مكتوبةٌ يدوياً: شريط تنقّلٍ زجاجيٌّ واعٍ بالتمرير، وكشفٌ عند التمرير يحترم تقليل الحركة، وأكورديون، ونموذج تقديمٍ متعدّد الخطوات. أمّا النموذجان اللذان يحتاجان خادماً — التقديم وقائمة البريد — فموصولان بـSupabase، يُحمَّلان بتكاسلٍ على صفحاتهما فقط؛ وكلّ دعوةٍ رئيسية تقدّم أيضاً رابط واتساب مُعبّأً مسبقاً. وقد حدّدتُ نطاق الإصدار الأول عمداً بواجهة العلامة والحجز العامة، تاركةً منطقة العميل والمصادقة والمدفوعات لمرحلةٍ لاحقة بدل بنائها نصفاً."
                  />
                </p>
                <FactGrid
                  items={[
                    { label: <T en="Stack" ar="التقنيات" />, value: <T en="HTML · CSS · JS, no build" ar="HTML · CSS · JS، دون بناء" /> },
                    { label: <T en="Forms" ar="النماذج" />, value: <T en="Supabase — apply + waitlist" ar="Supabase — تقديم + قائمة انتظار" /> },
                    { label: <T en="Contact" ar="التواصل" />, value: <T en="WhatsApp deep links" ar="روابط واتساب مباشرة" /> },
                    { label: <T en="V1 scope" ar="نطاق الإصدار 1" />, value: <T en="Public site (no auth/payments yet)" ar="الموقع العام (لا مصادقة/مدفوعات بعد)" /> },
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
                    en="Pharmacology is the project where a design system stopped being a nice-to-have and became the whole point: 25 pages only stay coherent because they share one token layer and one component set. It's also where I proved I can take a drifted, inherited codebase and rebuild it into something a non-technical owner can keep growing. The habit it left: rebuild on a system, not on willpower."
                    ar="Pharmacology هو المشروع الذي توقّف فيه نظام التصميم عن كونه رفاهية وصار هو الجوهر كلّه: 25 صفحةً تبقى متماسكةً فقط لأنها تتشارك طبقة رموزٍ واحدة ومجموعة مكوّناتٍ واحدة. وهو أيضاً حيث أثبتُّ أنني أستطيع أخذ كودٍ موروثٍ منحرف وإعادة بنائه إلى شيءٍ يستطيع مالكٌ غير تقنيٍّ مواصلة تنميته. والعادة التي تركها: أعيدي البناء على نظام، لا على قوّة الإرادة."
                  />
                </p>
              </>
            ),
          },
        ]}
        nextProject={{
          label: (
            <T
              en="Divano — an interior-design firm's site, retyped and retold →"
              ar="Divano — موقع شركة تصميمٍ داخلي، أُعيدت طباعته وروايته →"
            />
          ),
          href: "/projects/divano",
        }}
      />
    </>
  );
}
