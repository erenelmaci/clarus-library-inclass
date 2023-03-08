import styled from "styled-components"
import Flex from "../../styles/Flex"

export const DetailContainer = styled(Flex)`
  flex-direction: column;
  padding: 1rem;
`
export const DetailTitle = styled.h1`
  text-align: center;
  margin: 25px;
`

export const DetailImg = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
  img {
    border-radius: 1rem;
  }
`

export const Description = styled.div`
  min-width: 40%;
  text-align: justify;
  font-size: 1.5rem;
  margin: 1rem 2rem;
`
