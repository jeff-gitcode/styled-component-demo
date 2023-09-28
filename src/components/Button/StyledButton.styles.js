import styled, { keyframes } from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) =>
    props.variant === "outline" ? "red" : "green"};
  color: ${(props) => (props.variant === "outline" ? "green" : "red")};
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "red" : "green"};
    color: ${(props) => (props.variant !== "outline" ? "green" : "red")};
  }
`;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, red 0%, blue 100%);
  background-color: blue;
  color: white;
  font-size: 30px;
  padding: 20px 40px;
  border-radius: 10px;
  &:hover {
    background-color: red;
  }
`;

export const SubmitButton = styled(FancyButton).attrs((props) => ({
  type: "submit",
}))`
  background-color: ${(props) =>
    props.variant === "outline" ? "red" : "green"};
  color: "black";
  font-size: 40px;
  padding: 40px 80px;
  border-radius: 20px;
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg)
    }
    `;

export const AnimatedLog = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${rotate} infinite 2s linear;
  }
`;

export const DarkButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.secondary};
`;
