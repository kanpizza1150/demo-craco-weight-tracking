import Styled from 'styled-components'

export const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  min-height:100vh;
  min-width:100vw;
  padding:20px;
  background-color:black;
  color:white;
  .header{
      text-transform: uppercase;
      color:white;
      text-align:center;
  }
`
export const BodyWrapper = Styled.div`
    display:flex;
    flex-direction: column;
`
