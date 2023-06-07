import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

function Homepage() {
    return (
      <>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </>
    )
  }

export default Homepage;