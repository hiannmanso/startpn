import styled from "styled-components";
import InputComponent from "../../components/InputComponent";
import sideImage from "./../../images/Group 2.svg";
import logo from "./../../images/logo.svg";
import ButtonComponent from "../../components/ButtonComponent";
import TittleComponent from "../../components/TittleComponent";
import LogoComponent from "../../components/LogoComponent";

const SignUp = () => {
  return (
    <>
      <SignUpBox>
        <img className="leftSideImage" src={sideImage} alt="" />
        <div className="rightSide">
          <LogoComponent />
          <img className="logo" src={logo} alt="logo" />
          <div>
            <TittleComponent
              text={"Cadastro"}
              paddingBotton={"1em"}
              fontWeight={"500"}
              fontSize={"24px"}
              lineHeight={"36px"}
              letterSpacing={"0.03em"}
              color={"#476ee6"}
            />
            <div className="InfosBox">
              <div>
                <p className="labelInput">Nome</p>
                <InputComponent
                  placeholder={"Insira seu nome"}
                  height={"50.8px"}
                  width={"290px"}
                  padding={"14px 0 10px 13px"}
                  alignItems={"center"}
                  background={"#ffffff"}
                  border={"1px solid #d7d7d7"}
                  borderRadius={"10px"}
                />
              </div>
              <div>
                <p className="labelInput">Senha</p>
                <InputComponent
                  placeholder={"Insira sua senha"}
                  height={"50.8px"}
                  width={"290px"}
                  padding={"14px 0 10px 13px"}
                  alignItems={"center"}
                  background={"#ffffff"}
                  border={"1px solid #d7d7d7"}
                  borderRadius={"10px"}
                  type={"password"}
                />
              </div>
              <div>
                <p className="labelInput">E-mail</p>
                <InputComponent
                  placeholder={"Insira seu e-mail"}
                  height={"50.8px"}
                  width={"290px"}
                  padding={"14px 0 10px 13px"}
                  alignItems={"center"}
                  background={"#ffffff"}
                  border={"1px solid #d7d7d7"}
                  borderRadius={"10px"}
                />
              </div>
              <div>
                <p className="labelInput">Confirme sua senha</p>
                <InputComponent
                  placeholder={"Confirme sua senha"}
                  height={"50.8px"}
                  width={"290px"}
                  padding={"14px 0 10px 13px"}
                  alignItems={"center"}
                  background={"#ffffff"}
                  border={"1px solid #d7d7d7"}
                  borderRadius={"10px"}
                  type={"password"}
                />
              </div>
            </div>
            <div className="terms">
              <h1 className="TermTitle">Termos de uso e privacidade</h1>
              <p>
                Ao clicar neste botão, eu concordo com os termos de uso e
                privacidade da nossa empresa.
              </p>
              <a href="">Termos de uso e privacidade</a>
            </div>
            <div className="btns">
              <ButtonComponent
                text={"Cadastrar"}
                background={"#476ee6"}
                borderRadius={"60px"}
                border={"none"}
                width={"267px"}
                height={"45.7px"}
                fontWeight={"600"}
                fontSize={"18px"}
                lineHeight={"20px"}
                marginBotton={"0.7em"}
              />

              <div>
                <p>Já tem uma conta?</p> <a>Login</a>
              </div>
            </div>
          </div>
        </div>
      </SignUpBox>
    </>
  );
};
const SignUpBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  .leftSideImage {
    height: 100vh;
    width: 50%;
  }
  .rightSide {
    padding: 2em;
    height: 80vh;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .logo {
    width: 190px;
    height: 47.74px;
    padding-bottom: 4em;
  }
  .InfosBox {
    display: grid;
    grid: repeat(2, 100px) / auto-flow 300px;
    flex-direction: row;
    flex-wrap: wrap;
    p {
      padding: 0.3em;
    }
    div {
      padding: 0.2em;
    }
  }

  .labelInput {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    /* or 130% */

    display: flex;
    align-items: center;
    letter-spacing: 0.202385px;

    color: #000000;
  }
  .terms {
    .TermTitle {
      padding-bottom: 1em;
    }
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */

    color: rgba(0, 0, 0, 0.9);
    p,
    a {
      padding-bottom: 0.5em;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 20px;
      /* or 154% */

      color: rgba(0, 0, 0, 0.9);
    }
  }
  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      background: #476ee6;
      border-radius: 60px;
      border: none;
      width: 267px;
      height: 45.7px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 20px;
      margin-bottom: 0.7em;
      /* or 111% */

      text-align: center;

      color: #ffffff;
    }
    div {
      display: flex;
      flex-direction: row;
    }

    padding-top: 1.5em;
  }
`;
export default SignUp;
