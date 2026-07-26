import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import Solutions from './components/Solutions'
import Industries from './components/Industries'
import TechMarquee from './components/TechMarquee'
import Process from './components/Process'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import CaseStudies from './components/CaseStudies'
import FAQ from './components/FAQ'
import BlogPreview from './components/BlogPreview'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ScrollProgressBar, BackToTop } from './components/ScrollUtils'

export default function App() {
  return (
    <div className="relative">
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <Solutions />
        <Industries />
        <TechMarquee />
        <Process />
        <Team />
        <Testimonials />
        <CaseStudies />
        <FAQ />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
