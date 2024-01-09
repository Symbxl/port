import styled from 'styled-components';

const HomeHeader = () => {
  return (
    <Header>
      <Container>
        <Title>Hello, I'm NAME HERE — </Title>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos mollitia odio quisquam earum rerum quaerat sequi optio minus ullam a molestiae delectus praesentium error ea, blanditiis cupiditate recusandae animi.</Description>
      </Container>
    </Header>
  );
}

export default HomeHeader;

const Header = styled.header`
  height: 40vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin: 0 5rem;
  font-size: 3rem; /* Default font size */
  
  @media (max-width: 1000px) {
    font-size: 2rem; /* Adjust font size for smaller screens */
  }
`

const Description = styled.h2`
  margin: 2rem 5rem;
  flex: 1;
  font-size: 1.5rem; /* Default font size */
  
  @media (max-width: 1000px) {
    font-size: 1rem; /* Adjust font size for smaller screens */
  }
`
