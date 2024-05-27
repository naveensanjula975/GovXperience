import React from "react";
import "./Login.css";
import "@fontsource/lato";
import icon from "./icon6.png";

function Login() {
  return (
    <div id="hello">
      <div id="welcome"><p>Welcome Back</p></div>
      <div id="please">Please Enter Your Email Address & Password</div>
      <div id="NIC">NIC</div>
      <div id="box1"><div id="example1">Ex: 98653245v</div></div>
      <div id="email">Email</div>
      <div id="box2"><div id="example2">Ex: name@gmail.com</div></div>
      <div id="password">Password</div>
      <div id="box3"><div id="example3">Enter Password<img src={icon} className="img" /></div></div>
      <div id="forget"><a href="www.abc.com">Forget Password??</a></div>
      <div><button id="buto1">Login</button></div>
      <div>
        <div><a id="dont" href="www.def.com">Don't Have an Account?</a></div>
        <div><a id="create" href="www.ghi.com">Create Account</a></div>
      </div>
      </div>
  );
}

export default Login;
