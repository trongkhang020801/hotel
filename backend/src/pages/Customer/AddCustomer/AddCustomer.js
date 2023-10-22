import SlideBar from "../../../components/slidebar/slidebar";
import "./addCustomer.scss"
import AddCustomer from "../../../components/Customer/add-customer.components";

const Customer = () =>{
    return (
        <div className="home">
          <SlideBar />
          <div className="homeContainer">
            <AddCustomer/>
          </div>
        </div>
      );
    };
export default Customer;