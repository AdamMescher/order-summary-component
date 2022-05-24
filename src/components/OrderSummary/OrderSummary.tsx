import styled from "styled-components";
import { ReactComponent as Hero } from "../../assets/illustration-hero.svg";
import { ReactComponent as Music } from "../../assets/icon-music.svg";

const Wrapper = styled.section`
  --transition: 250ms ease-in-out;
  background: var(--white);
  width: 450px;
  border-radius: 12px;
  overflow: hidden;
  @media (max-width: var(--breakpoint-mobile)) {
    min-width: 325px;
  }
`;
const HeroWrapper = styled.div`
  width: 100%;
  background: yellow;
  & > svg {
    display: block;
  }
`;
const MusicIconWrapper = styled.div``;
const CardBody = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;
const Title = styled.h3`
  color: var(--darkBlue);
  font-weight: var(--fw-black);
`;
const Copy = styled.p`
  color: var(--desaturatedBlue);
  text-align: center;
`;
const Order = styled.div`
  width: 100%;
  background: var(--veryPaleBlue);
  display: flex;
  gap: 20px;
  padding: 24px;
  border-radius: 8px;
`;
const Overview = styled.div`
  & > p:last-child {
    margin-top: 4px;
  }
`;
const Price = styled.p`
  color: var(--darkBlue);
`;
const Plan = styled.p`
  color: var(--darkBlue);
  font-weight: var(--fw-bold);
`;
const baseButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  transition: var(--transition);
  &:hover {
    transition: var(--transition);
  }
  &:focus {
    outline-offset: 4px;
  }
`;
const Change = styled(baseButton)`
  margin-left: auto;
  color: var(--brightBlue);
  font-weight: var(--fw-bold);
  text-decoration: underline;
  text-decoration-color: var(--brightBlue);
  &:hover {
    text-decoration-color: transparent;
  }
`;
const Proceed = styled(baseButton)`
  width: 100%;
  padding-top: 18px;
  padding-bottom: 18px;
  background: var(--brightBlue);
  color: var(--veryPaleBlue);
  font-weight: var(--fw-bold);
  border-radius: 8px;
  transition: var(--transition);
  &:hover {
    transition: var(--transition);
    background: var(--desaturatedBlue);
  }
`;
const Cancel = styled(baseButton)`
  font-weight: var(--fw-bold);
  color: var(--desaturatedBlue);
  &:hover {
    color: var(--darkBlue);
  }
`;

const OrderSummary = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <Hero />
      </HeroWrapper>
      <CardBody>
        <Title>Order Summary</Title>
        <Copy>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </Copy>
        <Order>
          <MusicIconWrapper>
            <Music />
          </MusicIconWrapper>
          <Overview>
            <Plan>Annual Plan</Plan>
            <Price>$59.99/year</Price>
          </Overview>
          <Change>Change</Change>
        </Order>
        <Proceed>Proceed to Payment</Proceed>
        <Cancel>Cancel Order</Cancel>
      </CardBody>
    </Wrapper>
  );
};

export default OrderSummary;
