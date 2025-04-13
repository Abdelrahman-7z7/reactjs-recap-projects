import { Outlet } from 'react-router-dom';
import PostList from '../components/PostList'
function Posts() {

  

  return (
    <>
      {/*Outlet component => is responsible for allowing nested-routes for making an over layout*/}
      <Outlet></Outlet>
      {/* <MainHeader onCreatePost={showModelHandler} onStopPosting={hideModelHandler}></MainHeader> */}
      <main>
        <PostList />  
      </main>
    </>
  )
}

export default Posts;

export async function loader() {
  const res = await fetch('http://localhost:8085/posts');
  const resData = await res.json();
  //we are returning the fetched data to the Posts component
  return resData.posts;
}
