import React from "react";
import usePoster from '../Hooks/usePoster'

<<<<<<< HEAD
import styled from "styled-components";



const Items = styled.img`
  background: #fff;
  border: 2px solid yellow;
  border-radius: 2px;
  margin:20px;
`;



type propsPostList = {
  el: any;
  key: string;
};
=======
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
function PostList() {
  const { state } = usePoster()
>>>>>>> 8f6802527b17747eb5c33925cfa77139b58cf065

  return (
<<<<<<< HEAD
      <div>

            <Items key={el.id} src={el.snippet.thumbnails.default.url} />

      </div>
  );
=======
    <div>
      {state === null ? <div>로딩 중입니다</div> : state.map((el:any) => (
        <img src={el.snippet.thumbnails.default.url} key={el.id}/>
      ))}
    </div>
  )
>>>>>>> 8f6802527b17747eb5c33925cfa77139b58cf065
}


export default PostList;
