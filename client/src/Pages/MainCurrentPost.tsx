import React from "react";
import styled from "styled-components";
import usePoster from "../Hooks/usePoster";

function OpenContentPage() {
  const { state }: any = usePoster();

  return (
    <Container>
      <PostBox>
        <PostTitle>💤 코로나 언택트 시대, 우리는 어떻게 수업 시간에 잘 수 있을까요?</PostTitle>
        <div>
          <ButtonContainer>
            <EditButton>수정</EditButton>
            <EditButton>삭제</EditButton>
          </ButtonContainer>
        </div>
        <PostName>kimbyungchan</PostName>
        <PostBody>
          ⏰ 고등학교, 시간 관리의 중요성 작년까지만 해도 저는 학교를 다니고 있었어요. 하라는 공부는 안하고 여러가지 딴짓을 많이 했었죠. 하지만 하루는 고작 24시간, 인간이 딴짓을 할 수 있는 시간은
          한정되어 있습니다. 이는 수면 시간 보존의 법칙(Law of conservation of sleep hours)에 의한 것인데요. 인간 중에서도 나약한 편에 속하는 저는 무슨 일이 있어도 8시간은 채워 자게 됩니다. 그리고
          미인은 잠꾸러기인 법이니까요. 그렇기 때문에 제가 코딩하는 시간을 늘리려면 학교 수업 시간을 최대한 효율적으로, 즉 자는 데 사용해야 했습니다(25%만 자는 데 써도 2시간을 벌 수 있습니다).
          고등학교 1학년을 마치면서 선생님들께서는 제게 이제 2학년이 되니 시간을 효율적으로 사용하라는 목표를 마음속에 새기라는, 어... 대충 멋진 말씀을 해 주셨습니다. 선생님 말씀을 잘 듣는 착한 아이인
          저는 2020년이 되고 일년 목표를 시간 효율적으로 사용하기 로 정했습니다
        </PostBody>
      </PostBox>
    </Container>
  );
}
export default OpenContentPage;

const Container = styled.div`
width: 100vw;
height: 100vh;
width: 50%;
margin: auto;
padding-top 6rem;
`;

const PostTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 3.5rem;
  font-weight: bold;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

const PostName = styled.div`
  margin: 3rem 0;
  font-size: 1.2rem;
`;

const PostBody = styled.div`
  margin: 0.5rem 0;
  letter-spacing: 0.01em;
  font-size: 1.4rem;
  line-height: 230%;
`;

const PostBox = styled.div`
  padding: 1.5rem;
`;

const EditButton = styled.button`
  font-size: 1em;

  background-color: white;
  cursor: pointer;
  border: none;
  color: #9e9e9e;
  transition: 0.2s ease-in-out;

  &:hover {
    color: black;
    font-weight: bold;
    font-size: 1em;
  }
`;

const ButtonContainer = styled.div`
  float: right;
  margin-left: 12em;
`;
