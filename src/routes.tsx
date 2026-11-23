import { createBrowserRouter, Outlet, ScrollRestoration } from 'react-router'
import { BackToTop } from './components/BackToTop'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProcessPage from './pages/ProcessPage'
import ServicesPage from './pages/ServicesPage'
import TechPage from './pages/TechPage'

function Layout() {
  return (
    <div className="min-h-screen bg-paper">
      <a
        href="#main"
        className="sr-only z-[60] rounded-lg bg-navy px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <div className="mx-auto max-w-7xl">
        <Navbar />
        <main id="main">
          <Outlet />
        </main>
        <Footer />
      </div>
      <BackToTop />
      <ScrollRestoration />
    </div>
  )
}

/** Each page is its own URL. Add a new page here and in navLinks (src/config/site.ts). */
export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'services', Component: ServicesPage },
      { path: 'process', Component: ProcessPage },
      { path: 'tech', Component: TechPage },
      { path: 'about', Component: AboutPage },
      { path: 'contact', Component: ContactPage },
      { path: '*', Component: NotFound },
    ],
  },
])
