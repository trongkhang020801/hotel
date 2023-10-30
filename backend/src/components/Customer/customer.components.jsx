import React, { Component } from "react";
import CustomerDataService from "../../services/customer.services";
import { withRouter } from '../../common/with-router';

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
    this.updateTutorial = this.updateTutorial.bind(this);
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

  updateTutorial() {
    CustomerDataService.update(
      this.state.currentCustomer.idCustomer,
      this.state.currentCustomer
    )
      .then(response => {
        console.log(response.data);
        // this.setState({
        //   // message: "The tutorial was updated successfully!"
        //   // window.confirm()
        // });
        if (window.confirm("The user was update successfully!")===true)
          {window.location="http://localhost:3000/customer"}
        else
          {window.location="http://localhost:3000/customer"}
    
      })
      .catch(e => {
        console.log(e);
      });
  }

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
              <div className="form-group">
                <label htmlFor="nameCustomer">Name Customer</label>
                <input
                  type="text"
                  className="form-control"
                  id="nameCustomer"
                  value={currentCustomer.nameCustomer}
                  onChange={this.onChangenameCustomer}
                />
              </div>
              <div className="form-group">
                <label htmlFor="scoreLevel">Scroe Level</label>
                <input
                  type="text"
                  className="form-control"
                  id="scoreLevel"
                  value={currentCustomer.scoreLevel}
                  onChange={this.onChangescoreLevel}
                />
              </div>
              <div className="form-group">
                <label htmlFor="usedScoreLevel">Used Score Level usedScoreLevel</label>
                <input
                  type="text"
                  className="form-control"
                  id="usedScoreLevel"
                  value={currentCustomer.usedScoreLevel}
                  onChange={this.onChangeusedScoreLevel}
                />
              </div>
              <div className="form-group">
                <label htmlFor="genderCustomer">Gender genderCustomer</label>
                <input
                  type="text"
                  className="form-control"
                  id="genderCustomer"
                  value={currentCustomer.genderCustomer}
                  onChange={this.onChangegenderCustomer}
                />
              </div>
              <div className="form-group">
                <label htmlFor="dateOfBirth">idCustomer dateOfBirth</label>
                <input
                  type="text"
                  className="form-control"
                  id="dateOfBirth"
                  value={currentCustomer.dateOfBirth}
                  onChange={this.onChangedateOfBirth}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumberCustomer">idDec phoneNumberCustomer</label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumberCustomer"
                  value={currentCustomer.phoneNumberCustomer}
                  onChange={this.onChangephoneNumberCustomer}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mailCustomer">idCustomer mailCustomer</label>
                <input
                  type="text"
                  className="form-control"
                  id="mailCustomer"
                  value={currentCustomer.mailCustomer}
                  onChange={this.onChangemailCustomer}
                />
              </div>
              <div className="form-group">
                <label htmlFor="addressCustomer">idDec addressCustomer</label>
                <input
                  type="text"
                  className="form-control"
                  id="addressCustomer"
                  value={currentCustomer.addressCustomer}
                  onChange={this.onChangeaddressCustomer}
                />
              </div>
            </form>

            
            <button
              type="submit"
              className="btn btn-outline-secondary btnupdate"
              onClick={this.updateTutorial}
            >
              Update
            </button>
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