import {useState} from 'react'

// import Post from './Post'
import classes from './NewPost.module.css'
function NewPost({onCancel, onAddPost}) {

    //useState must have a default value which is the one between the (), and it could be any type of data
    // useState returns an array, has exactly two element "stateData[0] = current state value", "stateData[1] = state updating function"
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

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

    function submitHandler(event){
        //the submit is by default running on the server not on the browser and we dont want that
        //this is why we are going to prevent that action
        event.preventDefault();
        const postData ={
            body: enteredBody,
            author: enteredAuthor
        }
        // console.log(postData)
        //before closing the form update the form data
        onAddPost(postData)
        //closing the form after submitting
        onCancel()
    }

    return (
        // we can add the onSubmit event which is pre-prepared function and add a function to listen for it 
        <form action="" className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={bodyChangeHandler}></textarea>
            </p>
            <p>
                <label htmlFor="name">Your Name</label>
                <input type="text" id='name' required onChange={authorChangeHandler} />
            </p>
            {/* <Post author={enteredAuthor} body={enteredBody} /> */}
            <p className={classes.actions}>
                {/* by default the button field in the form does submit when it gets pressed and we dont want both of the cancel and the submit to do the same action */}
                <button type='button' onClick={onCancel}>cancel</button>
                <button type='submit'>submit</button>
            </p>
        </form>
    )
}

export default NewPost;