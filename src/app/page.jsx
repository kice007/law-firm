import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import RecentCases from '../components/RecentCases'
import Process from '../components/Process'
import Services from '../components/Services'
import FAQs from '../components/FAQs'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <Hero />
      <AboutMe />
      <RecentCases />
      <Process />
      <Services />
      <FAQs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
