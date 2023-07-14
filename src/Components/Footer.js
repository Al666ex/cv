import '../Styles/Footer.scss'
import { Link } from 'react-router-dom';

const Footer = () => 
<footer className='wrapper'>
    <div className='rights-contact'>
        <p>All rights reserved</p>
    </div>
    <div className='rights-contact'>
        <p>
            Contacts
            <br/>
            Job
            <br/>
            Our team
        </p>
    </div>
    <div className='social'>
        <Link to={'https://www.youtube.com/'} target="_blank">
            <img src={require('../images/youtube.png')} alt='youtube'></img>
        </Link>

        <Link to={'https://telegram.org/'} target="_blank">        
            <img src={require('../images/telgrampng.png')} alt='telgrampng'></img>
        </Link>

        <Link to={'https://www.viber.com'} target="_blank">
            <img src= {require('../images/viber.png')} alt='viber'></img>    
        </Link>        
        
    </div>

</footer>

export default Footer;