import React, {useEffect, useState} from 'react'
import useMyPage from '../Hooks/useMyPage'

function MyPagePostPage() {
    const {state} = useMyPage()

    useEffect(() => {
       
    })

    return (
        <div>
            {state.currentPost === null ? <div>로딩 중입니다</div> : <div>로딩 완료!</div>}
        </div>
    )
}

export default MyPagePostPage