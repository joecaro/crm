import styled from 'styled-components'

export const ContentContainer = styled.section`
    width: 60vw;
    height: 100vh;
    margin: auto;
    transition: .4s;
    overflow-x: visible;
    @media (max-width: 990px) {
        width: 50vw
  }
    @media (max-width: 768px) {
        width: 80vw
  }
`