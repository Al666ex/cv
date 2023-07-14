import '../Styles/Tech.scss';
import { Link } from 'react-router-dom';

const Tech = () => 
<div className="tech">
    <h3>HTML React Redux SASS. Fatch   
        <Link className='flash' to={'/users'}> Users </Link> 
        from 
        <Link to={"https://jsonplaceholder.typicode.com/"} target="_blank">jsonplaceholder</Link>
    </h3>
</div>
export default Tech;
