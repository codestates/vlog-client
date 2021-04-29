import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background: white;
  width: 100%;
  height: 70px;
`;

const LeftNav = styled.div`
  position: absolute;
  left: 0;
  margin-left: 100px;
`;

const RightNav = styled.div`
  position: absolute;
  right: 0;
  margin-right: 100px;
`;

const HomeBtn = styled.button`
  border: none;
  background: none;
  width: 70px;
  height 60px;
  font-size: 30px;
`;
const MainLoginBtn = styled.button`
  border: 1px solid #424242;
  border-radius: 20px;
  background: #424242;
  color: white;
  width: 80px;
  height 30px;
  font-size: 17px;
  margin: 20px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  

  &: hover {
      background: #9E9E9E;
      border: 1px solid #9E9E9E
  }
`;

const NewPostBtn = styled.button`
border: 1px solid #424242;
border-radius: 20px;
background: #424242;
color: white;
width: 100px;
height 30px;
font-size: 17px;
margin: 20px;

&: hover {
    background: #9E9E9E;
    border: 1px solid #9E9E9E
}

`;

const Modal = styled.div`
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

const Modal_SignInBtn = styled.button`
  width: 320px;
  height: 35px;
  border-radius: 20px;
  background-color: white;
  color: black;
  border: 2px solid black;
  cursor: pointer;
  outline: none;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: black;
    color: white;
  }
`;

function Nav() {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <Container>
      <LeftNav>
        <HomeBtn>Vlog</HomeBtn>
      </LeftNav>
      <RightNav>{isLogin ? <NewPostBtn>새 글 작성</NewPostBtn> : <MainLoginBtn onClick={handleModal}>로그인</MainLoginBtn>}</RightNav>
      {isOpen ? (
        <Modal onClick={handleModal}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            <form onSubmit={(e) => {e.preventDefault()}}>
              <Modal_Title>로그인</Modal_Title>
              <Modal_UserInfo>email</Modal_UserInfo>
              <Modal_Input></Modal_Input>
              <Modal_UserInfo>password</Modal_UserInfo>
              <Modal_Input></Modal_Input>
              <div>
                <Modal_LoginBtn>로그인</Modal_LoginBtn>
              </div>
              <div>
                <Modal_SignInBtn>회원가입</Modal_SignInBtn>
              </div>
            </form>
          </ModalBox>
        </Modal>
      ) : null}
    </Container>
  );
}

export default Nav;




