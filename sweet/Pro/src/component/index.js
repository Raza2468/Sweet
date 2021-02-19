// import React, { useState, useEffect } from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
// import './signup.css'
// import axios from "axios";

// const url = 'http://localhost:5000'
// function Signup() {
//     const [email, setEmail] = useState('');
//     const [errmessage, setErrmessage] = useState('');


//     useEffect(() => {
//         axios({
//             method: 'post',
//             url: url + '/auth/validemail',
//             data: {
//                 email: email
//             }, withCredentials: true
//         }).then((response) => {
//             if (response.data.status === 200) {
//                 if (response.data.isFound) {
//                     setErrmessage("already exit")
//                 }
//                 else{
//                     setErrmessage("Email is available")
//                 }
//             } else {
//                 alert(response.data.message);
//             }
//         }).catch((error) => {
//             console.log(error);
//         });
//     }, [email])

//     function hanldsubmit(event) {
//         event.preventDefault();
//         axios({
//             method: 'post',
//             url: url + '/auth/signup',
//             data: {
//                 name:document.getElementById('name').value,
//                 email:email,
//                 phone:document.getElementById('phone').value,
//                 password:document.getElementById('password').value
//             }, withCredentials: true
//         }).then((response) => {
//             if (response.data.status === 200) {
//                 alert(response.data.message)
//             } else {
//                 alert(response.data.message);
//             }
//         }).catch((error) => {
//             console.log(error);
//         });

//     }




//     return (
//         <div className="center">
//             <MDBContainer>
//                 <MDBRow className="rowcenter">
//                     <MDBCol md="6">
//                         <form className="formcenter" onSubmit={hanldsubmit}>
//                             <p className="h4 text-center mb-4">Sign up</p>
//                             <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
//                                 Your name
//                              </label>
//                             <input type="text" className="form-control" required id="name"/>
//                             <br />
//                             <label htmlFor="defaultFormRegisterEmailEx" className="grey-text" >
//                                 Your email
//                             </label>
//                             <input type="email" className="form-control" required onChange={(e) => setEmail(e.target.value)}  />
//                             <br />
//                             {errmessage}


//                             <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
//                                 Phone
//                             </label>
//                             <input type="text" className="form-control" required id="phone" />
//                             <br />
//                             <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text" >
//                                 Your password
//                             </label>
//                             <input type="password" className="form-control" required  id="password"/>
//                             <div className="text-center mt-4">
//                                 <MDBBtn color="unique" type="submit">
//                                     Register
//                                 </MDBBtn>
//                             </div>
//                         </form>
//                     </MDBCol>
//                 </MDBRow>
//             </MDBContainer>
//         </div>
// );
    
// }

// export default Signup;