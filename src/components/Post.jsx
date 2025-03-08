// const names = ['Maximilain', 'Manuel']

//importing the Post.module.css
import classes from './Post.module.css'

function Post(props){
    // const chosenName = Math.random() > 0.5? names[0] : names[1]
    return (
        // in-line style:- <div style={{color:'red', textAlign:'left'}}>
        <li className={classes.post}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
        </li>
    )
}

export default Post;