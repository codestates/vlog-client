import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { displayMyData, displayUserInfo } from "../../modules/myPageModule";
import { useDispatch } from "react-redux";
axios.defaults.withCredentials = true;

function MenuModal(props: any) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleMoveToMypage = async () => {
    console.log("마이페이지 정보 뿌려주는 요청 보내짐");

    await axios
      .get("http://localhost:8080/userinfo")
      .then((res) => {
        console.log("여기 밑에가 userInfo res");
        console.log(res.data.data);
        dispatch(displayUserInfo(res.data.data));
        props.handleMenuModal();
        console.log("마이페이지 게시물들 요청 보내질거임");
      })
      .then((res) => {
        axios.get("http://localhost:8080/mypage").then((res) => {
          dispatch(displayMyData(res.data.data));
          history.push("/page");
        });
      });
  };

  const handleLogout = () => {
    axios.delete("http://localhost:8080/session").then((res) => {
      props.setIsLogin(false);
      props.setMenuModal(false);
      localStorage.removeItem("sessionId")
      history.push("/");
    });
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
