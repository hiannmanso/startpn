import Logo from "./../../images/logo.svg";
import styled from "styled-components";

const LogoComponent = () => {
  return (
    <>
      <StyledLogo src={Logo} alt="logo" />
    </>
  );
};

const StyledLogo = styled.img`
  width: 190px;
  height: 47.74px;
  padding-bottom: 4em;
`;
export default LogoComponent;
