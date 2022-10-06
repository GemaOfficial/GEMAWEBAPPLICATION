import React from "react";
import {
  AuthBody,
  AuthButton,
  AuthContainer,
  AuthElement,
  AuthForm,
  AuthGrid,
  AuthGridLeft,
  AuthImage,
  AuthLabel,
  InputGroupWithIcon,
  InputGroupIcon,
  InputGroup,
  InputSpecial,
  AuthTitle,
  RememberGrid,
  RememberItem,
  RememberLabel,
  AuthHeader,
  AuthGroup,
  AuthIcon,
  AuthError,
} from "./AuthElement";
import LoginSvg from "../../assets/auth/login.svg";
import PasswordClose from "../../assets/auth/PasswordClose";
import Password from "../../assets/auth/Password";
import CheckBox from "../Common/CheckBox";
import FacebookIcon from "../../assets/auth/FacebookIcon";
import TwitterIcon from "../../assets/auth/TwitterIcon";
import Google from "../../assets/auth/Google";
import { useNavigate } from "react-router-dom";
import Email from "../../assets/auth/Email";
import Or from "../../assets/auth/Or";
import { useState } from "react";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Eye from "../../assets/auth/Eye";

function Login() {
  const [checked, setChecked] = useState(false);
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const { loginUser } = useContext(AuthContext);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  const navigate = useNavigate();
  const navigateToSignup = (e) => {
    e.preventDefault();
    navigate("/signup");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone_number === "" || password === "") {
      setError(true);
      toast.error("Please fill all the fields");
    }
    loginUser({ password, phone_number });
  };
  return (
    <AuthElement>
      <AuthContainer>
        <AuthGridLeft>
          <AuthImage src={LoginSvg} alt="login" />
        </AuthGridLeft>
        <AuthGrid>
          <AuthBody>
            <AuthTitle>Login</AuthTitle>
            <AuthForm>
              <InputGroup>
                {error && !phone_number ? (
                  <AuthError>Please Enter Phone number</AuthError>
                ) : (
                  <AuthLabel>Phone</AuthLabel>
                )}
                <InputGroupWithIcon>
                  <InputGroupIcon>
                    <Email />
                  </InputGroupIcon>
                  <InputSpecial
                    type="tel"
                    value={phone_number}
                    placeholder="Enter your phone number"
                    autoComplete="on"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </InputGroupWithIcon>
              </InputGroup>

              <InputGroup>
                {error && !password ? (
                  <AuthError>Please Enter password</AuthError>
                ) : (
                  <AuthLabel>Password</AuthLabel>
                )}
                <InputGroupWithIcon>
                  <InputGroupIcon>
                    <Password />
                  </InputGroupIcon>
                  <InputSpecial
                    type={open ? "text" : "password"}
                    value={password}
                    required
                    minLength="8"
                    autoComplete="on"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputGroupIcon onClick={() => setOpen(!open)}>
                    {open ? <PasswordClose /> : <Eye />}
                  </InputGroupIcon>
                </InputGroupWithIcon>
              </InputGroup>

              <RememberGrid>
                <RememberItem onClick={handleCheckboxChange}>
                  <CheckBox
                    type="checkbox"
                    value={checked}
                    onChange={handleCheckboxChange}
                  />
                  <RememberLabel>Remember me</RememberLabel>
                </RememberItem>
                <RememberItem>
                  <AuthHeader>Forgot password?</AuthHeader>
                </RememberItem>
              </RememberGrid>
              <AuthButton onClick={(e) => handleSubmit(e)}>Login</AuthButton>
              <AuthIcon>
                <Or />
              </AuthIcon>
              <AuthGroup>
                <AuthIcon>
                  <FacebookIcon />
                </AuthIcon>
                <AuthIcon>
                  <TwitterIcon />
                </AuthIcon>
                <AuthIcon>
                  <Google />
                </AuthIcon>
              </AuthGroup>
              <AuthHeader onClick={(e) => navigateToSignup(e)}>
                Don't have account ?
              </AuthHeader>
            </AuthForm>
          </AuthBody>
        </AuthGrid>
      </AuthContainer>
    </AuthElement>
  );
}

export default Login;
