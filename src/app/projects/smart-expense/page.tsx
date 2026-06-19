import type { Metadata } from "next";
import {
  CaseStudyLayout,
  ADR,
  Callout,
  FactGrid,
  Figure,
  Lead,
} from "@/components/case-study/CaseStudyLayout";
import { SmartExpenseDiagram } from "@/components/case-study/ArchitectureDiagram";
import {
  StructuredData,
  caseStudyStructuredData,
} from "@/components/site/StructuredData";
import { T } from "@/components/i18n/T";

const DESCRIPTION =
  "Odoo 19 module. Token-secured one-click email approvals routed via hr.employee hierarchy. Auto-generated journal entries on finance sign-off. LGPL-3.0.";

export const metadata: Metadata = {
  title: "Smart Expense Manager — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "Smart Expense Manager — approvals at one click",
    description: DESCRIPTION,
    type: "article",
    url: "https://moznjamous.com/projects/smart-expense",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Expense Manager — approvals at one click",
    description: DESCRIPTION,
  },
};

export default function SmartExpensePage() {
  return (
    <>
      <StructuredData
        data={caseStudyStructuredData({
          name: "Smart Expense Manager",
          description: DESCRIPTION,
          path: "/projects/smart-expense",
          year: "2026",
        })}
      />
      <CaseStudyLayout
      meta={{
        eyebrow: <T en="UX-led design · Odoo 19 · Open source" ar="تصميمٌ بقيادة التجربة · Odoo 19 · مفتوح المصدر" />,
        status: <T en="Live · LGPL-3.0" ar="حيّ · LGPL-3.0" />,
        title: (
          <T
            en="Smart Expense Manager — approvals at the speed of one click."
            ar="Smart Expense Manager — موافقاتٌ بسرعة نقرةٍ واحدة."
          />
        ),
        lede: (
          <T
            en="An Odoo 19 custom module that replaces paper-based expense flows. Token-secured email approvals route via the hr.employee hierarchy — no login required. Auto-generated journal entries on finance sign-off; monthly PDF reports emailed by cron."
            ar="وحدة Odoo 19 مخصّصة تحلّ محلّ تدفّقات النفقات الورقية. موافقاتٌ بريديّة مؤمّنة برمز تُوجَّه عبر تسلسل hr.employee — دون الحاجة لتسجيل الدخول. قيودٌ محاسبية مُولّدة تلقائياً عند اعتماد المالية؛ وتقارير PDF شهرية تُرسَل بالبريد عبر cron."
          />
        ),
        year: <T en="2026 — Present" ar="2026 — حتى الآن" />,
        role: <T en="UX-led design + Sole developer" ar="تصميمٌ بقيادة التجربة + مطوّرة وحيدة" />,
        stack: [
          "Python",
          "Odoo 19 ORM",
          "PostgreSQL",
          "QWeb",
          "OWL",
          "XML",
          "Bootstrap",
        ],
        links: [
          {
            label: <T en="View on GitHub" ar="عرض على GitHub" />,
            href: "https://github.com/Mozn-jamous/smart-expense-manager",
            external: true,
            primary: true,
          },
        ],
      }}
      metrics={[
        { value: <T en="Days → Secs" ar="أيام ← ثوانٍ" />, label: <T en="Approval time — one-click flow, no login required" ar="زمن الموافقة — تدفّق بنقرةٍ واحدة، دون تسجيل دخول" /> },
        { value: <T en="No login" ar="بلا تسجيل دخول" />, label: <T en="Managers act from email; the system gets used" ar="المديرون يتصرّفون من البريد؛ فيُستخدَم النظام" /> },
        { value: <T en="Audit-grade" ar="بمستوى التدقيق" />, label: <T en="Access enforced in record rules, not hidden menus" ar="الوصول مفروضٌ في قواعد السجلات، لا في قوائم مخفية" /> },
        { value: <T en="Open source" ar="مفتوح المصدر" />, label: <T en="Live on GitHub under LGPL-3.0" ar="حيّ على GitHub تحت LGPL-3.0" /> },
      ]}
      sections={[
        {
          kicker: <T en="Overview" ar="نظرة عامة" />,
          heading: <T en="What it does, and what I owned." ar="ما الذي يفعله، وما الذي تولّيته." />,
          body: (
            <>
              <Lead>
                <T
                  en="Employee submits a receipt from mobile. Manager approves with one click from email. Finance posts with one click from email. The journal entry is generated automatically and a monthly department digest is mailed by cron — no logins along the way."
                  ar="الموظّف يقدّم إيصالاً من الجوال. المدير يوافق بنقرةٍ واحدة من البريد. المالية تُرحّل بنقرةٍ واحدة من البريد. يُولَّد القيد المحاسبي تلقائياً ويُرسَل ملخّصٌ شهري للقسم عبر cron — دون أي تسجيل دخولٍ في الطريق."
                />
              </Lead>
              <FactGrid
                items={[
                  { label: <T en="Role" ar="الدور" />, value: <T en="UX + sole developer" ar="تجربة المستخدم + مطوّرة وحيدة" /> },
                  { label: <T en="Timeline" ar="الإطار الزمني" />, value: <T en="2026 — present" ar="2026 — حتى الآن" /> },
                  { label: <T en="Module type" ar="نوع الوحدة" />, value: <T en="Odoo 19 custom" ar="Odoo 19 مخصّصة" /> },
                  { label: <T en="Users" ar="المستخدمون" />, value: <T en="Employees · managers · finance" ar="موظفون · مديرون · مالية" /> },
                  { label: <T en="Auth pattern" ar="نمط المصادقة" />, value: <T en="Token-secured URL" ar="رابطٌ مؤمّن برمز" /> },
                  { label: <T en="License" ar="الترخيص" />, value: <T en="LGPL-3.0 · open source" ar="LGPL-3.0 · مفتوح المصدر" /> },
                ]}
              />
            </>
          ),
        },
        {
          kicker: <T en="Problem" ar="المشكلة" />,
          heading: (
            <T
              en="Paper-based expense workflows in small businesses are quietly broken."
              ar="تدفّقات النفقات الورقية في الشركات الصغيرة معطّلةٌ بصمت."
            />
          ),
          body: (
            <>
              <p>
                <T
                  en="In a typical small business in Damascus, an employee buys something for work, keeps the receipt in a desk drawer for two weeks, hands it to a manager who signs a paper form, walks it to finance who types it into a ledger — and at every stage someone is the bottleneck. Receipts get lost. Numbers get re-typed. The whole loop is invisible to the company until month-end."
                  ar="في شركةٍ صغيرة نموذجية بدمشق، يشتري موظّفٌ شيئاً للعمل، ويحتفظ بالإيصال في درج مكتبٍ أسبوعين، ثم يسلّمه لمديرٍ يوقّع نموذجاً ورقياً، ويمشي به إلى المالية التي تكتبه في دفترٍ — وفي كل مرحلةٍ يكون أحدٌ هو عنق الزجاجة. تضيع الإيصالات. تُعاد كتابة الأرقام. وتبقى الحلقة كلّها غير مرئيةٍ للشركة حتى نهاية الشهر."
                />
              </p>
              <p>
                <T
                  en={<>Existing Odoo expense modules require everyone in the chain to log into the system. In practice, managers don&apos;t log in. Approvals stall. The system goes unused.{" "}<strong>I needed a flow that works for people who never open Odoo.</strong></>}
                  ar={<>تتطلّب وحدات نفقات Odoo الموجودة أن يسجّل كلّ من في السلسلة دخوله إلى النظام. وعملياً، المديرون لا يسجّلون الدخول. تتعثّر الموافقات. ولا يُستخدَم النظام.{" "}<strong>احتجتُ تدفّقاً يعمل لأناسٍ لا يفتحون Odoo أبداً.</strong></>}
                />
              </p>
            </>
          ),
        },
        {
          kicker: <T en="Design strategy" ar="استراتيجية التصميم" />,
          heading: <T en="Optimize for the approval that actually happens." ar="حسّن من أجل الموافقة التي تحدث فعلاً." />,
          body: (
            <>
              <Lead>
                <T
                  en="A module that's technically complete but never used is a failure. The whole strategy was to remove every reason a manager might not approve — starting with the login."
                  ar="وحدةٌ مكتملة تقنياً لكن لا تُستخدَم أبداً هي فشل. كانت الاستراتيجية كلّها إزالة كل سببٍ قد يجعل المدير لا يوافق — بدءاً من تسجيل الدخول."
                />
              </Lead>
              <FactGrid
                items={[
                  { label: <T en="Goal" ar="الهدف" />, value: <T en="Approvals that actually get done, fast" ar="موافقاتٌ تُنجَز فعلاً، وبسرعة" /> },
                  { label: <T en="Hypothesis" ar="الفرضية" />, value: <T en="Email-as-UI removes the stall that kills adoption" ar="«البريد كواجهة» يزيل التعثّر الذي يقتل التبنّي" /> },
                  { label: <T en="Priority" ar="الأولوية" />, value: <T en="Friction reduction over feature surface" ar="تقليل الاحتكاك قبل اتّساع الميزات" /> },
                  { label: <T en="Tradeoff" ar="المفاضلة" />, value: <T en="Token-security burden for a zero-login flow" ar="عبء تأمين الرمز مقابل تدفّقٍ بلا تسجيل دخول" /> },
                ]}
              />
            </>
          ),
        },
        {
          kicker: <T en="Approach" ar="المقاربة" />,
          heading: <T en="Email is the UI." ar="البريد هو الواجهة." />,
          body: (
            <>
              <p>
                <T
                  en={<>The module attaches a unique token to each expense request when it&apos;s sent to a manager. The approval email contains two links: <strong>Approve</strong> and <strong>Reject</strong>. Each link is a one-time URL bound to the token, the request ID, and the manager&apos;s hr.employee record. Clicking it triggers a state transition — no Odoo login required.</>}
                  ar={<>تُرفق الوحدة رمزاً فريداً بكل طلب نفقةٍ عند إرساله إلى المدير. ويحوي بريد الموافقة رابطين: <strong>موافقة</strong> و<strong>رفض</strong>. كلّ رابطٍ عنوانٌ يُستخدَم مرّةً واحدة مرتبطٌ بالرمز، ومعرّف الطلب، وسجلّ hr.employee للمدير. والنقر عليه يُطلق انتقال حالة — دون الحاجة لتسجيل الدخول إلى Odoo.</>}
                />
              </p>

              <SmartExpenseDiagram />

              <Callout kicker={<T en="Design principle" ar="مبدأ التصميم" />}>
                <T
                  en="Friction is the enemy of compliance. Every login the user has to make is a chance to forget to approve — so the action lives where they already are: their inbox."
                  ar="الاحتكاك عدوّ الالتزام. كلّ تسجيل دخولٍ يُجبَر عليه المستخدم فرصةٌ لنسيان الموافقة — لذا يعيش الإجراء حيث هم أصلاً: في بريدهم."
                />
              </Callout>

              <Figure
                label="Approval email"
                caption={<T en="One-click Approve / Reject email — add screenshot" ar="بريد موافقة / رفض بنقرةٍ واحدة — تُضاف اللقطة" />}
              />
            </>
          ),
        },
        {
          kicker: <T en="Technical architecture" ar="البنية التقنية" />,
          heading: <T en="Three trade-offs that shaped the build." ar="ثلاث مفاضلاتٍ شكّلت البناء." />,
          body: (
            <>
              <ADR
                number={1}
                title={<T en="Token-secured URLs over OAuth approval flows." ar="روابط مؤمّنة برمز بدل تدفّقات موافقة OAuth." />}
                context={
                  <T
                    en="The standard Odoo pattern sends a notification email with a link into the Odoo UI. Manager logs in, finds the record, clicks approve. Real-world result: approvals stall for days."
                    ar="النمط القياسي في Odoo يرسل بريد إشعارٍ برابطٍ إلى واجهة Odoo. المدير يسجّل الدخول، ويجد السجلّ، وينقر موافقة. النتيجة في الواقع: تتعثّر الموافقات أياماً."
                  />
                }
                decision={
                  <T
                    en={<>I embed a <strong>cryptographically random token</strong> in the email URL itself. The token is single-use, bound to the request and the manager&apos;s employee record, and expires once acted on.</>}
                    ar={<>أُضمّن <strong>رمزاً عشوائياً تشفيرياً</strong> في رابط البريد نفسه. الرمز يُستخدَم مرّةً واحدة، ومرتبطٌ بالطلب وبسجلّ موظّف المدير، وينتهي بمجرّد التصرّف به.</>}
                  />
                }
                consequences={
                  <T
                    en="Approvals collapse from days to seconds, and every state transition logs the token used. Trade-off: emails must be sent over TLS-encrypted SMTP, since the token grants action rights."
                    ar="تنهار الموافقات من أيامٍ إلى ثوانٍ، وكلّ انتقال حالةٍ يُسجّل الرمز المُستخدَم. المفاضلة: يجب إرسال الرسائل عبر SMTP مشفّر بـTLS، لأن الرمز يمنح حقوق التصرّف."
                  />
                }
              />

              <ADR
                number={2}
                title={<T en="Journal entries on finance approval, not on submission." ar="القيود المحاسبية عند موافقة المالية، لا عند التقديم." />}
                context={
                  <T
                    en="An eager design auto-creates the journal entry the moment an employee submits. Simpler state machine, but the ledger fills with unapproved entries that have to be reversed."
                    ar="تصميمٌ متعجّل يُنشئ القيد المحاسبي تلقائياً لحظة تقديم الموظّف. آلة حالاتٍ أبسط، لكن دفتر الأستاذ يمتلئ بقيودٍ غير معتمدة يلزم عكسها."
                  />
                }
                decision={
                  <T
                    en={<>The <code>account.move</code> is only generated on the finance-approval transition. Until then, the request is just an HR record.</>}
                    ar={<>لا يُولَّد <code>account.move</code> إلا عند انتقال موافقة المالية. حتى ذلك الحين، يبقى الطلب مجرّد سجلّ موارد بشرية.</>}
                  />
                }
                consequences={
                  <T
                    en="The ledger stays clean — accountants only see entries that are real liabilities. Trade-off: an extra state, and the cron digest must know to skip pending requests."
                    ar="يبقى دفتر الأستاذ نظيفاً — لا يرى المحاسبون إلا قيوداً تمثّل التزاماتٍ حقيقية. المفاضلة: حالةٌ إضافية، وعلى ملخّص cron أن يعرف تخطّي الطلبات المعلّقة."
                  />
                }
              />

              <ADR
                number={3}
                title={<T en="RBAC at the record-rule layer, not the menu layer." ar="تحكّمٌ بالوصول في طبقة قواعد السجلات، لا طبقة القوائم." />}
                context={
                  <T
                    en="The easiest Odoo RBAC hides menus per group. But users can still construct URLs and reach records they shouldn't see."
                    ar="أسهل تحكّمٍ بالوصول في Odoo يُخفي القوائم حسب المجموعة. لكن يظلّ بإمكان المستخدمين تركيب الروابط والوصول إلى سجلاتٍ لا ينبغي أن يروها."
                  />
                }
                decision={
                  <T
                    en={<>Permissions live in <strong>record rules</strong> at the ORM layer. An employee sees only their own requests; a manager only requests routed to them; finance the approved queue. Menu hiding is cosmetic — the rules are the contract.</>}
                    ar={<>تعيش الصلاحيات في <strong>قواعد السجلات</strong> في طبقة ORM. الموظّف يرى طلباته فقط؛ والمدير الطلبات المُوجَّهة إليه فقط؛ والمالية الطابور المعتمد. إخفاء القوائم تجميلي — القواعد هي العقد.</>}
                  />
                }
                consequences={
                  <T
                    en="Audit-grade access enforcement. A URL-poking employee hits an ORM exception, not a leak. Trade-off: a small testing matrix for cross-role visibility."
                    ar="فرضُ وصولٍ بمستوى التدقيق. موظّفٌ يعبث بالروابط يصطدم باستثناء ORM، لا بتسريب. المفاضلة: مصفوفة اختبارٍ صغيرة للرؤية عبر الأدوار."
                  />
                }
              />
            </>
          ),
        },
        {
          kicker: <T en="Bilingual by default" ar="ثنائي اللغة افتراضياً" />,
          heading: <T en="Full EN/AR translations — not an afterthought." ar="ترجمةٌ كاملة بالإنجليزية والعربية — لا فكرةً لاحقة." />,
          body: (
            <>
              <p>
                <T
                  en={<>Every field, label, status, email template, and PDF report ships with full Arabic and English translations. The approval emails detect the recipient&apos;s preferred language from their{" "}<code>res.users.lang</code> setting, and QWeb-generated PDF reports pick up the same locale automatically.</>}
                  ar={<>كلّ حقلٍ وتسمية وحالة وقالب بريدٍ وتقرير PDF يُطلق بترجمةٍ كاملة بالعربية والإنجليزية. وتكتشف رسائل الموافقة لغة المستلِم المفضّلة من إعداد{" "}<code>res.users.lang</code> الخاص به، وتلتقط تقارير PDF المُولّدة بـQWeb المنطقة نفسها تلقائياً.</>}
                />
              </p>
              <p>
                <T
                  en="In a Damascus-based SME, this is what makes the difference between a module that gets installed and one that gets used."
                  ar="في شركةٍ صغيرة بدمشق، هذا ما يصنع الفرق بين وحدةٍ تُثبَّت وأخرى تُستخدَم."
                />
              </p>
            </>
          ),
        },
        {
          kicker: <T en="Outcomes" ar="النتائج" />,
          heading: <T en="A pattern worth open-sourcing." ar="نمطٌ يستحقّ أن يُفتَح مصدره." />,
          body: (
            <>
              <p>
                <T
                  en="Smart Expense is live and open source under LGPL-3.0 — the token-secured approval flow turns a multi-day paper loop into a one-click action that managers complete from their inbox, with access enforced at the ORM layer and a clean ledger downstream."
                  ar="Smart Expense حيّ ومفتوح المصدر تحت LGPL-3.0 — يحوّل تدفّق الموافقة المؤمّن بالرمز حلقةً ورقية تستغرق أياماً إلى إجراءٍ بنقرةٍ واحدة يُنجزه المديرون من بريدهم، بوصولٍ مفروضٍ في طبقة ORM ودفتر أستاذٍ نظيف تالياً."
                />
              </p>
              <ol className="list-decimal space-y-2 ps-5 marker:text-[var(--accent)]">
                <li>
                  <T
                    en={<><strong>Reusable.</strong> The token-secured approval pattern generalizes far beyond expense reports.</>}
                    ar={<><strong>قابل لإعادة الاستخدام.</strong> نمط الموافقة المؤمّن بالرمز يتعمّم إلى ما هو أبعد بكثير من تقارير النفقات.</>}
                  />
                </li>
                <li>
                  <T
                    en={<><strong>Auditable.</strong> An Odoo 19 module signed with my name lives longer than a CV bullet.</>}
                    ar={<><strong>قابل للتدقيق.</strong> وحدة Odoo 19 موقّعةٌ باسمي تعيش أطول من سطرٍ في سيرةٍ ذاتية.</>}
                  />
                </li>
                <li>
                  <T
                    en={<><strong>Low IP risk.</strong> The module is mechanical, not strategic — sharing it costs nothing and helps the Odoo community.</>}
                    ar={<><strong>مخاطر ملكيةٍ فكرية منخفضة.</strong> الوحدة آليّة، لا استراتيجية — مشاركتها لا تكلّف شيئاً وتُفيد مجتمع Odoo.</>}
                  />
                </li>
              </ol>
            </>
          ),
        },
        {
          kicker: <T en="Reflection" ar="تأمّل" />,
          heading: <T en="What I'd carry forward." ar="ما سأحمله معي." />,
          body: (
            <>
              <p>
                <T
                  en="The win here was a product insight, not a technical one: meeting people where they already are (their inbox) beats any amount of in-app polish they'll never see. I'll keep reaching for the lowest-friction surface before building a new screen."
                  ar="كان الفوز هنا استنتاجاً عن المنتج، لا تقنياً: لقاء الناس حيث هم أصلاً (بريدهم) يتفوّق على أي قدرٍ من الصقل داخل التطبيق لن يروه أبداً. وسأظلّ أمدّ يدي إلى أقلّ السطوح احتكاكاً قبل بناء شاشةٍ جديدة."
                />
              </p>
              <p>
                <T
                  en="Next, I'd add usage analytics and a lightweight audit dashboard — the token model already logs every transition, so the data to prove adoption is there to surface."
                  ar="تالياً، سأضيف تحليلات استخدامٍ ولوحة تدقيقٍ خفيفة — نموذج الرمز يُسجّل كلّ انتقالٍ أصلاً، فالبيانات اللازمة لإثبات التبنّي موجودةٌ وجاهزة للعرض."
                />
              </p>
            </>
          ),
        },
      ]}
      nextProject={{
        label: <T en="BloomBelly — three AIs behind one app →" ar="BloomBelly — ثلاثة نماذج ذكاء اصطناعي خلف تطبيقٍ واحد →" />,
        href: "/projects/bloombelly",
      }}
      />
    </>
  );
}
