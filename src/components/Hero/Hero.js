import React from "react";
import Link from 'next/link';
import { NavLink } from '../Header/HeaderStyles'

import {
  Section,  
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio     
      </SectionTitle>
      <SectionText>
        Hi there, I'm Clifford Mapesa, a full-stack software engineer. I'm passionate about building great experiences using software.
      </SectionText>
      <Button>
        <Link href='#about'>
          <NavLink>Learn More</NavLink>
        </Link>
      </Button>      
    </LeftSection>    
  </Section>
  
);

export default Hero;
