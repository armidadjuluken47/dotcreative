import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | DotCreative",
  description:
    "Terms and conditions governing your use of the DotCreative website and related services.",
}

export default function TermsPage() {
  return (
    <section className="pt-10 pb-16 md:pt-14 md:pb-24">
      <div className="container max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: April 2026</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Agreement to terms</h2>
            <p>
              By accessing or using the website operated by DotCreative (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) at dotcreative.co.ke
              and related pages (collectively, the &quot;Site&quot;), you agree to be bound by these Terms of Service
              (&quot;Terms&quot;). If you do not agree, do not use the Site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Services and information</h2>
            <p>
              The Site describes our consulting, software, and related IT services. Content is for general information
              only and does not constitute a binding offer or professional advice unless we enter a separate written
              agreement with you. Service scope, fees, and deliverables are defined in individual contracts or statements
              of work.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Use of the Site</h2>
            <p>You agree to use the Site only for lawful purposes. You must not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable law or regulation</li>
              <li>Attempt to gain unauthorised access to our systems, accounts, or data</li>
              <li>Introduce malware, scrape the Site in a way that harms our infrastructure, or overload our servers</li>
              <li>Misrepresent your identity or affiliation when contacting us</li>
              <li>Use automated means to harvest data from the Site without our prior written consent</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Intellectual property</h2>
            <p>
              Unless otherwise noted, text, graphics, logos, layouts, and other materials on the Site are owned by
              DotCreative or our licensors and are protected by intellectual property laws. You may not copy,
              reproduce, distribute, or create derivative works from the Site except for temporary viewing or as allowed
              by limited fair dealing or fair use under applicable law, without our prior written permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Third-party links</h2>
            <p>
              The Site may contain links to third-party websites. We are not responsible for their content, privacy
              practices, or availability. Accessing third-party sites is at your own risk.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Disclaimer</h2>
            <p>
              The Site and its content are provided &quot;as is&quot; and &quot;as available&quot;. To the fullest extent permitted by law,
              we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose,
              and non-infringement. We do not warrant that the Site will be uninterrupted or error-free.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Limitation of liability</h2>
            <p>
              To the maximum extent permitted by applicable law in Kenya, DotCreative and its affiliates, directors,
              employees, and agents shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages, or for any loss of profits, data, or goodwill, arising out of or in connection with your
              use of the Site, even if we have been advised of the possibility of such damages. Our total liability for
              any claim arising from your use of the Site shall not exceed the amount you paid us (if any) for services
              directly related to that claim in the twelve months preceding the claim, or one hundred United States
              dollars if no such payment applies, whichever is greater.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Indemnity</h2>
            <p>
              You agree to indemnify and hold harmless DotCreative and its affiliates from any claims, damages, losses,
              or expenses (including reasonable legal fees) arising from your violation of these Terms or your misuse of
              the Site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Governing law and disputes</h2>
            <p>
              These Terms are governed by the laws of the Republic of Kenya, without regard to conflict-of-law
              principles. Any dispute arising from these Terms or the Site shall be subject to the exclusive
              jurisdiction of the courts of Kenya, except where mandatory consumer protection laws provide otherwise.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Changes</h2>
            <p>
              We may modify these Terms at any time by posting an updated version on this page. The &quot;Last updated&quot; date
              will change accordingly. Continued use of the Site after changes constitutes your acceptance of the revised
              Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p>For questions about these Terms, contact us at:</p>
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
