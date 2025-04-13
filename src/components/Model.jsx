import { useNavigate } from 'react-router-dom';
import classes from './Model.module.css';

function Modal({ children}) {
  const navigate = useNavigate();

  function closeHandler(){
    // .. this is used to go one level up
    navigate('..') 
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}/>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;