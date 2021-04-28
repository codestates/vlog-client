import React from 'react'
import styled from 'styled-components'
// import PostLists from '~~~'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    border: 3px solid black;
`

const UserInfo = styled.div``

function MyPage() {
    return (
        <Container>
            <div>hello</div>
            {/* <TagsList /> */}
            <UserInfo></UserInfo>
            {/* <PostLists /> */}
        </Container>
    )
}

export default MyPage