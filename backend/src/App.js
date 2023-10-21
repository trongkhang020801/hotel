import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import SlideBar from "./components/slidebar/slidebar";
import Widget from "./components/widget/widget";
import Chart from "./components/chart/chart"
import Featured from "./components/featured/Featured";

import AddCustomer from "./components/add-customer.components";
import Customer from "./components/customer.components";
import CustomerlsList from "./components/customer-list.components";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <SlideBar/>
          <div className="row wapper">
          <div className="col-9">
            <Routes>
              {/* <Route path="/" element={<CustomerlsList/>} /> */}
              <Route path="/customer" element={<CustomerlsList/>} />
              <Route path="/add" element={<AddCustomer/>} />
              <Route path="/customer/:id" element={<Customer/>} />
            </Routes>
          </div>
          <div className="widgets col-3 row-1">
            <Widget type="user" />
            <Widget type="employee" />
            <Widget type="order" />
            <Widget type="room" />
          </div>
          
          </div>
          <Featured/>
          <Chart title="6 months ago (Revenue)" aspect={2/1}/>
        </div>
      </div>
    );
  }
}

export default App;