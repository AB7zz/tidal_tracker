import React from 'react'
import { useNavigate } from 'react-router-dom'

const logouts = () => {
    localStorage.setItem('login', false)
    const navigate = useNavigate()
    navigate('/home')
}
const Logout = () => {
    
    React.useEffect(() => {
        logouts()
    })
    return (
    <div>Logout</div>
    )
}

export default Logout