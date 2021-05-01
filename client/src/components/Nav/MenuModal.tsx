import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
// axios.defaults.withCredentials = true


function MenuModal(props: any) {
  const history = useHistory();

  const handleMoveToMypage = () => {
    // axios.get('https://localhost:8080/mypage')
    // .then(res => {
    //   console.log(res)
    //   history.push("/page");
    //   props.handleMenuModal();
    // })
      history.push("/page");
      props.handleMenuModal();
    
  };

  const handleLogout = () => {
    // axios.delete('http://localhost:8080/session')
    // .then(res => {
    //   props.setIsLogin(false)
    //   props.setMenuModal(false)
    //   history.push('/')
    // })
          history.push('/')

  }

  useEffect(() => {
    window.addEventListener("click", props.handleMenuModal);
    return () => {
      window.removeEventListener("click", props.handleMenuModal);
    };
  });

  return (
    <ModalContainer>
      <ModalBox>
        <Modal_Page onClick={handleMoveToMypage}>내 Vlog</Modal_Page>
        <Modal_Logout onClick={handleLogout}>로그아웃</Modal_Logout>
      </ModalBox>
    </ModalContainer>
  );
}

export default MenuModal;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: 0 0 0 0;
`;
const ModalBox = styled.div`
  position: fixed;
  top: 70px;
  right: 50px;
  width: 180px;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
`;
const Modal_Page = styled.div`
  border-bottom: 1px solid black;
  cursor: pointer;
  padding: 10px;
  margin: 5px;

  &:hover {
    background: #f5f5f5;
  }
`;
const Modal_Logout = styled.div`
  cursor: pointer;
  padding: 10px;
  margin: 5px;

  &:hover {
    background: #f5f5f5;
  }
`;
