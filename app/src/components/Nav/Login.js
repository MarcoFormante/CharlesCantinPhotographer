import React,{useState} from 'react'
import styled, { ThemeProvider } from 'styled-components'
import store from '../store'
import { loginAction } from '../reducers/loginReducer'


const Login = ({onClick}) => {
  
  const [isLogin, setIsLogin] = useState(false);
  store.subscribe(()=> console.log(store.getState()))
  const handleLogin = () => {
    setIsLogin(!isLogin)
    onClick()
    loginAction(store) 
  }
 
  const theme = {
    isLogin: isLogin
 }
  
  return (
    <ThemeProvider theme={theme}>
      <LoginContainer className='login' onClick={handleLogin}>
        {isLogin ? 'Logout' : "Login"}
      </LoginContainer>
      </ThemeProvider>
   
  )
}

export default Login


const LoginContainer = styled.span`
   color: ${props => props.theme.isLogin ? 'red' : '#D9D9D9' };
    cursor:pointer;
    width:50px;
    heigth:50px;
    align-self:center;
    text-align:center;

`