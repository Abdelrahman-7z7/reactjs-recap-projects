import {Link} from 'react-router-dom'
import {MdPostAdd, MdMessage} from 'react-icons/md'

import classes from './MainHeader.module.css'

function MainHeader({onCreatePost}){
    return(
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <MdMessage></MdMessage>
                React Poster
            </h1>

            <p>
                <Link to="/create-post" className={classes.button} onClick={onCreatePost}>
                    <MdPostAdd size={18}></MdPostAdd>
                    New Post
                </Link>
                
            </p>
        </header>
    )
}

export default MainHeader;