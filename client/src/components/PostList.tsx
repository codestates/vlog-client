import React from "react";
import usePoster from '../Hooks/usePoster'

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

  return (
    <div>
      {state === null ? <div>로딩 중입니다</div> : state.map((el:any) => (
        <img src={el.snippet.thumbnails.default.url} key={el.id}/>
      ))}
    </div>
  )
}


export default PostList;
