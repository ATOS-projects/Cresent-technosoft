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

      <ServicesGrid />

      <ClientsSection />

      <TestimonialsCarousel />

      {/* Careers Section */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Join Our Engineering Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are looking for talented individuals to join our growing health-tech organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Marketing', desc: 'Help us reach more clinics globally' },
              { title: 'Engineering', desc: 'Build reliable healthcare solutions' },
              { title: 'Operations', desc: 'Scale our support and deployment' }
            ].map((dept, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 p-6 text-center rounded hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 bg-white text-blue-800 border border-gray-200 rounded flex items-center justify-center mx-auto mb-4">
                  <FaBriefcase className="text-xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{dept.title}</h3>
                <p className="text-gray-600 text-sm mb-5">
                  {dept.desc}
                </p>
                <Link href="/careers">
                  <button className="w-full px-4 py-2 bg-white text-blue-900 text-sm font-semibold border border-blue-200 hover:bg-blue-50 transition-colors">
                    View Positions
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="pt-16 md:pt-20 pb-8 md:pb-10 bg-blue-950">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Ready to Upgrade Your Healthcare Facility?
            </h2>
            <p className="text-base md:text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 60+ successful hospitals and clinics. Contact us for a free consultation and personalized software demo today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/demo">
                <button className="w-full sm:w-auto px-6 py-3 bg-white text-blue-950 font-bold hover:bg-slate-100 transition-all rounded flex items-center justify-center gap-2">
                  <FaHandshake size={18} />
                  <span>Request Demo</span>
                </button>
              </Link>
              <Link href="/contact">
                <button className="w-full sm:w-auto px-6 py-3 bg-transparent text-white font-bold border-2 border-blue-800 hover:bg-blue-900/50 transition-all rounded flex items-center justify-center gap-2">
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
