
// state (변하는 상태는):dummy_date 이유 =  데이터를 추가하고 삭제할수 있기 때문에: 데이터가 변경이 될 수 있다. 



import {fakeData} from '../fakeData'

//action part
const DISPLAYDATA = 'post/DISPLAYDATA' as const;


//만약 추가나 삭제 버튼을 눌렀을경우 데이터가 변경 
export const displayData = ()=>({
    type : DISPLAYDATA,

});

//ReturnType<typeof__> 특정 함수의 반환값 추론해줌.
// 모든 액션 리턴값 지정해줌.
type PostAction =
    |ReturnType<typeof displayData>


type DataState = {
    data:any;
}

//reducer part
const init: DataState ={
    data: fakeData

}

export default function postReducer(state:DataState = init, action:PostAction):DataState{
    switch(action.type){
        case DISPLAYDATA:
            return {
            ...state,
        }

        default:
            return state;
    }

} 
