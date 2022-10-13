import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import ScroolTop from './components/ScrollTop'
import Skills from './components/Skills'

import { motion } from 'framer-motion'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Sidebar from './components/Sidebar'
import { useState } from 'react'
import Networks from './components/Networks'

function App() {
  const [isSidebarOpen, setisSidebarOpen] = useState(false)

  const closeSidebar = (e) => {
    e.stopPropagation()

    setisSidebarOpen(false)
  }
  const openSidebar = () => {
    setisSidebarOpen(true)
  }

  return (
    <motion.div initial='hidden' animate='show' className='App'>
      <Sidebar closeSidebar={closeSidebar} isSidebarOpen={isSidebarOpen} />
      <ScroolTop />
      <Header openSidebar={openSidebar} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Networks />
    </motion.div>
  )
}

export default App
