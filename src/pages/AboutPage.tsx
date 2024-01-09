import styled from "styled-components"
import AboutHeader from "../components/AboutHeader";

const AboutPage = () => {
  return (
    <Container>
      <AboutHeader />
    </Container>
  );
}

export default AboutPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
