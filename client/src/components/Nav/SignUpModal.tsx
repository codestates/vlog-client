import axios from "axios";
import react, { useState } from "react";
import styled from "styled-components";
import checkIcon from "../../icon/check_icon.png";
import xIcon from "../../icon/X_icon.png";
import xIconGray from "../../icon/X_icon_gray.png";
import {fadeIn, slideUp} from "../../styled-components/Animation"

const pwPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
const userNamePattern = /^[가-힣]{2,4}$/;
const emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

function SignUpModal(props: any) {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    nickname: "",
  });
  const [testResults, setTestResults] = useState<any>({
    emailResult: null,
    passwordResult: null,
    nicknameResult: null,
  });

  const { emailResult, passwordResult, nicknameResult } = testResults;

  const handleUserInfo = ({ name, value }: any) => {
    if (name === "email") {
      if (emailPattern.test(value)) {
        setUserInfo({ ...userInfo, email: value });
        setTestResults({ ...testResults, emailResult: true });
      } else {
        setTestResults({ ...testResults, emailResult: false });
      }
    } else if (name === "password") {
      if (pwPattern.test(value)) {
        setUserInfo({ ...userInfo, password: value });
        setTestResults({ ...testResults, passwordResult: true });
      } else {
        setTestResults({ ...testResults, passwordResult: false });
      }
    } else if (name === "nickname") {
      if (userNamePattern.test(value)) {
        setUserInfo({ ...userInfo, nickname: value });
        setTestResults({ ...testResults, nicknameResult: true });
      } else {
        setTestResults({ ...testResults, nicknameResult: false });
      }
    }
  };

  const handleSubmit = (e: react.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailResult && passwordResult && nicknameResult) {
      axios
        .post("http://localhost:8080/signup", {
          email: userInfo.email,
          password: userInfo.password,
          nick_name: userInfo.nickname,
        })
        .then((res) => {
          props.handleSideBtn();
        })
        .catch((err) => {
          alert("오류임");
        });

    } else {
      e.preventDefault();
    }
  };

  return (
    <ModalContainer onClick={props.handleSignUpModal}>
      <ModalBox
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <CloseBtnBox>
          <CloseBtn onClick={props.handleSignUpModal} src={xIconGray} />
        </CloseBtnBox>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Modal_Title>회원가입</Modal_Title>
          <Modal_UserInfo>이메일</Modal_UserInfo>
          <Modal_Input name="email" onChange={(e) => handleUserInfo(e.target)}></Modal_Input>
          {testResults.emailResult === null ? null : testResults.emailResult === true ? (
            <IconBox>
              <CheckIcon src={checkIcon} />
            </IconBox>
          ) : (
            <IconBox>
              <XIcon src={xIcon} />
            </IconBox>
          )}
          <Modal_UserInfo>닉네임</Modal_UserInfo>
          <Modal_Input name="nickname" onChange={(e) => handleUserInfo(e.target)}></Modal_Input>
          {testResults.nicknameResult === null ? null : testResults.nicknameResult === true ? (
            <IconBox>
              <CheckIcon src={checkIcon} />
            </IconBox>
          ) : (
            <IconBox>
              <XIcon src={xIcon} />
            </IconBox>
          )}
          <Modal_UserInfo>비밀번호</Modal_UserInfo>
          <Modal_Input type="password" name="password" onChange={(e) => handleUserInfo(e.target)}></Modal_Input>
          {testResults.passwordResult === null ? null : testResults.passwordResult === true ? (
            <IconBox>
              <CheckIcon src={checkIcon} />
            </IconBox>
          ) : (
            <IconBox>
              <PasswordErr>8~16 characters consisting of letters(A-Z, a-z),</PasswordErr>
              <PasswordErr>numbers, or special characters.</PasswordErr>
            </IconBox>
          )}

          <div>{emailResult && passwordResult && nicknameResult ? <Modal_SignUpBtn_abled>회원가입</Modal_SignUpBtn_abled> : <Modal_SignUpBtn_disabled>회원가입</Modal_SignUpBtn_disabled>}</div>
          <div>
            <Modal_SideBtn onClick={props.handleSideBtn}>이미 아이디가 있으신가요?</Modal_SideBtn>
          </div>
        </form>
      </ModalBox>
    </ModalContainer>
  );
}

export default SignUpModal;

const PasswordErr = styled.div`
  font-size: 13px;
  color: red;
`

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
  height: 600px;
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
  margin-top: -50px;
  margin-right: 18px;
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
  background-color: rgba(237, 237, 237, 1);
  border: none;
  outline: none;
  padding: 10px;
  padding-left: 10px;
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
  margin-bottom: 20px;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Modal_SignUpBtn_abled = styled.button`
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

const Modal_SignUpBtn_disabled = styled.button`
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

const IconBox = styled.span`
  margin-left: 5px;
`;

const CheckIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const XIcon = styled.img`
  width: 20px;
  height: 20px;
`;
