import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121212;
  padding: 0 12px;
`

export const Login = styled.div`
  background-color: #EAEAEC;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input{
    margin-bottom: 1rem;
    height: 35px;
    border-radius: 4px;
    border: 0;
    padding: 10px;
    font-size: 15px;
    background-color: #FFFF;
  }

  a{
    margin: 1.5rem 0;
    color: #000;
    cursor: pointer;
  }
`

export const LoginArea = styled.div`
  background-color: #181c2e;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const LoginForm = styled.div`
  margin-top: 1.5rem;
  width: 90%;
  display: flex;
  flex-direction: column;

  h1{
    text-align: center;
    margin-bottom: 1rem;
    color: #181c2e;
  }

  button{
    height: 35px;
    border: 0;
    border-radius: 4px;
    background-color: #181c2e;
    color: #FFF;
    font-size: 1.3rem;
  }
`

