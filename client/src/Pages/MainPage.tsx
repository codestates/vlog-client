import React from 'react'
import PostListContainer from '../Hooks/usePoster'
import axios from "axios";
import PostList from '../components/PostList';


function MainPage() {

    return (
        <div>
            <PostList />
        </div>
    )
}

export default MainPage