import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiHashnode } from 'react-icons/si'
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}>
          <DiCssdeck size='3rem' /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about" passHref>
          <NavLink><a aria-label="About section">About</a></NavLink>
        </Link>
      </li>
      <li>
        <Link href='#projects' passHref>
          <NavLink><a aria-label="Project section">Projects</a></NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech' passHref>
          <NavLink><a aria-label="Technologies section">Technologies</a></NavLink>
        </Link>
      </li>
      <li>
        <Link href='#blog' passHref>
          <NavLink><a aria-label="Blog section">Blog</a></NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/droffilc1' target='_blank'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/clifford-mapesa-a98601216/' target='_blank'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://cliffordmapesa.hashnode.dev/' target='_blank'>
        <SiHashnode size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
