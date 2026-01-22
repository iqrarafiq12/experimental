export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-popover via-background to-popover text-white">

      {/* Ambient glass background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-24 left-1/4 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-24 right-1/4 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl p-8 md:p-12">

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Terms & Conditions
            </h1>
            <p className="text-zinc-400 text-sm mt-2">
              These terms exist to create clarity, trust, and a smooth working relationship
              for both you and EDAQAI.
            </p>

            <p className="mt-3 text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10 text-sm leading-relaxed text-zinc-300">

            <p>
              Welcome to <strong className="text-white">EDAQAI Creatives</strong>.
              By accessing our website, services, or communication channels,
              you agree to the following Terms & Conditions.
            </p>

            {/* 1 */}
            <section>
              <h2 className="text-lg font-medium text-white mb-2">
                1. About EDAQAI
              </h2>
              <p>
                EDAQAI is a founder-led creative studio providing brand identity,
                UI/UX & product design, website development, and digital growth
                solutions for startups and businesses.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-lg font-medium text-white mb-2">
                2. Services & Engagement
              </h2>
              <p>
                All services are delivered based on an agreed scope, timeline,
                and objectives. Any work outside the defined scope may require
                additional time and cost.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-lg font-medium text-white mb-2">
                3. Payments & Pricing
              </h2>
              <p>
                Payments must be made as agreed before or during the project.
                Failure to complete payment may result in paused or terminated
                services. Fees are non-refundable unless explicitly stated.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-lg font-medium text-white mb-2">
                4. Intellectual Property
              </h2>
              <p>
                Upon full payment, the client receives rights to use the final
                approved deliverables. EDAQAI retains the right to showcase
                completed work for portfolio and promotional purposes.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-lg font-medium text-white mb-2">
                5. Revisions & Approvals
              </h2>
              <p>
                Reasonable revisions are included as defined in the project
                scope. Major changes after approval may require additional
                charges or timeline adjustments.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-lg font-medium text-white mb-2">
                6. Client Responsibilities
              </h2>
              <p>
                Clients are responsible for providing timely content, feedback,
                and approvals. Delays in communication may affect delivery
                timelines.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-lg font-medium text-white mb-2">
                7. No Guarantee of Results
              </h2>
              <p>
                While EDAQAI follows best practices, we do not guarantee specific
                business, revenue, or performance outcomes from our services.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-lg font-medium text-white mb-2">
                8. Confidentiality
              </h2>
              <p>
                All shared project information will be treated as confidential
                unless disclosure is legally required.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-lg font-medium text-white mb-2">
                9. Third-Party Tools & Services
              </h2>
              <p>
                EDAQAI may use third-party tools, platforms, or hosting services.
                We are not responsible for outages or issues caused by these
                external services.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-lg font-medium text-white mb-2">
                10. Limitation of Liability
              </h2>
              <p>
                EDAQAI shall not be liable for indirect, incidental, or
                consequential damages arising from the use of our services.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-lg font-medium text-white mb-2">
                11. Termination
              </h2>
              <p>
                Either party may terminate services with written notice.
                Completed work up to the termination date must be compensated.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-lg font-medium text-white mb-2">
                12. Force Majeure
              </h2>
              <p>
                EDAQAI is not responsible for delays caused by events beyond
                reasonable control, including technical failures, natural
                events, or emergencies.
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="text-lg font-medium text-white mb-2">
                13. Changes to Terms
              </h2>
              <p>
                These terms may be updated at any time. Continued use of our
                services implies acceptance of the updated terms.
              </p>
            </section>

            {/* 14 */}
            <section>
              <h2 className="text-lg font-medium text-white mb-2">
                14. Contact
              </h2>
              <p>
                For questions regarding these Terms & Conditions, please contact
                EDAQAI through official communication channels.
              </p>
            </section>

          </div>
        </div>
      </section>
    </main>
  );
}
