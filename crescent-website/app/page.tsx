import { HeroSection } from "@/components/home/HeroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ClientsSection } from "@/components/home/ClientsSection";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FaBriefcase, FaHandshake, FaPhone } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <HeroSection />

      <div className="border-t border-gray-100" />

      <ServicesGrid />

      <div className="border-t border-gray-100" />

      <ClientsSection />

      <div className="border-t border-gray-100" />

      <TestimonialsCarousel />

      <div className="border-t border-gray-100" />

      {/* Careers Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're looking for talented individuals to join our growing team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Marketing', desc: 'Help us reach more clients globally', color: 'from-sky-500 to-sky-600' },
              { title: 'Engineering', desc: 'Build cutting-edge software solutions', color: 'from-blue-500 to-blue-600' },
              { title: 'Operations', desc: 'Scale our impact and company culture', color: 'from-cyan-500 to-cyan-600' }
            ].map((dept, i) => (
              <div key={i} className="bg-white rounded-xl border-2 border-sky-100 hover:border-sky-300 p-6 text-center hover:shadow-lg transition-all">
                <div className={`w-12 h-12 bg-gradient-to-br ${dept.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md`}>
                  <FaBriefcase className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {dept.desc}
                </p>
                <Link href="/careers">
                  <button className="w-full px-4 py-2 bg-sky-50 text-sky-600 font-semibold rounded-lg border border-sky-200 hover:bg-sky-100 hover:border-sky-400 transition-all">
                    View Positions
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="bg-gradient-to-br from-sky-600 to-sky-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base md:text-lg text-sky-100 mb-6 md:mb-8 max-w-2xl mx-auto">
              Join 60+ successful companies. Get in touch for a free consultation and personalized demo.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/demo">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-sky-600 font-semibold rounded-lg hover:bg-sky-50 hover:shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2">
                  <FaHandshake size={18} />
                  <span>Request Demo</span>
                </button>
              </Link>
              <Link href="/contact">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-sky-800 text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-sky-900 hover:border-white hover:shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2">
                  <FaPhone size={16} />
                  <span>Contact Sales</span>
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
