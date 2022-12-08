import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const BigCircle = styled(Box)`
  border-radius: 50%;
  width: 200px;
  height: 200px;
`;

const Input = styled.input.attrs({ required: true })`
  color: tomato;
`;

function App() {
  return (
    <Wrapper>
      <Box bgColor="teal"></Box>
      <Box bgColor="tomato"></Box>
      <BigCircle bgColor="tomato"></BigCircle>
    </Wrapper>
  );
}

export default App;
