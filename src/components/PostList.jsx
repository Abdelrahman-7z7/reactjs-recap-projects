import {useState} from 'react'

import Post from './post';
import NewPost from './NewPost';
import Model from './Model'

import classes from './PostList.module.css'

function PostList(){

    //useState must have a default value which is the one between the (), and it could be any type of data
        // useState returns an array, has exactly two element "stateData[0] = current state value", "stateData[1] = state updating function"
        const [enteredBody, setEnteredBody] = useState('');
        const [enteredAuthor, setEnteredAuthor] = useState('');
        const [modelIsVisible, setModelVisible] = useState(true); //true is the default value
    

        function hideModelHandler () {
            setModelVisible(false)
        } 

        function bodyChangeHandler(event){
            //target refers to the textarea (the field itself)
            // console.log(event.target.value)
            setEnteredBody(event.target.value)
        }

        function authorChangeHandler(event){
            //target refers to the textarea (the field itself)
            // console.log(event.target.value)
            setEnteredAuthor(event.target.value)
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
                modelIsVisible && (
                    <Model onClose={hideModelHandler}>
                        <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
                    </Model>
                )
            }


            <ul className={classes.posts}>
                {/* //notice that customized components are named with Alphabetic instead of lowercase letters <Post /> .... <div><div/> */}
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Manuel" body="React.js awesome!" />
                <Post author="Jonas" body="React.js awesome!" />
            </ul>
        </>
    )
}

export default PostList;