import SlideBar from "../../components/slidebar/slidebar";
import "./customer.scss"
import CustomerlsList from "../../components/Customer/customer-list.components";
const Customer = () =>{
    return (
        <div className="home">
          <SlideBar />
          <div className="homeContainer">
            <CustomerlsList/>
          </div>
        </div>
      );
    };
export default Customer;