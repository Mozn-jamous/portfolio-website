import type { Metadata } from "next";
import {
  CaseStudyLayout,
  ADR,
  Callout,
  FactGrid,
  Figure,
  Lead,
  Persona,
  Priorities,
} from "@/components/case-study/CaseStudyLayout";
import { SmartExpenseDiagram } from "@/components/case-study/ArchitectureDiagram";
import {
  StructuredData,
  caseStudyStructuredData,
} from "@/components/site/StructuredData";
import { T } from "@/components/i18n/T";
import { siteUrl } from "@/lib/base-path";

const DESCRIPTION =
  "Odoo 19 module. Token-secured one-click email approvals routed via hr.employee hierarchy. Auto-generated journal entries on finance sign-off. LGPL-3.0.";

export const metadata: Metadata = {
  title: "Smart Expense Manager — Mozn Jamous",
  description: DESCRIPTION,
  openGraph: {
    title: "Smart Expense Manager — approvals at one click",
    description: DESCRIPTION,
    type: "article",
    url: siteUrl("/projects/smart-expense"),
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
        eyebrow: <T en="Odoo 19 · Python · Open source" ar="Odoo 19 · Python · مفتوح المصدر" />,
        status: <T en="Live, LGPL-3.0" ar="حيّ، LGPL-3.0" />,
        title: (
          <T
            en="Smart Expense Manager: an approval that takes one click."
            ar="Smart Expense Manager: موافقة بنقرة واحدة."
          />
        ),
        lede: (
          <T
            en="A custom Odoo 19 module that replaces the paper expense loop. Approval emails carry a single-use token and route through the hr.employee hierarchy, so nobody has to log in. Finance sign-off generates the journal entry, and a cron job emails a monthly PDF report."
            ar="وحدة Odoo 19 مخصّصة تحلّ محلّ حلقة النفقات الورقية. رسائل الموافقة تحمل رمزاً يُستخدَم مرة واحدة وتُوجَّه عبر تسلسل hr.employee، فلا يحتاج أحد إلى تسجيل الدخول. واعتماد المالية يولّد القيد المحاسبي، ومهمّة cron ترسل تقرير PDF شهرياً."
          />
        ),
        year: <T en="2026 to now" ar="2026 حتى الآن" />,
        role: <T en="Designed and wrote it on my own" ar="صمّمتها وكتبتها وحدي" />,
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
        { value: <T en="Days to seconds" ar="من أيام إلى ثوانٍ" />, label: <T en="Approval time, on a one-click flow with no login" ar="زمن الموافقة، على تدفّق بنقرة واحدة بلا تسجيل دخول" /> },
        { value: <T en="No login" ar="بلا تسجيل دخول" />, label: <T en="Managers act from email; the system gets used" ar="المديرون يتصرّفون من البريد؛ فيُستخدَم النظام" /> },
        { value: <T en="Audit-grade" ar="بمستوى التدقيق" />, label: <T en="Access enforced in record rules rather than hidden menus" ar="الوصول مفروض في قواعد السجلات بدل قوائم مخفية" /> },
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
                  en="An employee submits a receipt from their phone. A manager approves with one click from email. Finance posts with one click from email. The journal entry is generated automatically, and a cron job mails a monthly department digest. Nobody logs in anywhere along the way."
                  ar="يقدّم الموظّف إيصالاً من جوّاله. ويوافق المدير بنقرة واحدة من البريد. وتُرحّل المالية بنقرة واحدة من البريد. ويُولَّد القيد المحاسبي تلقائياً، وترسل مهمّة cron ملخّصاً شهرياً للقسم. ولا يسجّل أحد دخوله في أي موضع من الطريق."
                />
              </Lead>
              <FactGrid
                items={[
                  { label: <T en="Role" ar="الدور" />, value: <T en="Designed it and wrote all of it" ar="صمّمتها وكتبتها كلها" /> },
                  { label: <T en="Timeline" ar="الإطار الزمني" />, value: <T en="2026 to now" ar="2026 حتى الآن" /> },
                  { label: <T en="Module type" ar="نوع الوحدة" />, value: <T en="Odoo 19 custom" ar="Odoo 19 مخصّصة" /> },
                  { label: <T en="Users" ar="المستخدمون" />, value: <T en="Employees, managers, finance" ar="موظفون، ومديرون، ومالية" /> },
                  { label: <T en="Auth pattern" ar="نمط المصادقة" />, value: <T en="Token-secured URL" ar="رابطٌ مؤمّن برمز" /> },
                  { label: <T en="License" ar="الترخيص" />, value: <T en="LGPL-3.0, open source" ar="LGPL-3.0، مفتوح المصدر" /> },
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
                  en="In a typical small business in Damascus, an employee buys something for work, keeps the receipt in a desk drawer for two weeks, hands it to a manager who signs a paper form, then walks it to finance who types it into a ledger. At every stage somebody is the bottleneck. Receipts get lost. Numbers get re-typed. And the whole loop is invisible to the company until month-end."
                  ar="في شركة صغيرة نموذجية بدمشق، يشتري موظّف شيئاً للعمل، ويحتفظ بالإيصال في درج مكتب أسبوعين، ثم يسلّمه لمدير يوقّع نموذجاً ورقياً، ثم يمشي به إلى المالية التي تكتبه في دفتر. وفي كل مرحلة يكون أحدهم عنق الزجاجة. تضيع الإيصالات. وتُعاد كتابة الأرقام. وتبقى الحلقة كلها غير مرئية للشركة حتى نهاية الشهر."
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
          kicker: <T en="Users & personas" ar="المستخدمون والـ Personas" />,
          heading: <T en="Who has to actually use it." ar="من عليه أن يستخدمه فعلاً." />,
          body: (
            <>
              <p>
                <T
                  en="The flow crosses three roles, and the person who decides whether the system lives or dies is the manager who never logs in. Each role became a persona with a short story and the friction that kept the old paper loop alive."
                  ar="يعبر التدفّق ثلاثة أدوار، ومن يقرّر حياة النظام أو موته هو المدير الذي لا يسجّل الدخول أبداً. وصار كل دور persona بقصة قصيرة والاحتكاك الذي أبقى الحلقة الورقية القديمة حيّة."
                />
              </p>

              <Persona
                initial={<T en="O" ar="ع" />}
                name={<T en="Omar, an employee" ar="عمر، موظّف" />}
                role={<T en="Submits the expense" ar="يقدّم النفقة" />}
                story={
                  <T
                    en="I want to photograph the receipt and get reimbursed, not walk a paper form around the building."
                    ar="أريد أن أصوّر الإيصال وأُعوَّض، لا أن أتنقّل بنموذج ورقي في المبنى."
                  />
                }
                goals={
                  <T
                    en="Submit from his phone in seconds; know where the request stands."
                    ar="التقديم من جوّاله في ثوانٍ؛ ومعرفة أين وصل الطلب."
                  />
                }
                frustrations={
                  <T
                    en="Lost receipts, and reimbursements that take weeks because a form sat in a drawer."
                    ar="إيصالات ضائعة، وتعويضات تستغرق أسابيع لأن نموذجاً بقي في درج."
                  />
                }
              />

              <Persona
                initial={<T en="N" ar="ن" />}
                name={<T en="Nour, a line manager" ar="نور، مديرة مباشِرة" />}
                role={<T en="Approves, and makes or breaks the system" ar="توافق، وعليها يقوم النظام أو يسقط" />}
                story={
                  <T
                    en="I want to approve in one tap from my inbox. I am not logging into another system just to click yes."
                    ar="أريد أن أوافق بنقرة واحدة من بريدي. ولن أسجّل الدخول إلى نظام آخر فقط لأنقر «نعم»."
                  />
                }
                goals={
                  <T
                    en="Clear the approval the moment she sees it, wherever she is."
                    ar="إنهاء الموافقة لحظة رؤيتها، أينما كانت."
                  />
                }
                frustrations={
                  <T
                    en="Being asked to log into Odoo for a five-second decision, which is why approvals stall for days."
                    ar="أن يُطلب منها تسجيل الدخول إلى Odoo لقرار من خمس ثوانٍ، ولهذا تتعثّر الموافقات أياماً."
                  />
                }
              />

              <Persona
                initial={<T en="F" ar="ف" />}
                name={<T en="Farah, in finance" ar="فرح، في المالية" />}
                role={<T en="Posts to the ledger" ar="تُرحّل إلى دفتر الأستاذ" />}
                story={
                  <T
                    en="I want a clean ledger with real approved liabilities in it, and nothing I have to reverse later."
                    ar="أريد دفتر أستاذ نظيفاً فيه التزامات حقيقية معتمدة، ولا شيء أُضطرّ لعكسه لاحقاً."
                  />
                }
                goals={
                  <T
                    en="Post with one click, and trust that every entry was already approved."
                    ar="الترحيل بنقرة واحدة، والثقة بأن كل قيد كان معتمداً أصلاً."
                  />
                }
                frustrations={
                  <T
                    en="A ledger filling with unapproved or duplicate entries she has to clean up."
                    ar="دفتر أستاذٍ يمتلئ بقيودٍ غير معتمدة أو مكرّرة عليها تنظيفها."
                  />
                }
              />

              <Callout kicker={<T en="Problem statements" ar="بيانات المشكلة" />}>
                <T
                  en={<><strong>Nour</strong> has to be able to approve an expense without logging into Odoo, because every login is a chance to forget, and a manager who does not approve is the bottleneck the whole system fails on. <strong>Omar</strong> needs a fast paperless submission he can track, and <strong>Farah</strong> needs a ledger that only ever holds approved liabilities.</>}
                  ar={<><strong>نور</strong> يجب أن تستطيع الموافقة على نفقة دون تسجيل الدخول إلى Odoo، لأن كل تسجيل فرصة للنسيان، ومديرٌ لا يوافق هو عنق الزجاجة الذي يفشل عليه النظام كله. و<strong>عمر</strong> يحتاج تقديماً سريعاً بلا ورق يستطيع تتبّعه، و<strong>فرح</strong> تحتاج دفتر أستاذ لا يحمل إلا التزامات معتمدة.</>}
                />
              </Callout>
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
                  en="A module that is technically complete and never used has failed. So the whole strategy was to remove every reason a manager might not approve, starting with the login."
                  ar="الوحدة المكتملة تقنياً التي لا تُستخدَم أبداً فاشلة. فكانت الاستراتيجية كلها إزالة كل سبب قد يجعل المدير لا يوافق، وأولها تسجيل الدخول."
                />
              </Lead>
              <FactGrid
                items={[
                  { label: <T en="Goal" ar="الهدف" />, value: <T en="Approvals that actually get done, fast" ar="موافقاتٌ تُنجَز فعلاً، وبسرعة" /> },
                  { label: <T en="Hypothesis" ar="الفرضية" />, value: <T en="Putting the action in email removes the stall that kills adoption" ar="وضع الإجراء في البريد يزيل التعثّر الذي يقتل التبنّي" /> },
                  { label: <T en="Priority" ar="الأولوية" />, value: <T en="Less friction ahead of more features" ar="احتكاك أقل قبل ميزات أكثر" /> },
                  { label: <T en="Tradeoff" ar="المفاضلة" />, value: <T en="Carrying token security to get a login-free flow" ar="حمل عبء تأمين الرمز لنيل تدفّق بلا تسجيل دخول" /> },
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
                  en={<>The module attaches a unique token to an expense request when it goes out to a manager. The approval email carries two links, <strong>Approve</strong> and <strong>Reject</strong>, each a one-time URL bound to that token, the request ID and the manager&apos;s hr.employee record. Clicking one moves the request to its next state, with no Odoo login anywhere in it.</>}
                  ar={<>ترفق الوحدة رمزاً فريداً بطلب النفقة عند إرساله إلى المدير. ويحمل بريد الموافقة رابطين، <strong>موافقة</strong> و<strong>رفض</strong>، كل واحد عنوان يُستخدَم مرة واحدة مرتبط بذلك الرمز ومعرّف الطلب وسجلّ hr.employee للمدير. والنقر على أحدهما ينقل الطلب إلى حالته التالية، دون أي تسجيل دخول إلى Odoo فيه.</>}
                />
              </p>

              <SmartExpenseDiagram />

              <Callout kicker={<T en="Design principle" ar="مبدأ التصميم" />}>
                <T
                  en="Friction is the enemy of compliance. Every login you ask for is another chance to forget, so the action lives where the person already is: their inbox."
                  ar="الاحتكاك عدوّ الالتزام. وكل تسجيل دخول تطلبه فرصة أخرى للنسيان، فيعيش الإجراء حيث يكون الشخص أصلاً: في بريده."
                />
              </Callout>

              <Figure
                label="Approval email"
                caption={<T en="The one-click approve or reject email. Screenshot still to add." ar="بريد الموافقة أو الرفض بنقرة واحدة. اللقطة لم تُضَف بعد." />}
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
                    en="The standard Odoo pattern emails a notification with a link into the Odoo UI. The manager logs in, finds the record, clicks approve. What actually happens is that approvals stall for days."
                    ar="النمط القياسي في Odoo يرسل إشعاراً برابط إلى واجهة Odoo. يسجّل المدير الدخول، ويجد السجلّ، وينقر موافقة. وما يحدث فعلاً أن الموافقات تتعثّر أياماً."
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
                    en="Approvals drop from days to seconds, and every state transition records the token that was used. The cost is that mail has to go over TLS-encrypted SMTP, because the token itself grants the right to act."
                    ar="تنزل الموافقات من أيام إلى ثوانٍ، وكل انتقال حالة يسجّل الرمز الذي استُخدم. والكلفة أن البريد يجب أن يمرّ عبر SMTP مشفّر بـTLS، لأن الرمز نفسه يمنح حقّ التصرّف."
                  />
                }
              />

              <ADR
                number={2}
                title={<T en="Journal entries on finance approval, not on submission." ar="القيود المحاسبية عند موافقة المالية، لا عند التقديم." />}
                context={
                  <T
                    en="An eager design creates the journal entry the moment an employee submits. That is a simpler state machine, and it fills the ledger with unapproved entries somebody then has to reverse."
                    ar="التصميم المتعجّل يُنشئ القيد المحاسبي لحظة تقديم الموظّف. وهذه آلة حالات أبسط، وهي تملأ دفتر الأستاذ بقيود غير معتمدة على أحدهم أن يعكسها بعدها."
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
                    en="The ledger stays clean, and an accountant only ever sees entries that are real liabilities. The cost is one more state, plus the cron digest having to know to skip pending requests."
                    ar="يبقى دفتر الأستاذ نظيفاً، ولا يرى المحاسب إلا قيوداً تمثّل التزامات حقيقية. والكلفة حالة إضافية، مع أن على ملخّص cron أن يعرف تخطّي الطلبات المعلّقة."
                  />
                }
              />

              <ADR
                number={3}
                title={<T en="RBAC at the record-rule layer, not the menu layer." ar="تحكّمٌ بالوصول في طبقة قواعد السجلات، لا طبقة القوائم." />}
                context={
                  <T
                    en="The easiest Odoo access control hides menus per group. A user can still construct a URL and reach records they were never meant to see."
                    ar="أسهل تحكّم بالوصول في Odoo يخفي القوائم حسب المجموعة. ويستطيع المستخدم مع ذلك أن يركّب رابطاً ويصل إلى سجلات لم يكن مقصوداً أن يراها."
                  />
                }
                decision={
                  <T
                    en={<>Permissions live in <strong>record rules</strong> at the ORM layer. An employee sees their own requests, a manager sees the requests routed to them, and finance sees the approved queue. Hiding menus is cosmetic; the rules are the contract.</>}
                    ar={<>تعيش الصلاحيات في <strong>قواعد السجلات</strong> في طبقة ORM. الموظّف يرى طلباته، والمدير يرى الطلبات المُوجَّهة إليه، والمالية ترى الطابور المعتمد. وإخفاء القوائم تجميلي؛ القواعد هي العقد.</>}
                  />
                }
                consequences={
                  <T
                    en="Access enforcement you can audit. An employee poking at URLs hits an ORM exception instead of finding a leak. The cost is a small testing matrix for cross-role visibility."
                    ar="فرضُ وصول يمكنك تدقيقه. الموظّف الذي يعبث بالروابط يصطدم باستثناء ORM بدل أن يجد تسريباً. والكلفة مصفوفة اختبار صغيرة للرؤية عبر الأدوار."
                  />
                }
              />
            </>
          ),
        },
        {
          kicker: <T en="Bilingual by default" ar="ثنائي اللغة افتراضياً" />,
          heading: <T en="Arabic and English, both complete." ar="العربية والإنجليزية، كلتاهما كاملة." />,
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
                  en="In a Damascus SME, that is the difference between a module that gets installed and one that gets used."
                  ar="في شركة صغيرة بدمشق، هذا هو الفرق بين وحدة تُثبَّت وأخرى تُستخدَم."
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
                  en="Smart Expense is live and open source under LGPL-3.0. The token-secured approval flow turns a multi-day paper loop into a one-click action a manager finishes from their inbox, with access enforced at the ORM layer and a clean ledger downstream."
                  ar="Smart Expense حيّ ومفتوح المصدر تحت LGPL-3.0. ويحوّل تدفّق الموافقة المؤمّن بالرمز حلقةً ورقية تستغرق أياماً إلى إجراء بنقرة واحدة يُنجزه المدير من بريده، بوصول مفروض في طبقة ORM ودفتر أستاذ نظيف تالياً."
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
                    en={<><strong>Low IP risk.</strong> The module is mechanical rather than strategic, so sharing it costs nothing and helps the Odoo community.</>}
                    ar={<><strong>مخاطر ملكية فكرية منخفضة.</strong> الوحدة آليّة أكثر منها استراتيجية، فمشاركتها لا تكلّف شيئاً وتفيد مجتمع Odoo.</>}
                  />
                </li>
              </ol>
            </>
          ),
        },
        {
          kicker: <T en="Validation" ar="التحقّق" />,
          heading: <T en="The real test is adoption." ar="الاختبار الحقيقي هو التبنّي." />,
          body: (
            <>
              <p>
                <T
                  en="For an internal tool, the success metric isn't a satisfaction score — it's whether managers actually approve. I'd validate with a short usability study on the one-click email path, then watch the token logs (which already record every transition) as the affinity-style signal for where the flow stalls, and prioritize from there."
                  ar="بالنسبة لأداةٍ داخلية، مقياس النجاح ليس درجة رضا — بل ما إذا كان المديرون يوافقون فعلاً. سأتحقّق بدراسة قابلية استخدامٍ قصيرة على مسار البريد بنقرةٍ واحدة، ثم أراقب سجلّات الرمز (التي تُسجّل كل انتقالٍ أصلاً) كإشارةٍ — على غرار التقارب — لأين يتعثّر التدفّق، وأرتّب الأولويات من هناك."
                />
              </p>
              <Priorities
                items={[
                  {
                    tier: "P0",
                    label: (
                      <T
                        en="The one-click Approve / Reject must work reliably across the email clients managers actually use — if it breaks once, trust in the link is gone."
                        ar="«موافقة / رفض» بنقرةٍ واحدة يجب أن يعمل بثباتٍ عبر عملاء البريد التي يستخدمها المديرون فعلاً — إن تعطّل مرّةً، ذهبت الثقة بالرابط."
                      />
                    ),
                  },
                  {
                    tier: "P1",
                    label: (
                      <T
                        en="The Arabic and English approval emails must render identically well, since recipients act straight from the inbox."
                        ar="بريدا الموافقة بالعربية والإنجليزية يجب أن يُعرَضا بجودةٍ متطابقة، لأن المستلِمين يتصرّفون مباشرةً من البريد."
                      />
                    ),
                  },
                  {
                    tier: "P2",
                    label: (
                      <T
                        en="A lightweight audit dashboard surfacing the token logs — proving adoption from data that already exists."
                        ar="لوحة تدقيقٍ خفيفة تُظهر سجلّات الرمز — لإثبات التبنّي من بياناتٍ موجودةٍ أصلاً."
                      />
                    ),
                  },
                ]}
              />
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
