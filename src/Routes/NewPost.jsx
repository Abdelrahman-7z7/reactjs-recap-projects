import {Link, Form, redirect} from 'react-router-dom'

// import Post from './Post'
import classes from './NewPost.module.css'
import Model from '../components/Model'

function NewPost() {

    return (
        <Model>
            {/* // we can add the onSubmit event which is pre-prepared function and add a function to listen for it  */}
            <Form method='post' action="" className={classes.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name='body' required rows={3} ></textarea>
                </p>
                <p>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id='name' name='author' required />
                </p>
                {/* <Post author={enteredAuthor} body={enteredBody} /> */}
                <p className={classes.actions}>
                    {/* by default the button field in the form does submit when it gets pressed and we dont want both of the cancel and the submit to do the same action */
                    
                    /**basically using two dots .. to go one level up */
                    }
                    <Link to=".." type='button'>cancel</Link>
                    <button type='submit'>submit</button>
                </p>
            </Form>
        </Model>
    )
}

export default NewPost;

export async function action ({request}){
    //if we extract that formData out of request we will get the encoded data out of the form "NOTE: it has a returned promise"
    const formData = await request.formData();
    //formData.get('body') this is a get method to extract the data
    const postData = Object.fromEntries(formData) // {'body': '...', 'author': '...'}
    await fetch('http://localhost:8085/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-type': 'application/json'
        }
    });
    console.log(postData)

    //this hook basically navigate the the intended route after this action has been completed
    return redirect('/');
}