import { useState } from 'react';

import Post from './post';
import NewPost from './NewPost';
import Model from './Model'

import classes from './PostList.module.css'

function PostList({isPosting, onStopPosting}){

    //state updating function for getting the new post from the NewPost file and map it to the postList
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData){
        //add the new postData and then follow it with the rest of the existing post data
        // setPosts([postData, ...posts]);
        
        //a better way for updating the state since it is relying on previous states
        setPosts((existingPosts) => [postData, ...existingPosts])
    }
    return(
        // since NewPost now is a sibling of the list and it is out of order we cannot use it like that
        <>
            {
                // /* to control the visibility of the Model component we need to use the following: */
                // modelIsVisible ?     
                //     (<Model onClose={hideModelHandler}>
                //         <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
                //     </Model>
                //     ): null

                //instead of the previous approach
                isPosting && (
                    <Model onClose={onStopPosting}>
                        {/* <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} onCancel={onStopPosting}/> */}
                        <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
                    </Model>
                )
            }


                {/* //notice that customized components are named with Alphabetic instead of lowercase letters <Post /> .... <div><div/> */}
                {
                    /* <Post author="Manuel" body="React.js awesome!" />
                    <Post author="Jonas" body="React.js awesome!" /> */
                    
                    //adding posts conditionally
                    posts.length > 0 && (
                        <ul className={classes.posts}>
                        {/* //adding the posts state by map function since it is an array taking into account that the each post must be executed as an <Post /> element
                        //each element in react must have a unique key which is a built-in method that it works like a unique id for each element... post.body can be the prop.key but this is just for the demo */}
                        {posts.map((post) => <Post key={post.body} author={post.author} body={post.body}></Post>)}
                        </ul>
                    )
                }
                {
                    posts.length === 0 && (
                        <div style={{textAlign:'center', color:'White'}}>
                            <h2>There are no posts yet.</h2>
                            <p>Start adding some!!</p>
                        </div>
                    )
                }
        </>
    )
}

export default PostList;