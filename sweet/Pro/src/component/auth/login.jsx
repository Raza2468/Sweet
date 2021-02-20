const url = 'http://localhost:3001'
import axios from "axios"
// import { Redirect, useHistory } from "react-router-dom";

import Dashboard from '../Dashboard'


function Cheak() {

    // const history = useHistory();

    axios({
        method: 'post',
        url: url + '/auth/login',
        data: {
            email: document.getElementById('emaillog').value,
            password: document.getElementById('passwordlog').value
        }
    }).then((response) => {
        if (response.data.status === 200) {
            alert(response.data.message)
            console.log(response);
            // history.push("/");

        } else {
            alert(response.data.message);
            // history.push("/");
            console.log(response);
        }
    }).catch((error) => {
        console.log(error);
    });
}

function Login() {
    // const history = useHistory();
    return (
        <div>
         
            <h1>Login</h1>
             Your email
            <input type="text" id="emaillog" />
            <br />
             Your password
            <input type="password" id="passwordlog" />
            <button onClick={Cheak}>Login</button>
         </div>
    )
}

export default Login

// email: document.getElementById('emaillog').value,
//             password: document.getElementById('passwordlog').value
//         }
//     }).then((response) => {
//         if (response.data.status === 200) {
//             alert(response.data.message)
//             // console.log(res.data.message)
//         } else {
//             alert(response.data.message);
//             // console.log(response.data.message)
//             // console.log(res)
//         }
//     }).catch((error) => {
//         console.log("fsjkdf" + error.message)
//         console.log(error);
//     });
// }

// function Login() {
//     return (
//         <div>
//             <h1>Login</h1>
//             Your email
//             <input type="text" id="emaillog" />
//             <br />
//             Your password
//             <input type="password" id="passwordlog" />
//             <button onClick={cheak}>Login</button>


//         </div>
//     )
// }

// export default Login