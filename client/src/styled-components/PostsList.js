import styled from "styled-components"

export const Container = styled.div`
  background-color: #f5f5f5;
  width: 100vw;
  height: 100%;
`;

export const ItemsContainer = styled.div`
  margin-left: -10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  padding: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 200px);
    padding: 55px;
  }

  @media (max-width: 375px) {
    grid-template-columns: repeat(1, 375px);
  }
`;

export const ItemBox = styled.div`
  background: white;
  border: none;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  height: 280px;

  &:hover {
    transform: translateY(-7px);
  }
`;

export const Item = styled.div`
  padding: 30px;
  
`;

export const PostTitle = styled.h3`
  width: 80%;
  margin-top: -10px;
`;

export const PostBody = styled.div`
  width: 100%;
`;

