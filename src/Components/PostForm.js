import { useEffect, useState } from "react"
import '../Styles/PostForm.scss'

const PostForm = ({visible, setVisisble, submit}) => {
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')

    const cancel = () => {
        setName('');
        setUserName('');
        setEmail('');
        setPhone('');
    }

    const save = (e) => {
        e.preventDefault()
        const post = {
            name,
            username,
            email,
            phone
        }
        console.log(post)
        submit(post);
        setVisisble(false);
        cancel();            
    }

    return(
    <form className="post-form" onSubmit={save}> 
        <input 
            value={name} 
            onChange={e => setName(e.target.value)} 
            type="text" 
            placeholder="...name"
            required
        />        
        <input 
            value={username} 
            onChange={e => setUserName(e.target.value)} 
            type="text" 
            placeholder="...username"
            required
        />
        <input 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            type="email" 
            placeholder="email@gmail.com" 
            required
        />        
        <input 
            value={phone} 
            onChange={e => setPhone(e.target.value)} 
            type="tel" 
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
            placeholder="695-00-861" 
            required
        />
        <div className="post-form-buttons">
            <button className="button">Save</button>    

            <button 
                className="button" 
                onClick={(e) => {
                    e.preventDefault();
                    setVisisble(false)
                }}
            >Cancel
            </button>   
        </div>
    </form>
    )
}

export default PostForm