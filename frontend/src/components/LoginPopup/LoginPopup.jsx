import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const LoginPopup = ({setShowLogin}) => {

  const {url,setToken} = useContext(StoreContext)

    const [currState, setCurrentState] = React.useState("Iniciar Sesión")
    const [data,setData] = useState({
      name:"",
      email:"",
      password:""
    })

    const onChangeHandler = () => {
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
    }

    const onLogin = async (event) => {
      event.preventDefault()
      let newUrl = url;

      if (currState==="Iniciar Sesión") {
        newUrl += "/api/user/login"
      }
      else{
        newUrl += "/api/user/register"
      }

      const response = await axios.post(newUrl,data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setShowLogin(false)
      }
      else{
        alert(response.data.message)
      }
    }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Iniciar Sesión"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Tu nombre' required/>}
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Tu email' required/>
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Contraseña' required/>
        </div>
        <button type='submit'>{currState==="Registrarse"?"Crear Cuenta":"Iniciar Sesión"}</button>
        <div className="login-popup-condition">
            <input type='checkbox' required/>
            <p>Al continuar, acepto las condiciones de uso y la política de privacidad.</p>
        </div>
        {currState==="Iniciar Sesión"
        ?<p>Crear una nueva cuenta? <span onClick={()=>setCurrentState("Registrarse")}>Pulse aquí</span></p>
        :<p>Ya tienes una cuenta? <span onClick={()=>setCurrentState("Iniciar Sesión")}>Inicia Sesión aquí</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup
