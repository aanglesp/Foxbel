import React from 'react'
import Sidenav from './components/sidenav/Sidenav'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <div>
      <div class="w-100 h-100 flex">
        <Sidenav />
        <Content />
      </div>
      <Footer />
    </div>
  )
}
