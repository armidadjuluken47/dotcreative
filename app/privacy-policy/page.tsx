import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | DotCreative",
  description:
    "How DotCreative collects, uses, and protects your personal information when you use our website and services.",
}

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="container max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: April 2026</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Introduction</h2>
            <p>
              DotCreative (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates this website and provides IT consulting and
              software-related services. This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or communicate with us, in line with applicable laws in Kenya,
              including the Data Protection Act, 2019.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Information we collect</h2>
            <p>We may collect information that you provide directly, such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact details (including email address and phone number)</li>
              <li>Company or organisation name and job title, where relevant</li>
              <li>Messages you send through contact forms, email, or other channels</li>
              <li>Preferences you express when subscribing to newsletters or updates</li>
            </ul>
            <p>We may also collect certain technical information automatically, such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address, browser type, device type, and approximate location derived from IP</li>
              <li>Pages visited, time spent, and referring URLs</li>
              <li>Cookies and similar technologies as described below</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">How we use your information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to enquiries and provide the services you request</li>
              <li>Improve our website, products, and user experience</li>
              <li>Send operational communications and, where you have opted in, marketing messages</li>
              <li>Comply with legal obligations and protect our rights</li>
              <li>Analyse aggregate usage to understand how our site is used</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Legal basis</h2>
            <p>
              Where applicable, we process personal data based on your consent, our legitimate interests (such as
              operating and securing our website), performance of a contract, or compliance with legal obligations. You
              may withdraw consent where processing is consent-based, without affecting the lawfulness of processing
              before withdrawal.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Cookies and similar technologies</h2>
            <p>
              We may use cookies, local storage, and similar technologies to remember preferences, analyse traffic, and
              improve functionality. Where required by law, we will obtain your consent before non-essential cookies are
              set. You can control cookies through your browser settings.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Third-party services</h2>
            <p>
              Our website may use third-party services (for example, analytics, email delivery, or form processors). Those
              providers process data under their own terms and privacy policies. We encourage you to review their
              policies when you interact with embedded tools or outbound links.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Data retention</h2>
            <p>
              We retain personal information only as long as necessary for the purposes described in this policy, unless
              a longer retention period is required by law or for legitimate business needs such as resolving disputes or
              enforcing agreements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Your rights</h2>
            <p>
              Subject to applicable law, you may have the right to access, correct, delete, or restrict processing of
              your personal data, object to certain processing, or request data portability. You may also lodge a
              complaint with the Office of the Data Protection Commissioner in Kenya. To exercise your rights, contact us
              using the details below.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect personal information. No method of
              transmission over the internet is completely secure; we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Children</h2>
            <p>
              Our services are not directed at individuals under 16. We do not knowingly collect personal information
              from children. If you believe we have collected such information, please contact us and we will take steps
              to delete it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top will reflect the
              latest revision. We encourage you to review this page periodically.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Contact us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, contact us at:
            </p>
            <ul className="list-none space-y-1">
              <li>
                <strong className="text-foreground">Email:</strong>{" "}
                <a href="mailto:info@dotcreative.co.ke" className="text-primary hover:underline">
                  info@dotcreative.co.ke
                </a>
              </li>
              <li>
                <strong className="text-foreground">Address:</strong> 21 Tigoni Road, Kilimani, Nairobi, Kenya
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}
