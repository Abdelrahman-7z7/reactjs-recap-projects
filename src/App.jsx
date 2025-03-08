import PostList from './components/PostList'
import MainHeader from './components/MainHeader'
import {useState} from 'react'

function App() {

  const [modelIsVisible, setModelVisible] = useState(false); //true is the default value

  function showModelHandler(){
    setModelVisible(true);
  }

  function hideModelHandler () {
    setModelVisible(false)
  } 

  return (
    <>
      <MainHeader onCreatePost={showModelHandler} onStopPosting={hideModelHandler}></MainHeader>
      <main>
        <PostList isPosting={modelIsVisible} onStopPosting={hideModelHandler}/>  
      </main>
    </>
  )
}

export default App;
