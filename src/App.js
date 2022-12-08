import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0% {
  transform: rotate(0deg);
  border-radius: 0px;

  }
  50% {
  transform: rotate(360deg);
  border-radius: 100px;
}
  100% {
  transform: rotate(0deg);
  border-radius: 0px;
}
`;
const Emoji = styled.span`
  font-size: 30px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotationAnimation} 1.5s linear infinite;
  ${Emoji} {
    font-size: 50px;

    &:hover {
      font-size: 100px;
    }

    &:active /*click is active*/ {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="p">😍</Emoji>
        <Emoji>😂</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
