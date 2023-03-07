import React from 'react'
import { Header, LoginContainer, StyledForm, StyledInput, FormContainer, StyledButton } from './Login.style'

const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <Header>Login Here</Header>
        <StyledForm>
          <StyledInput type="text" placeholder="Username"/>
          <StyledInput type="password" placeholder="Password"/>
          <StyledButton type="submit">
            Login
          </StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  )
}

export default Login