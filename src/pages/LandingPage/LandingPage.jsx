import React from 'react'
import Header from '../../components/Header'
import InfoSection from './InfoSection'
import SkillSection from './SkillSection'
import FactsSection from './FactsSection'
import Footer from '../../components/Footer'

function LandingPage() {
  return (
    <div>
      <Header/>
      <InfoSection id="about"/>
      <SkillSection id= "skills"/>
      <FactsSection id="funfacts"/>
      <Footer id="contact"/>
    </div>
  )
}

export default LandingPage
