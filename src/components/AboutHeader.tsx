import styled from "styled-components"

const AboutHeader = () => {
  return (
    <Header>
      <Title>About</Title>
      <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur earum est similique velit magni eius inventore veniam. Ducimus molestias animi assumenda, eos earum dolores esse tempora? Magnam eius laboriosam explicabo.</Description>
    </Header>
  );
}

export default AboutHeader;


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
