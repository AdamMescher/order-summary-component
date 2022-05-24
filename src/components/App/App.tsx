import styled from "styled-components";
import OrderSummary from "../OrderSummary";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;

  @media (max-width: var(--breakpoint-mobile)) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const App = () => {
  return (
    <Wrapper data-testid="app">
      <VisuallyHidden>
        <h1>Order Summary Component sandbox</h1>
        <h2>necessary for header order a11y error</h2>
      </VisuallyHidden>
      <OrderSummary />
    </Wrapper>
  );
};

export default App;
