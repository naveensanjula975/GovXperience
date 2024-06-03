import React from "react";
import "./SignUp.css";
import "@fontsource/lato";

function SignUp() {
  return (
    <div id="hello2">
    <div id="register"><p>Register</p></div>
    <div id="begin">Begin your TransferEase journey by registering with us</div>

    <div id="FN">First Name</div>
    <div><div>
      <input type="text" id="in11" required/>
        <div class="labelline11">Ex: 98653245V</div>
        </div></div>

    <div id="email">Email</div>
    <div><div>
    <input type="text" id="in2" required/>
        <div class="labelline2">Ex: name@gmail.com</div>
      </div></div>

    <div id="password">Password</div>
    <div><div>
      <input type="text" id="in3" required/>
      <div class="labelline3">Enter Password</div>
      </div></div>

    <div id="forget"><a href="www.abc.com">Forget Password??</a></div>
    <div><button id="buto1">Login</button></div>
    <div>
      <div><a id="dont" href="www.def.com">Don't Have an Account?</a></div>
      <div><a id="create" href="www.ghi.com">Create Account</a></div>
    </div>
    </div>
  );
}

export default SignUp;
