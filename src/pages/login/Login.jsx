import React from "react"
import { useNavigate } from "react-router-dom"
import {
  Header,
  LoginContainer,
  StyledForm,
  StyledInput,
  FormContainer,
  StyledButton,
} from "./Login.style"

const Login = ({ setCurrentUser }) => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setCurrentUser("admin")
    sessionStorage.setItem("user", "admin")
    navigate(-1)
  }
  return (
    <LoginContainer>
      <FormContainer>
        <Header>Login Here</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="Username" required />
          <StyledInput type="password" placeholder="Password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  )
}

export default Login
