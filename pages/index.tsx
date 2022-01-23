import type { NextPage } from 'next';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: powderblue;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  background-color: tomato;
  width: 100%;
  height: 100vh;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Section = styled.div`
  width: 100%;
  max-width: 753px;
  height: 45vh;
  position: relative;
  overflow: scroll;
  background-color: green;
`;

const Background = styled.div`
  background-image: url('/background.png');
  background-size: contain;
  height: 45vh;
  width: 2000px;
`;

const Road = styled.div`
  width: 100px;
  height: 100px;
  background-image: url('/boardwalktile.png');
  background-size: contain;
`;

const RoadContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
`;

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Container>
        <Section>
          <Background />
          <RoadContainer>
            <Road />
            <Road />
            <Road />
            <Road />
            <Road />
            <Road />
            <Road />
            <Road />
            <Road />
            <Road />
            <Road />
            <Road />
            <Road />
            <Road />
            <Road />
            <Road />
            <Road />
            <Road />
            <Road />
            <Road />
          </RoadContainer>
        </Section>
        <Section>2</Section>
      </Container>
    </Wrapper>
  );
};

export default Home;
