"use client"

import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const BackgroundBlur = styled.div`
  .opacity-100 {
    opacity: ${(props) => (props.theme.body === 'rgb(0, 23, 31)' ? '0' : '1')};
  }

  .top-1\/2 {
    top: 50%;
  }

  .top-0 {
    top: 0;
  }
  
  .top-10 {
    top: 2.5rem;
  }

  .right-0 {
    right: 0;
  }

  .left-0 {
    left: 0;
  }

  .bottom-0 {
    bottom: 0;
  }

  .main-gradient {
    position: absolute;
    z-index: -10;
    height: 30rem;
    width: 20rem;
    border-radius: 99.99rem;

    @media (min-width: 768px) {
      width: 30rem;
    }
  }

  .main-gradient {
    background-image: linear-gradient(500deg,#e4b942c8,#ce6eae 47.71%,#ba2f9c 0,#6f71b6d8,#387986,#a4295c);
    filter: blur(20px);
    -webkit-filter: blur(150px);
  }


`

const Content = styled.div`

`

export default function Home() {
  return (
    <Container>

      <Content>
          <div className="title">
            <h2>Olá</h2>
            <p>meu portfolio</p>
          </div>
      </Content>
      
      
      <BackgroundBlur>
          <div className="main-gradient left-0 top-1/2 opacity-100"></div>
          <div className="main-gradient left-0 top-0 opacity-100"></div>
          <div className="main-gradient right-0 top-10"></div>
          <div className="main-gradient left-0 bottom-0"></div>
      </BackgroundBlur>

      
    </Container>
  )

}
