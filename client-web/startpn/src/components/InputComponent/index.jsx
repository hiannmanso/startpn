import styled from "styled-components";

const InputComponent = ({
  placeholder,
  display,
  alignItems,
  width,
  height,
  background,
  border,
  borderRadius,
  padding,
  type,
}) => {
  return (
    <>
      <StyledInput
        type={type}
        style={{
          display,
          width,
          height,
          background,
          border,
          padding,
          borderRadius,
          alignItems,
        }}
        placeholder={placeholder}
      />
    </>
  );
};

const StyledInput = styled.input`
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  ::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    color: #a0a0a0;
  }
`;
export default InputComponent;
