import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => {
    return(
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To William Chien's<br />
          Personal Portfolio
        </SectionTitle>
        <SectionText>
        With a robust foundation in mechanical and AI robotics engineering, I am passionate about crafting innovative software systems and pioneering AI-related projects. My current endeavor involves working with Next.js, furthering my commitment to developing cutting-edge technological solutions
        </SectionText>
        <Button onClick={()=>window.location = 'https://www.linkedin.com/in/yulinwilliamchien/'}>Learn More</Button>
      </LeftSection>
    </Section>)
};

export default Hero;