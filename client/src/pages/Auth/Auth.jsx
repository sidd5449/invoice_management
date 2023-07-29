import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import './Auth.scss';
import axios from 'axios';
import { toast } from 'react-toastify';

const Auth = () => {

  const location = useLocation();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [passwordConf, setpasswordConf] = useState();
  const [phone, setphone] = useState();
  const [address, setaddress] = useState();
  const [businessName, setbusinessName] = useState();

  // console.log(email, businessName, phone);

  const loginInputs = [
    {
      name:'Email Address',
      type: 'text',
      stateName: 'email',
    },
    {
      name:'Password',
      type: 'password',
      stateName: 'password',
    },
  ];
  const signupInputs = [
    {
      name:'Name',
      type:'text',
      stateName: 'name',
    },
    {
      name:'Email Address',
      type:'text',
      stateName: 'email',
    },
    {
      name:'Password',
      type:'password',
      stateName: 'password',
    },
    {
      name:'Confirm Password',
      type:'password',
      stateName: 'passwordConf',
    },
    {
      name:'Business Name',
      type:'text',
      stateName: 'businessName',
    },
    {
      name:'Phone Number',
      type:'text',
      stateName: 'phone',
    },
    {
      name:'Address',
      type:'text',
      stateName: 'address',
    },
  ];

  const loginData = {
    email: email,
    password: password,
    
  }
  const signupData = {
    email: email,
    password: password,
    businessName: businessName,
    name:name,
    phoneNo: phone,
    address: address,
    
  }

  const isRegistered = new URLSearchParams(location.search).get("registered");
  let quote;
  let color;
  let inputs;
  let title;
  let formData;
  let urlStr;
  let msgStr;
  if(isRegistered === 'true'){
    quote = "Welcome back! We're glad to see you again.";
    color = "#003B02";
    inputs = loginInputs;
    title = "Login";
    msgStr = 'Successfully Logged In!!'
    formData = loginData;
    urlStr = 'http://localhost:8080/login';
  }
  else{
    quote = "Sign up now and discover a new way of INVOICING!";
    color = "#070037";
    inputs = signupInputs;
    title = "Sign Up";
    msgStr = 'Successfully Signed Up!!'
    formData = signupData;
    urlStr = 'http://localhost:8080/registerUser';
  }

  const handleSubmit = () => {
    axios.post(urlStr, formData).then(() => {
      toast.success(msgStr, {
        position: toast.POSITION.TOP_RIGHT
      })
      window.location.href = `/generateInvoice`;
    }).catch((error) => {
      toast.error("Please check the credentials!", {
        position: toast.POSITION.TOP_RIGHT
      })
      console.log(error);
    })
  }
  return (
    <div className="app__auth">
        <div className="app__auth-left" style={{backgroundColor: color}}>
          <h2>SureInvoice</h2>
          <p className='quote'>{quote}</p>
        </div>
        <div className="app__auth-right">
          <h1>{title}</h1>
          <div className="app__auth-right-inputs">
            {inputs.map((item) => (
              <input type={item.type} placeholder={item.name} onChange={(e) => {eval(`set${item.stateName}(e.target.value)`)}} />
            ))}
          </div>
          <button onClick={handleSubmit} >{title}</button>
        </div>
    </div>
  )
}

export default Auth