import '../Styles/Home.scss';
import Tech from '../Components/Tech';
const Home = () => 
<>
    <div className="bg-video">
        <video src={require("../video/waves_-_22183 (720p).mp4")} autoPlay muted loop></video>
        <div className='effect'></div>
        <h1 style={{textAlign : 'center', zIndex:800}} className="home">some wise information</h1>         
    </div>
    <Tech />
</>
    

export default Home;