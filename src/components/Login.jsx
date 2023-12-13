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

        const user = {
            email,
            password
        }
        try {
            
            const {data} = await axios.post('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', user)
            window.localStorage.setItem('token', data.token);
            setToken(data.token)
            navigate('/')
        } catch (error) {
            setError(error.response.data.message)
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input 
                        type="text"
                        value = {email}
                        onChange={(e) => {setEmail(e.target.value)}}
                    />
                </label>
                <label>
                    Password:
                    <input 
                        type="text"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
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