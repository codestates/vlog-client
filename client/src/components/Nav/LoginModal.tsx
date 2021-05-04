import axios from "axios";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useHistory } from "react-router-dom";
import xIconGray from "../../icon/X_icon_gray.png";
import { fadeIn, slideUp } from "../../styled-components/animation";
axios.defaults.withCredentials = true;
// HTTPS=true SSL_CRT_FILE=../../vlog-server/cert.pem SSL_KEY_FILE=../../vlog-server/key.pem

function LoginModal(props: any) {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState(true);
  const history = useHistory();
  const { email, password } = userInfo;

  const handleChange = (e: any) => {
    if (e.target.name === "email") {
      setUserInfo({ ...userInfo, email: e.target.value });
    } else if (e.target.name === "password") {
      setUserInfo({ ...userInfo, password: e.target.value });
    }
  };

  const handleSubmit = () => {
    if (email && password) {
      axios
        .post("http://localhost:8080/session", { email: email, password: password })
        .then((res) => {
          console.log(res);
          props.handleLoginModal();
          props.setIsLogin(true);
          localStorage.setItem('sessionId', JSON.stringify(res.data.sessionId))
          history.push("/");
        })
        .catch((err) => setErrorMsg(false));
    }
  };

  return (
    <ModalContainer onClick={props.handleLoginModal}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <CloseBtnBox>
          <CloseBtn src={xIconGray} onClick={props.handleLoginModal} />
        </CloseBtnBox>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Modal_Title>로그인</Modal_Title>
          <Modal_UserInfo>이메일</Modal_UserInfo>
          <Modal_Input name="email" onChange={(e: any) => handleChange(e)}></Modal_Input>
          <Modal_UserInfo>비밀번호</Modal_UserInfo>
          <Modal_Input type="password" name="password" onChange={(e: any) => handleChange(e)}></Modal_Input>
          {errorMsg ? null : <ErrorMessage>정보가 일치하지 않습니다.</ErrorMessage>}
          <div>{email && password ? <Modal_LoginBtn_abled>로그인</Modal_LoginBtn_abled> : <Modal_LoginBtn_disabled disabled>로그인</Modal_LoginBtn_disabled>}</div>
          <div>
            <Modal_SideBtn onClick={props.handleSideBtn}>회원가입</Modal_SideBtn>
          </div>
        </Form>
      </ModalBox>
    </ModalContainer>
  );
}

export default LoginModal;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(3px);

  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  height: 460px;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
  background: white;
  transition: 0.4s ease-in;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

const CloseBtnBox = styled.div`
  width: 600px;
  display: flex;
  justify-content: flex-end;
`;

const CloseBtn = styled.img`
  cursor: pointer;
  width: 17px;
  height: 17px;
  margin-right: 15px;
`;

const Form = styled.form`
  margin-bottom: 50px;
`;

const Modal_Title = styled.h1``;

const Modal_UserInfo = styled.div`
  font-size: 20px;
`;

const Modal_Input = styled.input`
  -webkit-box-shadow: 0 0 0 1000px rgba(237, 237, 237, 1) inset;
  width: 320px;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  outline: none;
  padding: 10px;
  padding-left: 10px;
`;

const Modal_LoginBtn_abled = styled.button`
  width: 320px;
  height: 35px;
  border-radius: 20px;
  background-color: #3f51b5;
  color: white;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
  outline: none;
  cursor: pointer;
`;

const Modal_LoginBtn_disabled = styled.button`
  width: 320px;
  height: 35px;
  border-radius: 20px;
  background-color: #7986cb;
  color: white;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
  outline: none;
`;

const Modal_SideBtn = styled.button`
  width: 320px;
  height: 35px;
  border-radius: 20px;
  background-color: white;
  color: black;
  border: 2px solid black;
  cursor: pointer;
  outline: none;
  transition: 0.4s ease-in-out;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: red;
`;

//changed
// const boxFade= keyframes`
// // 0% {
// //   transform: translateY(150px)
// // }
// // 100% {
// //   transform: translateY(0);
// // }
//  0% {
//    opacity: 1;
//  } 50% {
//    opacity: 0;
//  } 100% {
//    opacity: 1;
//  }
// `
// const StyledWrapper = styled.div`
//   width: 100px;
//   height: 100px;
//   background: gray;
//   ${(props:any) => props.active && `
//   animation: ${boxFade} 2s 1s infinite linear alternate`}
// `

// const Box = ({children, ...rest}:any) => {
//   return (
//     <StyledWrapper>
//       {children}
//     </StyledWrapper>
//   )
// }

// @keyframes moveUp {
//   0% {
//     transform:translateY(150px);
//   }
//   100% {
//     transform:translateY(0);
//   }
// }
