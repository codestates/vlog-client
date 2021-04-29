import React from 'react'
import styled from 'styled-components'

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: 0 0 0 0;
    
`
const ModalBox = styled.div`
  position: fixed;
  top: 60px;
  right: 50px;
  width: 180px;
  height: 220px;
  border: 1px solid black;
`
const Modal_Content = styled.div`
  border: 1px solid black;
`
function MenuModal(props:any) {
    return(
        <ModalContainer>
            <ModalBox>
                <Modal_Content>내 Vlog</Modal_Content>
                <Modal_Content>로그아웃</Modal_Content>
            </ModalBox>
        </ModalContainer>
    )
}

export default MenuModal