import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Intro from "./components/Intro"

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  )
}

