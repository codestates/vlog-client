import React, { useState } from "react";
import styled from "styled-components";
import LoginModal from "./LoginModal";
import MenuModal from './MenuModal'

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
  margin-right: 30px;
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

const BtnContainer = styled.div`
  display: flex;
`

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

const MenuBtn = styled.button`
  margin: 20px;
`

function Nav() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginModal, setLoginModal] = useState(false);
  const [menuModal, setMenuModal] = useState(false);

  const handleModal = () => {
    if (loginModal) {
      setLoginModal(false);
    } else {
      setLoginModal(true);
    }
  };

  const handleMenuModal = () => {
    if(menuModal) {
      setMenuModal(false)
    } else {
      setMenuModal(true)
    }
  }
  return (
    <Container>
      <LeftNav>
        <HomeBtn>Vlog</HomeBtn>
      </LeftNav>
      <RightNav>
        {isLogin ? (
          <BtnContainer>
            <NewPostBtn>새 글 작성</NewPostBtn>
            <MenuBtn onClick={handleMenuModal}>메뉴</MenuBtn>
          </BtnContainer>
        ) : (
          <MainLoginBtn onClick={handleModal}>로그인</MainLoginBtn>
        )}
      </RightNav>
      {loginModal ? <LoginModal handleModal={handleModal} /> : null}
      {menuModal ? <MenuModal handleMenuModal={handleMenuModal}/> : null}
    </Container>
  );
}

export default Nav;




