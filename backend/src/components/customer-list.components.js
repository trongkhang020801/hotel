import React, { Component } from "react";
import CustomerDataService from "../services/customer.services";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

export default class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchnameCustomer = this.onChangeSearchnameCustomer.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.searchnameCustomer = this.searchnameCustomer.bind(this);

    this.state = {
      customers: [],
      currentTutorial: null,
      currentIndex: -1,
      searchnameCustomer: ""
      
    };
  }

  componentDidMount() {
    this.retrieveTutorials();
  }

  onChangeSearchnameCustomer(e) {
    const searchnameCustomer = e.target.value;

    this.setState({
      searchnameCustomer: searchnameCustomer
    });
  }

  retrieveTutorials() {
    CustomerDataService.getAll()
      .then(response => {
        this.setState({
          customers: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index
    });
  }

  removeAllTutorials() {
    CustomerDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchnameCustomer() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });

    CustomerDataService.findByNameCustomer(this.state.searchnameCustomer)
      .then(response => {
        this.setState({
          customers: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
      
  }


  render() {
    const useColumns =[
      {
        field: "id",
        headerName: "id",
        width: 50,
      },
        {
          field: "idCustomer",
          headerName: "idCustomer",
          width: 100,
        },
        {
          field: "idDec",
          headerName: "idDec",
          width: 100,
        },
        {
          field: "nameCustomer",
          headerName: "Name",
          width: 120,
        },
        {
          field: "scoreLevel",
          headerName: "Score Level",
          width: 100,
        },
        {
          field: "usedScoreLevel",
          headerName: "Used Score Level",
          width: 100,
        },
        {
          field: "genderCustomer",
          headerName: "Gender",
          width: 100,
        },
        {
          field: "dateOfBirth",
          headerName: "Date of Birth",
          width: 100,
        },
        {
          field: "phoneNumberCustomer",
          headerName: "Phone Number",
          width: 100,
        },
        {
          field: "mailCustomer",
          headerName: "Email",
          width: 100,
        },
        {
          field: "addressCustomer",
          headerName: "Address",
          width: 100,
        }
    ]
    const handleDelete = (id) => {
      console.log(id)
    };
    const actionColumn  = [
      {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="cellAction">
              <Link to={"/customer/"+params.row.idCustomer} style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
              <div
                className="deleteButton"
                onClick={() => handleDelete(params.row.idCustomer)}
              >
                Delete
              </div>
            </div>
          );
        },
      }
    ];
    const { searchnameCustomer, customers, currentTutorial, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Name Customer"
              value={searchnameCustomer}
              onChange={this.onChangeSearchnameCustomer}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchnameCustomer}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <h4>Customer List</h4>
          <div>
            <Link to={"/add"} style={{ textDecoration: "none" }}>
              <div className="btn btn-primary">Add</div>
            </Link>
          </div>
          <div className="datatable">
              <DataGrid
                className="datagrid"
                key={customers.id}
                rows={customers}
                columns={useColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[10]}
                // checkboxSelection
              />
          </div>
        </div>
      </div>
    );
  }
}