import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const HomePage = React.lazy(() => import('./pages/HomePage'))
const OurMissionPage = React.lazy(() => import('./pages/OurMissionPage'))
const AboutUsPage = React.lazy(() => import('./pages/AboutUsPage'))
const ContactPage = React.lazy(() => import('./pages/ContactPage'))

const RouteSpinner = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
)

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAFCFF] text-gray-800 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<RouteSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/our-mission" element={<OurMissionPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
