import Image from 'next/image'
import HeroSection from './Component/HeroSection'
import Navbar from './Component/Navbar'
import AboutSection from './Component/AboutSection'
import ProjectsSection from './Component/ProjectSection'
import EmailSection from './Component/EmailSection'
import Footer from './Component/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-4 ">
        <Navbar/>
        {/* <div className='container mt-24 mx-auto px-12 py-4'> */}
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
        <EmailSection/>
        {/* </div> */}
        <Footer/>
        
    </main>
  )
}
