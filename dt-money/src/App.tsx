import styled from 'styled-components'
import {GlobalStyle} from './styles/global';


const Title = styled.h1`
  color: red;
  font-size: 64px;
`

export default function App() {
  return (
    <div>
      <Title>coe galera</Title>
      <GlobalStyle />
    </div>
  );
}
