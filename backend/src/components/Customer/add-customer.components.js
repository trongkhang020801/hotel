import React, { Component } from "react";
import CustomerDataService from "../../services/customer.services";

export default class AddTutorial extends Component {
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
    this.saveCustomer = this.saveCustomer.bind(this);
    this.newCustomer = this.newCustomer.bind(this);

    this.state = {
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
      addressCustomer:"",
      submitted: false
    };
  }

  onChangeidCustomer(e) {
    this.setState({
      idCustomer: e.target.value
    });
  }

  onChangeidDec(e) {
    this.setState({
      idDec: e.target.value
    });
  }

  onChangenameCustomer(e) {
    this.setState({
      nameCustomer: e.target.value
    });
  }

  onChangescoreLevel(e) {
    this.setState({
      scoreLevel: e.target.value
    });
  }

  onChangeusedScoreLevel(e) {
    this.setState({
      usedScoreLevel: e.target.value
    });
  }

  onChangegenderCustomer(e) {
    this.setState({
      genderCustomer: e.target.value
    });
  }

  onChangedateOfBirth(e) {
    this.setState({
      dateOfBirth: e.target.value
    });
  }

  onChangephoneNumberCustomer(e) {
    this.setState({
      phoneNumberCustomer: e.target.value
    });
  }

  onChangemailCustomer(e) {
    this.setState({
      mailCustomer: e.target.value
    });
  }

  onChangeaddressCustomer(e) {
    this.setState({
      addressCustomer: e.target.value
    });
  }

  saveCustomer() {
    var data = {
      idCustomer: this.state.idCustomer,
      idDec: this.state.idDec,
      nameCustomer: this.state.nameCustomer,
      scoreLevel: this.state.scoreLevel,
      usedScoreLevel: this.state.usedScoreLevel,
      genderCustomer: this.state.genderCustomer,
      dateOfBirth: this.state.dateOfBirth,
      phoneNumberCustomer: this.state.phoneNumberCustomer,
      mailCustomer: this.state.mailCustomer,
      addressCustomer: this.state.addressCustomer
    };

    CustomerDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          idCustomer: response.data.idCustomer,
          idDec: response.data.idDec,
          nameCustomer: response.data.nameCustomer,
          scoreLevel: response.data.scoreLevel,
          usedScoreLevel: response.data.usedScoreLevel,
          genderCustomer: response.data.genderCustomer,
          dateOfBirth: response.data.dateOfBirth,
          phoneNumberCustomer: response.data.phoneNumberCustomer,
          mailCustomer: response.data.mailCustomer,
          addressCustomer: response.data.addressCustomer,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newCustomer() {
    this.setState({
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
      addressCustomer:"",

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newCustomer}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="idCustomer">Customer code</label>
              <input
                type="text"
                className="form-control"
                id="idCustomer"
                required
                value={this.state.idCustomer}
                onChange={this.onChangeidCustomer}
                name="idCustomer"
              />
            </div>

            <div className="form-group">
              <label htmlFor="idDec">Dec</label>
              <input
                type="text"
                className="form-control"
                id="idDec"
                required
                value={this.state.idDec}
                onChange={this.onChangeidDec}
                name="idDec"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Customer Name</label>
              <input
                type="text"
                className="form-control"
                id="nameCustomer"
                required
                value={this.state.name}
                onChange={this.onChangenameCustomer}
                name="nameCustomer"
              />
            </div>

            <div className="form-group">
              <label htmlFor="scoreLevel">scoreLevel</label>
              <input
                type="text"
                className="form-control"
                id="scoreLevel"
                required
                value={this.state.scoreLevel}
                onChange={this.onChangescoreLevel}
                name="scoreLevel"
              />
            </div>

            <div className="form-group">
              <label htmlFor="usedScoreLevel">usedScoreLevel</label>
              <input
                type="text"
                className="form-control"
                id="usedScoreLevel"
                required
                value={this.state.usedScoreLevel}
                onChange={this.onChangeusedScoreLevel}
                name="usedScoreLevel"
              />
            </div>

            <div className="form-group">
              <label htmlFor="genderCustomer">genderCustomer</label>
              <input
                type="text"
                className="form-control"
                id="genderCustomer"
                required
                value={this.state.genderCustomer}
                onChange={this.onChangegenderCustomer}
                name="genderCustomer"
              />
            </div>

            <div className="form-group">
              <label htmlFor="dateOfBirth">dateOfBirth</label>
              <input
                type="text"
                className="form-control"
                id="dateOfBirth"
                required
                value={this.state.dateOfBirth}
                onChange={this.onChangedateOfBirth}
                name="dateOfBirth"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumberCustomer">phoneNumberCustomer</label>
              <input
                type="text"
                className="form-control"
                id="phoneNumberCustomer"
                required
                value={this.state.phoneNumberCustomer}
                onChange={this.onChangephoneNumberCustomer}
                name="phoneNumberCustomer"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mailCustomer">mailCustomer</label>
              <input
                type="text"
                className="form-control"
                id="mailCustomer"
                required
                value={this.state.mailCustomer}
                onChange={this.onChangemailCustomer}
                name="mailCustomer"
              />
            </div>

            <div className="form-group">
              <label htmlFor="addressCustomer">addressCustomer</label>
              <input
                type="text"
                className="form-control"
                id="addressCustomer"
                required
                value={this.state.addressCustomer}
                onChange={this.onChangeaddressCustomer}
                name="description"
              />
            </div>
            <br/>
            <button onClick={this.saveCustomer} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}