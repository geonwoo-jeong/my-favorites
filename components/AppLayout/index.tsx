import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

const Container = styled.div``;

const AppLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default AppLayout;
