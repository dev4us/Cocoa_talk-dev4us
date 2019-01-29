import React from "react";
import SetPasswordPresenter from "./SetPasswordPresenter";

class SetPasswordContainer extends React.Component {
  public state = {
    setPassword: "",
    confirmPassword: "",
    passwordValidation: false
  };
  public render() {
    const { passwordValidation } = this.state;
    return (
      <SetPasswordPresenter
        onInputchange={this.onInputchange}
        passwordValidation={passwordValidation}
      />
    );
  }
  public onInputchange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const {
      target: { name, value }
    } = event;

    const passwordRegExp = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;

    this.setState(
      {
        [name]: value
      },
      () => {
        const { setPassword, confirmPassword } = this.state;

        if (
          setPassword.match(passwordRegExp) != null &&
          setPassword === confirmPassword
        ) {
          this.setState({
            passwordValidation: true
          });
        } else {
          this.setState({
            passwordValidation: false
          });
        }
      }
    );
  };
}

export default SetPasswordContainer;