
import { useNavigate } from "react-router-dom"


const Account = ({user, setUser, setToken }) => {
    const navigate = useNavigate()
    
    const logout = () => {
        window.localStorage.removeItem('token');
        setToken(null)
        setUser({})
        navigate('/')
    }
    if(!user.books){
        return null
    }
    
    return(
        <div>
            <h1>Account</h1>
            <button onClick={() => {logout()}}>Logout</button>
            <hr/>
            <h2>Email: {user.email}</h2>
            <h4>This could be a good place to show checked out books...</h4>
            
            
           
        </div>
    )
}

export default Account