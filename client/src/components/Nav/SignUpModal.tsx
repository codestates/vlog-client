import react, { useState } from "react";
import styled from "styled-components";
import axios from "axios"


const pwPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
const userNamePattern = /^[가-힣]{2,4}$/;
const emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

// 목표하는 기능 구현
// 유효성 검사

//1. 유효성 검사 패턴 가져오기
//2. 유효성 검사 test 메소드에 넣어줄 value 값을 받아올 수 있어야 됨.

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
    if (emailResult && passwordResult && nicknameResult) {
      console.log("완-벽");
    } else {
      e.preventDefault();
      console.log("완벽하게 입력해주세요.");
    }
  };


  function handleSignIn(){

  }


  return (
    <ModalContainer onClick={props.handleSignUpModal}>
      <ModalBox
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Modal_Title>회원가입</Modal_Title>
          <Modal_UserInfo>이메일</Modal_UserInfo>
          <Modal_Input name="email" onChange={(e) => handleUserInfo(e.target)}></Modal_Input>
          {testResults.emailResult === null ? null : testResults.emailResult === true ? <span>가능</span> : <span>불가능</span>}
          <Modal_UserInfo>닉네임</Modal_UserInfo>
          <Modal_Input name="nickname" onChange={(e) => handleUserInfo(e.target)}></Modal_Input>
          {testResults.nicknameResult === null ? null : testResults.nicknameResult === true ? <span>가능</span> : <span>불가능</span>}
          <Modal_UserInfo>비밀번호</Modal_UserInfo>
          <Modal_Input type="password" name="password" onChange={(e) => handleUserInfo(e.target)}></Modal_Input>
          {testResults.passwordResult === null ? null : testResults.passwordResult === true ? <span>가능</span> : <span>불가능</span>}

          <div>
            <Modal_LoginBtn onClick={props.handleSignIn}>회원가입</Modal_LoginBtn>
          </div>
          <div>
            <Modal_SideBtn onClick={props.handleSideBtn}>이미 아이디가 있으신가요?</Modal_SideBtn>
          </div>
        </form>
      </ModalBox>
    </ModalContainer>
  );
}

export default SignUpModal;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(3px);
  border: 3px solid black;
`;

const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 500px;
  border: 1px solid black;
  border-radius: 10px;
  background: white;
`;

const Modal_Title = styled.h1``;

const Modal_UserInfo = styled.div`
  font-size: 20px;
`;

const Modal_Input = styled.input`
  width: 310px;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: rgba(237, 237, 237, 1);
  border: none;
  outline: none;
  padding: 10px;
  padding-left: 10px;
`;

const Modal_LoginBtn = styled.button`
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
