import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()
    const logouts = () => {
        localStorage.setItem('login', 0)
        navigate('/home')
    }
    
    React.useEffect(() => {
        logouts()
    })
    return (
    <div>Logout</div>
    )
}

export default Logout