import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function MenuModal(props: any) {
  const history = useHistory();

  const handleMoveToMypage = () => {
    history.push("/page");
    props.handleMenuModal();
  };
  return (
    <ModalContainer>
      <ModalBox>
        <Modal_Page onClick={handleMoveToMypage}>내 Vlog</Modal_Page>
        <Modal_Logout>로그아웃</Modal_Logout>
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
  border: 1px solid black;
  border-radius: 10px;
`;
const Modal_Page = styled.div`
  border-bottom: 1px solid black;
  cursor: pointer;
  padding: 10px;
  margin: 5px;

  &: hover {
    background: #f5f5f5;
  }
`;
const Modal_Logout = styled.div`
  cursor: pointer;
  padding: 10px;
  margin: 5px;

  &: hover {
    background: #f5f5f5;
  }
`;
