import ContactForm from "../components/ContactForm";
import styled from 'styled-components';

const ContactPage = () => {
  return (
    <Container>
      <ContactForm />
    </Container>
  );
}

export default ContactPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`