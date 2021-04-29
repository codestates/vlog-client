import styled from "styled-components";
import useNewPoster from '../Hooks/useNewPoster'
import React, { useState } from 'react';


export default function NewPost() {

    const { state } = useNewPoster();

    
    // function previewFile() {
    //     const preview = document.querySelector('img');
    //     const file = document.querySelector('input[type=file]').files[0];
    //     const reader = new FileReader();
      
    //     reader.addEventListener("load", function () {
    //       // convert image file to base64 string
    //       preview.src = reader.result;
    //     }, false);
      
    //     if (file) {
    //       reader.readAsDataURL(file);
    //     }
    //   }

    return (
        <Container>
            <TitleContainer>
                <PostTitle type="text"  placeholder="제목을 입력하세용"/>
            </TitleContainer>
{/* 
            <input type="file" accept="image/png" />
            <img src={fileUrl}/> */}

            <BodyContainer>
                <PostBody type="text" placeholder="기억에 남을만한 일들을 기록해보세용 ㅎㅎ"/>
            </BodyContainer>
        </Container>
    )
}



const Container = styled.div`
    width: 100vw;
    height: 100vh;
`
const TitleContainer = styled.div`
    padding-top: 2rem;
    padding-left: 3rem;
    padding-right: 3rem;
`

const BodyContainer = styled.div`
    padding-top: 2rem;
    padding-left: 3rem;
    padding-right: 3rem;


`


const PostTitle = styled.input`
border-color:white;
padding-top: 2rem;
padding-left: 3rem;
padding-right: 3rem;
font-size : 50px
`

const PostBody = styled.input`
overflow: scroll!important;
margin-top: 30px;
    margin-bottom: -30px;
    margin-right: -30px;
    padding-bottom: 30px;
    height: 100%;
    outline: none;
    position: relative;
    width:100%;
    border-color:white;
`

