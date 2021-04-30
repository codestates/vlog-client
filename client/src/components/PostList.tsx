import React from "react";
import usePoster from '../Hooks/usePoster'
import styled from "styled-components";


function PostList() {
  const { state } = usePoster()
  console.log('hi')

  return (
  
      <ListContainer>
        {state === null ? <div>로딩 중입니다</div> : state.map((el:any) => (
          <Item onClick={() => console.log('hi')} src={el.snippet.thumbnails.default.url} key={el.id}/>
        ))}
      </ListContainer>
   
  )
}

const ListContainer = styled.div`

  display:flex;
  align-items: center;
  justify-content: center; 
  flex-wrap: wrap
  
`;

const Item = styled.img`
 
width: 15rem;
background: white;
border-radius: 4px;
margin: 1rem;
overflow: hidden;
display: flex;
flex-direction: column;

  &: hover {
    z-index: 1;
    transform: scale(1.5);
    background: #9E9E9E;
    border: 5px solid gold;
}

`;

export default PostList;

// type propsPostList = {
//   el: any;
//   key: string;
// };

// function PostList({ el, key }: propsPostList) {
//   return (
//     <div>
//       <img key={el.id} src={el.snippet.thumbnails.default.url} />
//     </div>
//   );
// }