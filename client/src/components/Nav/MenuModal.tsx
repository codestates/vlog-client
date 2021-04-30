import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {useDispatch} from 'react-redux'
import {displayMyData} from '../../modules/myPageModule'

function MenuModal(props: any) {
  const history = useHistory();
  const dispatch = useDispatch()

  const handleMoveToMypage = () => {
    // 유저가 로그인 성공했을 시, 해당하는 유저의 정보와 포스트들을 마이페이지에 뿌려주는 요청
    // 요청 성공 시, 데이터들을 받아온다. 

    axios.get('http://localhost:8080/posts')
    .then(res => console.log(res))
    // .then(res => dispatch(displayMyData(res)))
    history.push("/page");
    props.handleMenuModal();
  };

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
