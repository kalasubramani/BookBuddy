import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = ({setToken}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("login page submit");
        const user = {
            email,
            password
        }
        try {                     
            const {data} = await axios.post('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', user)
            // const response = await axios.post('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', user)
            window.localStorage.setItem('token', data.token);
            console.log("login response ",data)
            setToken(data.token)
            navigate('/')
        } catch (error) {
          console.log("login error ",error)
            setError(error.response.data.message)
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input 
                        type="email"
                        value = {email}
                        onChange={(e) => {setEmail(e.target.value)}}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                        required
                    />
                </label>
                <button type="submit">Login</button>
            </form>
            {
                error ? <p>{error}</p> : null
            }
        </div>
    )

}

export default Login