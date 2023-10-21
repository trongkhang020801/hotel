import React, { Component } from "react";
import CustomerDataService from "../services/customer.services";
import { withRouter } from '../common/with-router';

class Customer extends Component {
  constructor(props) {
    super(props);
    this.onChangeidCustomer = this.onChangeidCustomer.bind(this);
    this.onChangeidDec = this.onChangeidDec.bind(this);
    this.onChangenameCustomer = this.onChangenameCustomer.bind(this);
    this.onChangescoreLevel = this.onChangescoreLevel.bind(this);
    this.onChangeusedScoreLevel = this.onChangeusedScoreLevel.bind(this);
    this.onChangegenderCustomer = this.onChangegenderCustomer.bind(this);
    this.onChangedateOfBirth = this.onChangedateOfBirth.bind(this);
    this.onChangephoneNumberCustomer = this.onChangephoneNumberCustomer.bind(this);
    this.onChangemailCustomer = this.onChangemailCustomer.bind(this);
    this.onChangeaddressCustomer = this.onChangeaddressCustomer.bind(this);
    this.getCustomer = this.getCustomer.bind(this);
    // this.updatePublished = this.updatePublished.bind(this);
    // this.updateTutorial = this.updateTutorial.bind(this);
    // this.deleteTutorial = this.deleteTutorial.bind(this);

    this.state = {
      currentCustomer: {
        id: null,
        idCustomer: "",
        idDec: "", 
        nameCustomer: "",
        scoreLevel:"",
        usedScoreLevel:"",
        genderCustomer:"",
        dateOfBirth:"",
        phoneNumberCustomer:"",
        mailCustomer:"",
        addressCustomer:""
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getCustomer(this.props.router.params.id);
  }

  onChangeidCustomer(e) {
    const idCustomer = e.target.value;

    this.setState(function(prevState) {
      return {
        currentCustomer: {
          ...prevState.currentCustomer,
          idCustomer: idCustomer
        }
      };
    });
  }

  onChangeidDec(e) {
    const idDec = e.target.value;
    
    this.setState(prevState => ({
      currentCustomer: {
        ...prevState.currentCustomer,
        idDec: idDec
      }
    }));
  }

  onChangenameCustomer(e) {
    const nameCustomer = e.target.value;

    this.setState(function(prevState) {
      return {
        currentCustomer: {
          ...prevState.currentCustomer,
          nameCustomer: nameCustomer
        }
      };
    });
  }

  onChangescoreLevel(e) {
    const scoreLevel = e.target.value;
    
    this.setState(prevState => ({
      currentCustomer: {
        ...prevState.currentCustomer,
        scoreLevel: scoreLevel
      }
    }));
  }

  onChangeusedScoreLevel(e) {
    const usedScoreLevel = e.target.value;

    this.setState(function(prevState) {
      return {
        currentCustomer: {
          ...prevState.currentCustomer,
          usedScoreLevel: usedScoreLevel
        }
      };
    });
  }

  onChangegenderCustomer(e) {
    const genderCustomer = e.target.value;
    
    this.setState(prevState => ({
      currentCustomer: {
        ...prevState.currentCustomer,
        genderCustomer: genderCustomer
      }
    }));
  }

  onChangedateOfBirth(e) {
    const dateOfBirth = e.target.value;

    this.setState(function(prevState) {
      return {
        currentCustomer: {
          ...prevState.currentCustomer,
          dateOfBirth: dateOfBirth
        }
      };
    });
  }

  onChangephoneNumberCustomer(e) {
    const phoneNumberCustomer = e.target.value;
    
    this.setState(prevState => ({
      currentCustomer: {
        ...prevState.currentCustomer,
        phoneNumberCustomer: phoneNumberCustomer
      }
    }));
  }

  onChangemailCustomer(e) {
    const mailCustomer = e.target.value;

    this.setState(function(prevState) {
      return {
        currentCustomer: {
          ...prevState.currentCustomer,
          mailCustomer: mailCustomer
        }
      };
    });
  }

  onChangeaddressCustomer(e) {
    const addressCustomer = e.target.value;
    
    this.setState(prevState => ({
      currentCustomer: {
        ...prevState.currentCustomer,
        addressCustomer: addressCustomer
      }
    }));
  }

  getCustomer(id) {
    CustomerDataService.get(id)
      .then(response => {
        this.setState({
          currentCustomer: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

//   updatePublished(status) {
//     var data = {
//       id: this.state.currentTutorial.id,
//       title: this.state.currentTutorial.title,
//       description: this.state.currentTutorial.description,
//       published: status
//     };

//     TutorialDataService.update(this.state.currentTutorial.id, data)
//       .then(response => {
//         this.setState(prevState => ({
//           currentTutorial: {
//             ...prevState.currentTutorial,
//             published: status
//           }
//         }));
//         console.log(response.data);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   }

//   updateTutorial() {
//     TutorialDataService.update(
//       this.state.currentTutorial.id,
//       this.state.currentTutorial
//     )
//       .then(response => {
//         console.log(response.data);
//         this.setState({
//           message: "The tutorial was updated successfully!"
//         });
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   }

//   deleteTutorial() {    
//     TutorialDataService.delete(this.state.currentTutorial.id)
//       .then(response => {
//         console.log(response.data);
//         this.props.router.navigate('/tutorials');
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   }

  render() {
    const { currentCustomer } = this.state;

    return (
      <div>
        {currentCustomer ? (
          <div className="edit-form">
            <h4>Customer</h4>
            <form>
              <div className="form-group">
                <label htmlFor="idCustomer">idCustomer</label>
                <input
                  type="text"
                  className="form-control"
                  id="idCustomer"
                  value={currentCustomer.idCustomer}
                  onChange={this.onChangeidCustomer}
                />
              </div>
              <div className="form-group">
                <label htmlFor="idDec">idDec</label>
                <input
                  type="text"
                  className="form-control"
                  id="idDec"
                  value={currentCustomer.idDec}
                  onChange={this.onChangeidDec}
                />
              </div>

              {/* <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentTutorial.published ? "Published" : "Pending"}
              </div> */}
            </form>

            {/* {currentTutorial.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteTutorial}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateTutorial}
            >
              Update
            </button> */}
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Customer);