import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios"
import { useHistory } from "react-router-dom";

function LoginModal(props: any) {
  const [userInfo, setUserInfo] = useState({
    email: 'kimcoding@authstates.com',
    password: '1234'
  })
  const history = useHistory()
  const handleLoginBtn = () => {
       
    axios.post('http://localhost:8080/session',{email:userInfo.email ,password:userInfo.password})
    .then(res => {
      
      history.push('/')
    })
    .catch(err => console.log(err))
  
  }



  return (
    <ModalContainer onClick={props.handleLoginModal}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleLoginBtn()
          }}
        >
          <Modal_Title>로그인</Modal_Title>
          <Modal_UserInfo>이메일</Modal_UserInfo>
          <Modal_Input></Modal_Input>
          <Modal_UserInfo>비밀번호</Modal_UserInfo>
          <Modal_Input></Modal_Input>
          <div>
            <Modal_LoginBtn>로그인</Modal_LoginBtn>
          </div>
          <div>
            <Modal_SideBtn onClick={props.handleSideBtn}>회원가입</Modal_SideBtn>
          </div>
        </form>
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
  transition: 0.4s ease-in;
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
