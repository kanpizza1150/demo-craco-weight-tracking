import Styled from 'styled-components'

export const FormWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width:500px;
`
export const Row = Styled.div`
  display: grid;
  grid-template-columns: 150px 150px;
  margin: 5px 0;
  align-items:center;
  .label{

  }
  .input{
      width:100%;
  }
`
