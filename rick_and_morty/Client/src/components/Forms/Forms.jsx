import { useState } from "react";
import Validate from "./validation";
import Forms from "./Forms.module.css";

export default function ({ login }) {
    const[ errors, setErrors] = useState({});
    
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) =>{
     setUserData({...userData, [event.target.name]: event.target.value})
     setErrors(Validate({...userData, [event.target.name]: event.target.value}))

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }
 
return (
    <form onSubmit={handleSubmit} className={Forms.DivLogin} >
        <div className={Forms.DivLogin2}>
        <input className={Forms.DivEmail} placeholder="Email" type="email" name="email" value={userData.email}  onChange={handleChange} />
        {errors.email ? <p className={Forms.DivError} >{errors.email}</p> : ''}
        
        <input className={Forms.DivPassword} type="text" name="password" value={userData.password}  onChange={handleChange} placeholder="Password"/>
        {errors.password ? <p className={Forms.DivError} >{errors.password}</p> : ''}
        
        <button className={Forms.DivSubmit} >Login</button>
        </div>
    </form>
);
}