import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./style/dark.scss";
import "./App.scss"
import Customer from "./pages/Customer/customer";
import AddCustomer from "./pages/Customer/AddCustomer/AddCustomer";
import UpdateCustomer from "./pages/Customer/UpdateCustomer/UpdateCustomer";
import LoginPage from "./pages/Login/LoginPage";
function App() {
    return (
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="customer" >
                <Route index element={<Customer />} />
                <Route path="add" element={<AddCustomer />} />
                <Route path=":id" element={<UpdateCustomer />} />
            </Route>
            <Route path="login" element={<LoginPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    );
}

export default App;