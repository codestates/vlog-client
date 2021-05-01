import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import xIconGray from "../../icon/X_icon_gray.png";
// axios.defaults.withCredentials = true

function LoginModal(props: any) {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
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
      // axios
      //   .post("https://localhost:8080/session", { email: email, password: password })
      //   .then((res) => {
      //     console.log(res)
      //     props.handleLoginModal();
      //     props.setIsLogin(true);
      //     history.push("/");
      //   })
      //   .catch((err) => alert("로그인 불가"));
      props.handleLoginModal();
      props.setIsLogin(true);
      history.push("/");
    } else {
      alert("올바르게 입력해주세요");
    }
  };
  console.log(userInfo);

  return (
    <ModalContainer onClick={props.handleLoginModal}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <CloseBtn src={xIconGray} onClick={props.handleLoginModal} />
          <Modal_Title>로그인</Modal_Title>
          <Modal_UserInfo>이메일</Modal_UserInfo>
          <Modal_Input name="email" onChange={(e: any) => handleChange(e)}></Modal_Input>
          <Modal_UserInfo>비밀번호</Modal_UserInfo>
          <Modal_Input type="password" name="password" onChange={(e: any) => handleChange(e)}></Modal_Input>
          <div>{email && password ? <Modal_LoginBtn_abled>로그인</Modal_LoginBtn_abled> : <Modal_LoginBtn_disabled disabled>로그인</Modal_LoginBtn_disabled>}</div>
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
`;

const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 500px;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
  background: white;
  transition: 0.4s ease-in;
`;

const CloseBtn = styled.img`
  cursor: pointer;
  width: 17px;
  height: 17px;
  position: fixed;
  top: 135px;
  right: 440px;
`;
const Modal_Title = styled.h1``;

const Modal_UserInfo = styled.div`
  font-size: 20px;
`;

const Modal_Input = styled.input`
  -webkit-box-shadow: 0 0 0 1000px rgba(237, 237, 237, 1) inset;
  width: 310px;
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
