// const names = ['Maximilain', 'Manuel']
import {Link} from 'react-router-dom'

//importing the Post.module.css
import classes from './Post.module.css'

function Post({id, author, body}){
    // const chosenName = Math.random() > 0.5? names[0] : names[1]
    // console.log(id, author, body)
    return (
        // in-line style:- <div style={{color:'red', textAlign:'left'}}>
        <li className={classes.post}>
            {/* generating a different path for that id */}
            <Link to={id}>
                <p className={classes.author}>{author}</p>
                <p className={classes.text}>{body}</p>
            </Link> 
        </li>
    )
}

export default Post;