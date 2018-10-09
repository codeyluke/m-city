import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import FormField from "../../Utils/FormFields";
import { validate } from "../../Utils/Misc";
import { firebasePromotions } from "../../../Firebase";

class Enroll extends Component {
  state = {
    formError: false,
    formSucess: "",
    formData: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email",
          type: "email",
          placeholder: "Enter your email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ""
      }
    }
  };

  resetFormSucess = type => {
    const newFormData = { ...this.state.formData };

    for (let key in newFormData) {
      newFormData[key].value = "";
      newFormData[key].valid = false;
      newFormData[key].validationMessage = "";
    }

    this.setState({
      formError: false,
      formData: newFormData,
      formSucess: type ? "Congratulation" : "Already on the database"
    });

    this.sucessMessage();
  };

  updateForm = element => {
    const newFormData = { ...this.state.formData };
    const newElement = { ...newFormData[element.id] };
    newElement.value = element.e.target.value;

    let validData = validate(newElement);

    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormData[element.id] = newElement;

    this.setState({
      formError: false,
      formData: newFormData
    });
  };

  sucessMessage = () => {
    setTimeout(() => {
      this.setState({
        formSucess: ""
      });
    }, 4000);
  };

  submitForm = e => {
    e.preventDefault();
    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;

      formIsValid = this.state.formData[key].valid && formIsValid;
    }

    if (formIsValid) {
      firebasePromotions
        .orderByChild("email")
        .equalTo(dataToSubmit.email)
        .once("value")
        .then(snapshot => {
          if (snapshot.val() === null) {
            firebasePromotions.push(dataToSubmit);
            this.resetFormSucess(true);
          } else {
            this.resetFormSucess(false);
          }
        });
    } else {
      this.setState({
        formError: true
      });
    }
  };

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={e => this.submitForm(e)}>
            <div className="enroll_title">Enter your email</div>
            <div className="enroll_input">
              <FormField
                id={"email"}
                formData={this.state.formData.email}
                change={element => this.updateForm(element)}
              />
              {this.state.formError ? (
                <div className="error_label">
                  Something is wrong, try again.
                </div>
              ) : null}
              <div className="success_label">{this.state.formSucess}</div>
              <button onClick={e => this.submitForm(e)}>Enroll</button>
              <div className="enroll_discl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
