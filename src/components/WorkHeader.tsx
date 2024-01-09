import styled from "styled-components"

const WorkHeader = () => {
  return (
    <Header>
      <Title>Prev Work</Title>
      <Description>A collection of designs I worked on with the goal to expand my skill set and be more involved in the design community. Here you will find a diverse range of carefully crafted designs from website templates to logos.</Description>
    </Header>
  );
}

export default WorkHeader;

const Header = styled.header`
  height: 40vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  margin: 0 5rem;
`

const Description = styled.h2`
    margin: 2rem 5rem;
`
