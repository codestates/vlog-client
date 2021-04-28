
import {useSelector, useDispatch} from 'react-redux'
import PostList from '../components/PostList'
import {displayData} from '../modules/post'
import { RootState } from '../modules';
import axios from "axios";
import {useEffect} from 'react';



export default function PostListContainer() {
    
  

    
   
   const dispatch = useDispatch();
   const state = useSelector((state:RootState) => (state.postReducer.data));

   useEffect(() => {
    axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyCk0LNtPlTSTmoV8-OwRpqY3z38q78v1aM')
    .then(res =>{ 
    
        dispatch(displayData(res))
    })
    
    },[]) 

    return (
        <div>
            {state === null ? <div>로딩중</div>: <div> 로딩성공 </div>}
   
        {state.map((element:any) => {
            return  <img key = {element.id}  src={element.snippet.thumbnails.default.url}/>
            }
        )}
        </div>
    );
}





