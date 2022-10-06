import React, { useContext, useState } from "react";
import {
  AuthBody,
  AuthButton,
  AuthContainer,
  AuthElement,
  AuthForm,
  AuthGrid,
  AuthGridLeft,
  AuthLabel,
  InputGroupWithIcon,
  InputGroupIcon,
  InputGroup,
  InputSpecial,
  AuthTitle,
  AuthHeader,
  RememberItem,
  AuthGroup,
  AuthIcon,
  SignupTerms,
  AuthError,
  AuthChecks,
} from "./AuthElement";
import UserIcon from "./../../assets/auth/UserIcon";
import PasswordClose from "../../assets/auth/PasswordClose";
import Password from "../../assets/auth/Password";
import CheckBox from "../Common/CheckBox";
import Email from "../../assets/auth/Email";
import FacebookIcon from "../../assets/auth/FacebookIcon";
import TwitterIcon from "../../assets/auth/TwitterIcon";
import Google from "../../assets/auth/Google";
import Registration from "../../assets/auth/Registration";
import Or from "../../assets/auth/Or";
import Call from "../../assets/footer/call";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import Checks from "../../assets/auth/Checks";
import Eye from "../../assets/auth/Eye";

function Signup() {
  const [checked, setChecked] = useState(false);
  const [open, setOpened] = useState(false);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const username = name.toLocaleLowerCase().replaceAll(/\s/g, "");
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const registerParams = {
    username,
    email,
    password,
    confirm_password,
    phone_number,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!registerParams) {
      console.log("Please fill all fields");
      setError(true);
      toast.error("Please fill all fields");
    } else if (password !== confirm_password) {
      setPasswordError(true);
      toast.error("Password does not match");
    } else {
      register({ username, email, password, confirm_password, phone_number });
    }
  };

  return (
    <AuthElement>
      <AuthContainer>
        <AuthGridLeft>
          <Registration />
        </AuthGridLeft>
        <AuthGrid>
          <AuthBody>
            <AuthTitle>Register</AuthTitle>
            <AuthForm>
              <InputGroup>
                {error ? (
                  <AuthError>Please fill the fileds</AuthError>
                ) : (
                  <AuthLabel>FuLL NAMES</AuthLabel>
                )}
                <InputGroupWithIcon>
                  <InputGroupIcon>
                    <UserIcon />
                  </InputGroupIcon>
                  <InputSpecial
                    type="text"
                    value={name}
                    placeholder="Enter your names"
                    onChange={(e) => setName(e.target.value)}
                  />
                </InputGroupWithIcon>
              </InputGroup>
              <InputGroup>
                {error && !phone_number ? (
                  <AuthError>Phone number cannot be empty</AuthError>
                ) : (
                  <AuthLabel>Phonenumber</AuthLabel>
                )}
                <InputGroupWithIcon>
                  <InputGroupIcon>
                    <Call />
                  </InputGroupIcon>
                  <InputSpecial
                    type="tel"
                    value={phone_number}
                    required
                    min={10}
                    max={10}
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    placeholder="Enter your phone number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </InputGroupWithIcon>
                <AuthChecks>
                  <Checks />
                  o-9 characters
                </AuthChecks>
              </InputGroup>
              <InputGroup>
                {error && !email ? (
                  <AuthError>a valid email is required</AuthError>
                ) : (
                  <AuthLabel>Email</AuthLabel>
                )}
                <InputGroupWithIcon>
                  <InputGroupIcon>
                    <Email />
                  </InputGroupIcon>
                  <InputSpecial
                    type="email"
                    value={email}
                    pattern="/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroupWithIcon>
              </InputGroup>

              <InputGroup>
                {passwordError && !password ? (
                  <AuthError>Password does not match</AuthError>
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
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputGroupIcon onClick={() => setOpened(!open)}>
                    {open ? <PasswordClose /> : <Eye />}
                  </InputGroupIcon>
                </InputGroupWithIcon>
                <AuthChecks>
                  <Checks />
                  Password can’t be blank
                </AuthChecks>
                <AuthChecks>
                  <Checks />
                  Password must contain a number and an Uppercase letter.
                </AuthChecks>
              </InputGroup>

              <InputGroup>
                {error && !confirm_password ? (
                  <AuthError>password should match</AuthError>
                ) : (
                  <AuthLabel>Confirm Password</AuthLabel>
                )}
                <InputGroupWithIcon>
                  <InputGroupIcon>
                    <Password />
                  </InputGroupIcon>
                  <InputSpecial
                    type={show ? "text" : "password"}
                    value={confirm_password}
                    placeholder="Enter your password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <InputGroupIcon onClick={() => setShow(!show)}>
                    {show ? <PasswordClose /> : <Eye />}
                  </InputGroupIcon>
                </InputGroupWithIcon>
              </InputGroup>

              <InputGroup>
                <SignupTerms>
                  <RememberItem onClick={handleCheckboxChange}>
                    <CheckBox
                      type="checkbox"
                      value={checked}
                      onChange={handleCheckboxChange}
                    />
                  </RememberItem>

                  <AuthHeader
                    style={{
                      textAlign: "left",
                      alignSelf: "center",
                      fontSize: "14px",
                    }}
                  >
                    I accept the Terms Of Service and Privacy Policy.
                  </AuthHeader>
                </SignupTerms>
              </InputGroup>
              <AuthButton onClick={(e) => handleSubmit(e)}>Register</AuthButton>
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
              <AuthHeader onClick={(e) => handleNavigate(e)}>
                Already Registered ?
              </AuthHeader>
            </AuthForm>
          </AuthBody>
        </AuthGrid>
      </AuthContainer>
    </AuthElement>
  );
}

export default Signup;
