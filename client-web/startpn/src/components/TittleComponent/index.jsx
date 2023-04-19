import styled from "styled-components";

const TittleComponent = ({
  paddingBotton,
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
  color,
  text,
  alow,
}) => {
  return (
    <StyledTittle
      style={{
        paddingBotton,
        fontWeight,
        fontSize,
        lineHeight,
        letterSpacing,
        color,
      }}
    >
      {text}
    </StyledTittle>
  );
};

const StyledTittle = styled.h1`
  padding-bottom: ${(props) => props.paddingBotton};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpacing};
  color: ${(props) => props.color};
`;
export default TittleComponent;
