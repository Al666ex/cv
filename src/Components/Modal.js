
import '../Styles/Modal.scss';

import PostForm from './PostForm';

const Modal = ({visible, setVisisble, submit}) => {
    return(
        <div className={visible ? 'modal active'  : 'modal'} onClick={() => setVisisble(false)} >    
            <div className='content' onClick={(e) => e.stopPropagation()}>
                <PostForm visible={visible} setVisisble={setVisisble} submit={submit}/>
            </div>
        </div>
    )
}

export default Modal;