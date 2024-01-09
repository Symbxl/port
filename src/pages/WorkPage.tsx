import styled from "styled-components"
import WorkHeader from "../components/WorkHeader";

const WorkPage = () => {
  return (
    <Container>
      <WorkHeader />
    </Container>
  );
}

export default WorkPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
