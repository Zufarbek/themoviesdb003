import React from 'react'
import WelcomeSection from '../../sections/home/welcome/welcome.sectione'
import TheBestYearSection from '../../sections/home/thebestyear/theBestYear.section'
import NavbarSection from '../../components/navbar/navbar.section'
import FooterSection from '../../components/footer/footer.section'

export default function HomePage() {
  return (
    <>
      <WelcomeSection/>
      <TheBestYearSection/>
    </>
  )
}
