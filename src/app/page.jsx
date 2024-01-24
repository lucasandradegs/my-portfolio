"use client"

import { Header } from "@/components/Header"
import { Button } from "@/components/Button"
import { Roboto } from "next/font/google"
import { SlideCard } from "@/components/SlideCard"
import styled from "styled-components"

const roboto = Roboto({ weight: '400', style: 'normal', subsets: ['latin'] })

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
  padding: 0 2.4rem;

  padding-top: 18rem;


  .title {
    h4 {
      font-size: 1.8rem;
    }

    h3 {
      margin-top: 2.5rem;
      font-size: 2rem;
    }

    h2 {
      margin-top: 1.2rem;
      font-size: 2.6rem;
      font-weight: bold;
    }

    p {
      text-align: justify;
      margin-top: 3rem;
      font-size: 1.4rem;
      line-height: 1.5rem;
      color: hsla(0,0%,99%,.7);
    }
  }

  .titleButton {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
    

    .buttonArrow {
      margin-top: 4rem;
      width: 15rem;
    }
  }


  .socialMedias {

    display: flex;
    justify-content: center;
    gap: 3rem;

    margin-top: 4rem;

    z-index: -1;

    img {
      padding: 1rem;
      border: none;
      border-radius: 9999px;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;

      backdrop-filter: blur(64px);

      background-color: hsla(0,0%,99%,.1);
    }
  }

  .photo {
    margin-top: 12rem;

    img {
      width: 315px;
      height: 315px;

      border-radius: 50%;
    }

    img:nth-child(2) {
      position: absolute;
      left: 0;
      margin-top: -7rem;
      width: 200px;
      height: 200px;
    }

    img:nth-child(3) {
      position: absolute;
      left: 0;
      margin-top: 20rem;
      width: 200px;
      height: 200px;
      margin-left: 16rem;
    }
  }
`



export default function Home() {
  return (
    <Container>

      <Header />

      <Content id="#home">
        <div className="title">
          <h4 className={roboto.className}>Seja bem vindo(a)!</h4>
          <h3 className={roboto.className}>Me chamo Lucas Andrade</h3>
          <h2 className={roboto.className}>Desenvolvedor FullStack</h2>
          <p className={roboto.className}>Atuo como desenvolvedor web. Minha especialidade é transformar layouts do Figma em projetos reais! Minha área favorita é o FrontEnd, porém o Backend não fica para trás!</p>       
        </div>
        <div className="titleButton">
          <Button className="buttonArrow" title="Entre em contato" />
          <img src="/arrow.webp" alt="" />
        </div>
        <div className="socialMedias">
          <a href="https://github.com/lucasandradegs" target="_blank" rel="noopener noreferrer">
            <img src="/github.svg" alt="meu GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/lucas-andrade-1374b3248/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" alt="meu Linkedin" />
          </a>
          <a href="https://www.instagram.com/lucasandradegs/" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.svg" alt="meu Instragram" />
          </a>
          <a href="https://wa.me/5531984702550" target="_blank" rel="noopener noreferrer">
            <img src="/whatsapp.svg" alt="meu Whatsapp" />
          </a>
        </div>
        <div className="photo">
          <img src="/eu.jpeg" alt="" />
          <img src="/clouds.png" alt="" />
          <img src="/clouds.png" alt="" />
        </div>
      </Content>


      <BackgroundBlur>
        <div className="main-gradient left-0 top-1/2 opacity-100"></div>
        <div className="main-gradient left-0 top-0 opacity-100"></div>
        <div className="main-gradient right-0 top-10"></div>
        <div className="main-gradient left-0 bottom-0"></div>
        {/* <div className="main-gradient left-0 top-1/2"></div>
          <div className="main-gradient right-0 bottom-1/2"></div> */}
      </BackgroundBlur>


    </Container>
  )

}
