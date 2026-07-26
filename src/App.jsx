import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import CapabilityStrip from "./components/CapabilityStrip.jsx";
import SolutionsSection from "./components/SolutionsSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import SpecialistsSection from "./components/SpecialistsSection.jsx";
import ProcessSection from "./components/ProcessSection.jsx";
import WhyLakshSection from "./components/WhyLakshSection.jsx";
import EngagementSection from "./components/EngagementSection.jsx";
import CTASection from "./components/CTASection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/common/ScrollToTop.jsx";
import { scrollToSection } from "./utils/scrollToSection.js";

export default function App() {
  // Lifted so "Discuss This Solution" / "Discuss This Model" CTAs elsewhere on
  // the page can preselect the right option in the contact form.
  const [contactPreset, setContactPreset] = useState({
    service: null,
    engagement: null,
    nonce: 0,
  });

  function handleDiscussService(serviceTitle) {
    setContactPreset({ service: serviceTitle, engagement: null, nonce: Date.now() });
    scrollToSection("#contact");
  }

  function handleDiscussEngagement(engagementTitle) {
    setContactPreset({ service: null, engagement: engagementTitle, nonce: Date.now() });
    scrollToSection("#contact");
  }

  return (
    <>
      <a href="#main-content" className="skip-link focus-ring">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <CapabilityStrip />
        <SolutionsSection onDiscussService={handleDiscussService} />
        <AboutSection />
        <SpecialistsSection onDiscussService={handleDiscussService} />
        <ProcessSection />
        <WhyLakshSection />
        <EngagementSection onDiscussEngagement={handleDiscussEngagement} />
        <CTASection />
        <ContactSection preset={contactPreset} />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
