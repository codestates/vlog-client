    import React from 'react'


    type propsPostList ={
        element:any;
        key:string;

    }
    
    export default function PostList({element,key}:propsPostList) {
        return (
            <div>
              <img key = {element.id}  src={element.snippet.thumbnails.default.url}/>
            </div>
        )
    }
    