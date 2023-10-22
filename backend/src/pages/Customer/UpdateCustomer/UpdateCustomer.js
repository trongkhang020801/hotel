import SlideBar from "../../../components/slidebar/slidebar";
import "./updateCustomer.scss"
import UpdateCustomer from "../../../components/Customer/customer.components";

const Customer = () =>{
    return (
        <div className="home">
          <SlideBar />
          <div className="homeContainer">
            <UpdateCustomer/>
          </div>
        </div>
      );
    };
export default Customer;