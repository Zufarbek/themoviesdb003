import React from 'react'
import HomePage from './pages/home/home.page'
import NavbarSection from './components/navbar/navbar.section'
import FooterSection from './components/footer/footer.section'
import {Outlet} from 'react-router-dom'

export default function App() {
  return (
    <>
      <NavbarSection/>
      <Outlet/>
      <FooterSection/>
    </>
  )
}
