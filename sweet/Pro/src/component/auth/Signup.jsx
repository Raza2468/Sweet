import React, { useState, useEffect } from "react";

import axios from "axios";



const url = 'http://localhost:3001'
function submit() {
    axios({
        method: 'post',
        url: url + '/auth/signup',
        data: {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }
    }).then((response) => {
        if (response.data.status === 200) {
            alert(response.data.message)
        } else {
            alert(response.data.message);
        }
    }).catch((error) => {
        console.log(error);
    });

}


function Signup() {

    




    return (
        <div >

            <p className="h4 text-center mb-4">Sign up</p>
                 Your name
            <input type="text" id="name" />
            <br />
                Your email

            <input type="text" id="email" />
            <br />
                Your password
            <input type="password" id="password" />
            <button onClick={submit}>Summit</button>

        </div>
    );

}

export default Signup;