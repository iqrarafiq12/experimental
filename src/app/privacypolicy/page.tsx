export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-popover via-background to-popover text-white">
      <section className="max-w-5xl mx-auto px-6 py-24">
        
        {/* Glass Card */}
        
      {/* Ambient glass background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-24 left-1/4 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-24 right-1/4 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-foreground/70">
              Last updated: January 2026
            </p>
          </header>

          {/* Content */}
          <div className="space-y-10 text-sm leading-relaxed text-foreground/70">
            
            <p>
              At <span className="text-foreground font-medium">EDAQAI Creatives</span>,
              your privacy is important to us. This Privacy Policy explains how we
              collect, use, and protect your information when you visit our website
              or interact with our services.
            </p>

            <section>
              <h2 className="text-lg font-medium text-foreground mb-2">
                1. Information We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Contact details you provide (name, email)</li>
                <li>Project or inquiry-related information</li>
                <li>Voluntary messages or submissions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-medium text-foreground mb-2">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Respond to inquiries</li>
                <li>Deliver services</li>
                <li>Improve user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-medium text-foreground mb-2">
                3. Cookies & Analytics
              </h2>
              <p>
                We may use basic cookies or analytics tools to understand usage
                patterns. You can disable cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-foreground mb-2">
                4. Third-Party Services
              </h2>
              <p>
                Trusted third-party tools may assist us in operating the website.
                These services only access information required to function.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-foreground mb-2">
                5. Data Security
              </h2>
              <p>
                We take reasonable measures to protect your data, though no online
                transmission is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-foreground mb-2">
                6. Your Rights
              </h2>
              <p>
                You may request access, correction, or deletion of your personal
                information by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-foreground mb-2">
                7. Policy Updates
              </h2>
              <p>
                This policy may be updated periodically. Changes will be reflected
                on this page.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-foreground mb-2">
                8. Contact
              </h2>
              <p>Email: workwithedaqai@gmail.com </p>
              <p>NO: +92 3211292741 </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
