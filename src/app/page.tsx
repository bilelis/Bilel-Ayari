import Header from "@/components/header";
import Scene3D from "@/components/3d/Scene3D";
import Hero3D from "@/components/hero-3d";
import About3D from "@/components/about-3d";
import Projects3D from "@/components/projects-3d";
import Skills3D from "@/components/skills-3d";
import Reviews3D from "@/components/reviews-3d";
import Contact3D from "@/components/contact-3d";
import Footer from "@/components/footer";
import ClientOnly from "@/components/ClientOnly";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative" style={{ position: 'relative' }}>
      {/* 3D Background Scene - Client Only */}
      <ClientOnly fallback={<div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900" />}>
        <Scene3D />
      </ClientOnly>
      
      {/* Fixed Header */}
      <div className="relative z-50">
        <Header />
      </div>
      
          <main className="relative z-10" style={{ position: 'relative' }}>
            <Hero3D />
            <About3D />
            <Projects3D />
            <Skills3D />
            <Reviews3D />
            <Contact3D />
          </main>
      
      <Footer />
    </div>
  );
}
