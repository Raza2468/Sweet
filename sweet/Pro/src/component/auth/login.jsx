import axios from "axios"
const url = 'http://localhost:3001'

function cheak() {
    axios({
        method: 'post',
        url: url + '/auth/login',
        data: {

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

function Login() {
    return (
        <div>
            <h1>Login</h1>
            Your email
            <input type="text" id="email" />
            <br />
            Your password
            <input type="password" id="password" />
            <button onClick={cheak}>Login</button>


        </div>
    )
}

export default Login