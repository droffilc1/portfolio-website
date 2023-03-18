import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, SocialContainer, SocialIconsContainer, CompanyContainer, Slogan } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>        
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:cliffordmapesa8@gmail.com">
            cliffordmapesa8@gmail.com
          </LinkItem>
        </LinkColumn>        
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>When in doubt build something</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/droffilc1" target='_blank'>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/clifford-mapesa-a98601216/" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>          
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
