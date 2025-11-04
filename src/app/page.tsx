"use client"
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { SectionAbout } from "@/components/SectionAbout";

function Home() {
  return(
    <div className="p-4 container m-auto">
      <Header/>
      <SectionAbout/>
      <div className="flex justify-center mt-4 mb-4">
        <h1 className="text-2xl p-3 bg-green-700 rounded-md">Projetos</h1>
      </div>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default Home;
