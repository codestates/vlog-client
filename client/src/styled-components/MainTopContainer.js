import styled from "styled-components";

export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
`;

export const Img = styled.img`
  width: 1000px;
  height: 700px;

  @media (max-width: 375px) {
    width: 300px;
    height: 300px;
    margin-top: -1000px;
    margin-bottom: -1000px;
  }

  @media (max-width: 768px) {
    width: 768px;
    height: 500px;
  }
`;

export const TitleList = styled.div`
  display: flex;
  justify-content: center;
`;
