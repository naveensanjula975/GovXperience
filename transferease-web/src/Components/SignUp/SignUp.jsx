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
        <div class="labelline11">Ex: Nimal</div>
        </div></div>

    <div id="LN">Last Name</div>
    <div><div>
    <input type="text" id="in22" required/>
        <div class="labelline22">Ex: Perera</div>
      </div></div>

    <div id="YE">Your Email</div>
    <div><div>
      <input type="text" id="in33" required/>
      <div class="labelline33">Ex: nimal@gmail.com</div>
      </div></div>

      <div id="YN">Your NIC</div>
    <div><div>
      <input type="text" id="in44" required/>
      <div class="labelline44">Ex: 994589652v</div>
      </div></div>

      <div id="PW">Password</div>
    <div><div>
      <input type="text" id="in55" required/>
      <div class="labelline55">Enter Password</div>
      </div></div>

      <div id="CP">Confirm Password</div>
    <div><div>
      <input type="text" id="in66" required/>
      <div class="labelline66">Confirm Password</div>
      </div></div>

      <div id="YA">Your Address</div>
    <div><div>
      <input type="text" id="in77" required/>
      <div class="labelline77">Your Address</div>
      </div></div>


    <div id="frgt">By creating an account, you agree to our Terms & Conditions</div>    
    
    <div><button id="buto2">Register</button></div>
    </div>
  );
}

export default SignUp;
