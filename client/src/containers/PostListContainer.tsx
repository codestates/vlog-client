
import {useSelector, useDispatch} from 'react-redux'
import PostList from '../components/PostList'
import {displayData} from '../modules/post'
import { RootState } from '../modules';


export default function PostListContainer() {
    
  
   const state = useSelector((state:RootState) => (state.postReducer.data));
   

    
    return (
        <div>

        {state.map((element:any)=> {
            return <PostList element={element} key={element.etag} />
            // return  <img key = {element.id}  src={element.snippet.thumbnails.default.url}/>

        })}
       
        </div>
    );
}





