import styled from "styled-components";

const ButtonComponent = ({
  text,
  background,
  borderRadius,
  border,
  width,
  height,
  fontWeight,
  fontSize,
  lineHeight,
  marginBotton,
  type,
}) => {
  return (
    <StyledButton
      style={
        (background,
        borderRadius,
        border,
        width,
        height,
        fontWeight,
        fontSize,
        lineHeight,
        marginBotton,
        type)
      }
    >
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  margin-bottom: ${(props) => props.marginBotton};
`;

export default ButtonComponent;
