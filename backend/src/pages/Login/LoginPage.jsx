import Login from "../../components/Login/Login";
import SlideBar from "../../components/slidebar/slidebar";

const LoginPage = () =>{
    return (
        <div className="home">
            <SlideBar/>    
            <div className="homeContainer">
            <Login/>          
            </div>
        </div>
        
      );
    };
export default LoginPage;