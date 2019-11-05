import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import GlobalStyles from "../../globalStyles";

const Container = styled.div``;

const AppLayout = ({ children }) => {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default AppLayout;
