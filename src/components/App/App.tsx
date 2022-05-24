import styled from "styled-components";
import OrderSummary from "../OrderSummary";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  background-color: var(--veryPaleBlue);
  background-image: url("/assets/pattern-background-desktop.svg");
  background-repeat: no-repeat;
  background-position: top center;
  background-attachment: fixed;
  background-size: 100% 50%;
  @media (max-width: 475px) {
    padding-left: 24px;
    padding-right: 24px;
    margin-left: auto;
    margin-right: auto;
    background-image: url("");
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
