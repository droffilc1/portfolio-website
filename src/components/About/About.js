import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const About = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I am a creative, detail-oriented software engineer with a deep interest
        in emerging technologies with a proven track record of creating and
        implementing successful front and back-end web applications. Looking to
        bring my skills to a tech company with a global reach.
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default About;
