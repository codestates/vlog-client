import React, { useState } from "react";
import styled from "styled-components";
import LoginModal from "./LoginModal";
import MenuModal from "./MenuModal";
import SignUpModal from "./SignUpModal";
import menuIcon from "../../icon/menu_gray.png";
import { Link } from "react-router-dom";

function Nav() {
  const [isLogin, setIsLogin] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [menuModal, setMenuModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  const handleLoginModal = () => {
    if (loginModal) {
      setLoginModal(false);
      document.body.style.overflow = "unset";
    } else {
      setLoginModal(true);
      document.body.style.overflow = "hidden";
    }
  };

  const handleSignUpModal = () => {
    if (signUpModal) {
      setSignUpModal(false);
      document.body.style.overflow = "unset";
    } else {
      setSignUpModal(true);
      document.body.style.overflow = "hidden";
    }
  };

  const handleMenuModal = () => {
    if (menuModal) {
      setMenuModal(false);
    } else {
      setMenuModal(true);
    }
  };

  const handleSideBtn = () => {
    if (loginModal && !signUpModal) {
      setLoginModal(false);
      setSignUpModal(true);
    } else if (!loginModal && signUpModal) {
      setLoginModal(true);
      setSignUpModal(false);
    }
  };

  return (
    <Container>
      <LeftNav>
        <HomeBtn>Vlog</HomeBtn>
      </LeftNav>
      <RightNav>
        {isLogin ? (
          <BtnContainer>
            <NewPostBtn>
              <NewPostLink to="/newPost" style={{ textDecoration: "none" }}>
                새 글 작성
              </NewPostLink>
            </NewPostBtn>
            <MenuBtn src={menuIcon} onClick={handleMenuModal} />
          </BtnContainer>
        ) : (
          <MainLoginBtn onClick={handleLoginModal}>로그인</MainLoginBtn>
        )}
      </RightNav>
      {loginModal ? <LoginModal handleLoginModal={handleLoginModal} handleSideBtn={handleSideBtn} setIsLogin={setIsLogin} /> : null}
      {signUpModal ? <SignUpModal handleSignUpModal={handleSignUpModal} handleSideBtn={handleSideBtn} /> : null}
      {menuModal ? <MenuModal handleMenuModal={handleMenuModal} setIsLogin={setIsLogin} setMenuModal={setMenuModal} /> : null}
    </Container>
  );
}

export default Nav;

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
  font-size: 35px;
  margin-top: 10px;
`;
const MainLoginBtn = styled.button`
  border: 1px solid #424242;
  border-radius: 20px;
  background: #424242;
  color: white;
  width: 80px;
  height: 30px;
  font-size: 17px;
  margin: 20px;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #9e9e9e;
    border: 1px solid #9e9e9e;
  }
`;

const BtnContainer = styled.div`
  display: flex;
`;

const NewPostBtn = styled.div`
  border: 1px solid #424242;
  border-radius: 20px;
  background: #424242;
  color: white;
  width: 100px;
  height: 30px;
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 18px;

  &:hover {
    background: #9e9e9e;
    border: 1px solid #9e9e9e;
  }
`;

const NewPostLink = styled(Link)`
  color: white;
  margin-right: 5px;
`;

const MenuBtn = styled.img`
  margin: 20px;
  width: 28px;
  height: 28px;
  cursor: pointer;
`;
