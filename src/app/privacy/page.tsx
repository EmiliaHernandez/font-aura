import { Metadata } from "next";
import Link from "next/link";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
export const metadata: Metadata = {
  title: "Privacy Policy | FontAura",
  description: "Learn how FontAura handles your data and respects your privacy.",
  robots: "index, follow",
};

export default function PrivacyPolicyPage() {
  return (
    
        <div className="min-h-screen bg-[#030014] relative overflow-hidden text-slate-50 font-[Eczar]">
    
      <div className="flex flex-col min-h-screen text-slate-50 px-6 overflow-clip">
    <header className="absolute top-0 z-10">
          <div className="py-3">
              <Link href="/"><img src="/FontAura-Logo.webp" width="200px" alt="Font Aura logo"/></Link>
          </div>
      </header><main className="min-h-screen bg-[#030014] relative overflow-hidden text-slate-50 font-[Eczar] px-6 py-16 md:px-16 lg:px-32">
        
              <div className="max-w-3xl mx-auto">
                <SpeedInsights/>
<Analytics/>
                  <h1 className="text-4xl font-bold mb-6 text-zip-blue">Privacy Policy</h1>
                  <p className="text-sm text-gray-500 mb-12">Last updated: October 15, 2025</p>

                  <section className="space-y-8 leading-relaxed">
                      <p>
                          Welcome to <strong>FontAura</strong> (accessible at{" "}
                          <a
                              href="https://fontaura.xyz"
                              className="text-zip-blue hover:underline"
                          >
                              fontaura.xyz
                          </a>
                          ). This Privacy Policy explains how information is handled when you
                          use our website.
                      </p>

                      <div>
                          <h2 className="text-2xl font-semibold mb-2">1. Overview</h2>
                          <p>
                              FontAura is a creative web application that allows you to type a
                              name and discover a Google Font that matches your “aura.” We do{" "}
                              <strong>not collect, store, or share personal data</strong> entered
                              on the site. Any name or text you type stays in your browser
                              session and is never saved to a database or transmitted for
                              profiling purposes.
                          </p>
                      </div>

                      <div>
                          <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
                          <h3 className="font-semibold mt-4">a. User Input</h3>
                          <p>
                              When you type your name (or any text), it’s processed temporarily
                              by your browser and a call is made to the Google Fonts API to match
                              a font. We <strong>do not store</strong> these names or associate
                              them with you in any way.
                          </p>

                          <h3 className="font-semibold mt-4">b. Analytics</h3>
                          <p>
                              We use <strong>Vercel Web Analytics</strong> and{" "}
                              <strong>Vercel Speed Insights</strong> to understand general usage
                              patterns and improve performance. These tools collect{" "}
                              <strong>aggregated, anonymous data</strong> such as:
                          </p>
                          <ul className="list-disc pl-6 mt-2">
                              <li>Page views</li>
                              <li>Load times and performance metrics</li>
                              <li>Device type and browser version</li>
                              <li>Approximate location (region-level, not precise)</li>
                          </ul>
                          <p className="mt-2">
                              This data does not include names, IP addresses, or personal
                              identifiers. Analytics are used only to monitor and improve the
                              website’s experience.
                          </p>
                      </div>

                      <div>
                          <h2 className="text-2xl font-semibold mb-2">3. Cookies</h2>
                          <p>
                              FontAura does not use cookies or local storage for tracking or
                              advertising purposes. Vercel Analytics operates without cookies.
                          </p>
                      </div>

                      <div>
                          <h2 className="text-2xl font-semibold mb-2">4. Third-Party Services</h2>
                          <p>FontAura uses:</p>
                          <ul className="list-disc pl-6 mt-2">
                              <li>
                                  <strong>Vercel</strong> (hosting, analytics, performance
                                  monitoring) –{" "}
                                  <a
                                      href="https://vercel.com/legal/privacy-policy"
                                      className="text-zip-blue hover:underline"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                  >
                                      Vercel Privacy Policy
                                  </a>
                              </li>
                              <li>
                                  <strong>Google Fonts API</strong> (font loading) –{" "}
                                  <a
                                      href="https://developers.google.com/fonts/faq/privacy"
                                      className="text-zip-blue hover:underline"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                  >
                                      Google Fonts Privacy & Terms
                                  </a>
                              </li>
                          </ul>
                      </div>

                      <div>
                          <h2 className="text-2xl font-semibold mb-2">5. Data Retention</h2>
                          <p>
                              We do not retain any user-submitted data. Vercel may retain
                              anonymized, aggregated analytics data for operational purposes.
                          </p>
                      </div>

                      <div>
                          <h2 className="text-2xl font-semibold mb-2">6. Children’s Privacy</h2>
                          <p>
                              FontAura is suitable for general audiences and does not target or
                              knowingly collect information from children under 13.
                          </p>
                      </div>

                      <div>
                          <h2 className="text-2xl font-semibold mb-2">7. Your Rights</h2>
                          <p>
                              Since we do not collect personal data, there is no personal
                              information to access, modify, or delete. If you have questions
                              about how Vercel handles analytics data, please review their
                              privacy policy.
                          </p>
                      </div>

                      <div>
                          <h2 className="text-2xl font-semibold mb-2">8. Changes to This Policy</h2>
                          <p>
                              We may update this Privacy Policy from time to time. Updates will
                              be posted on this page with a revised “Last updated” date.
                          </p>
                      </div>

                      <div>
                          <h2 className="text-2xl font-semibold mb-2">9. Contact</h2>
                          <p>
                              If you have any questions about this Privacy Policy or FontAura,
                              you can contact:
                          </p>
                          <address className="not-italic mt-2">
                              <p>Emilia.b.hernandez@gmail.com</p>
                              <p>FontAura (Personal Project)</p>
                              <p>Oregon, United States</p>
                          </address>
                      </div>
                  </section>

                  <p className="mt-12 text-sm text-gray-500">
                      © {new Date().getFullYear()} FontAura. All rights reserved.
                  </p>
              </div>
          </main>
          <footer className="mt-auto py-4">
          <h1 className="text-sm">Developed by Emilia Hernandez | <span><Link
          href="/privacy"
          className="text-zip-blue hover:underline transition-colors"
        >
          Privacy Policy
        </Link></span></h1> 
        </footer>
          </div>
          </div>

  );
}
