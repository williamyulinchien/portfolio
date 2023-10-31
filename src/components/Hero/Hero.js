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
        As a soild backgound of mechanical/AI robotic engineer, I am interested in developing software systems, AI related projects. Recently, I am working with NextJS projects.
        </SectionText>
        <Button onClick={()=>window.location = 'https://www.linkedin.com/in/yulinwilliamchien/'}>Learn More</Button>
      </LeftSection>
    </Section>)
};

export default Hero;