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

  .HelloTitle {
      position: absolute;
      left: -10rem;
      top: 2rem;
      transform: rotate(40deg);


      z-index: -10;
      width: 31.5rem;
      height: 31.5rem;
    }


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
      margin-top: 3.5rem;
      font-size: 1.4rem;
      line-height: 2.5rem;
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
    margin-top: 6rem;
    text-align: center;

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

const About = styled.div`
  padding: 0 2.4rem;

  margin-top: 5rem;

  .title {
    text-align: center;

    border-bottom-width: .2rem;
    border-bottom-style: solid;
    border-bottom-color: ${(props) => (props.theme.body === 'rgb(0, 23, 31)' ? '#fff' : '#000')};
  }

  h2 {
    font-size: 3rem;
    text-align: center;
    font-weight: 800;
    color: ${(props) => (props.theme.body === 'rgb(0, 23, 31)' ? 'hsla(0,0%,99%,.8)' : 'rgb(213 41 166)')}; 
    letter-spacing: .2rem;
  }

  img {
    margin-top: 3rem;
    width: 31.5rem;
    height: 31.5rem;
  }

  p {
    text-align: justify;
    font-size: 1.6rem;
    line-height: 2.5rem;
    color: ${(props) => (props.theme.body === 'rgb(0, 23, 31)' ? 'rgb(153, 162, 165)' : 'rgba(36,43,51,.7)')}; 
    margin-bottom: 2rem;
  }

  span {
    font-weight: 600;
    color: ${(props) => (props.theme.body === 'rgb(0, 23, 31)' ? 'hsla(0,0%,99%,.8)' : 'rgb(213 41 166)')}; 
  }

  .contactSection {
    img {
      width: 2rem;
      height: 2rem;
    }

    h4 {
        font-size: 1.4rem;
        margin-top: 3rem;
        color: ${(props) => (props.theme.body === 'rgb(0, 23, 31)' ? 'rgb(153 162 165)' : 'rgba(36,43,51,.7)')}; 
      }

    .locationSection {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .phoneSection {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .mailSection {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }

`

const Separator = styled.div`
position: relative;
    margin-top: 5rem;
    height: 7rem;
    background-color: rgba(213,41,166,.1);
    transform: matrix(1, -0.0349208, 0, 1, 0, 0);
    filter: drop-shadow(rgba(0, 0, 0, 0.25) 8px 6px 4px);
    fill: rgba(255, 255, 255, 0.11);
    box-shadow: rgba(0,0,0,0) 0px 0px 0px 0px, rgba(0,0,0,0) 0px 0px 0px 0px, rgba(0,0,0,0.1) 0px -1px 5px 0px, rgba(0,0,0,0.1) 0px 1px 15px 0px;

    .separatorSection {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 2.4rem;
      gap: 2rem;

      h3 {
        color: ${(props) => (props.theme.body === 'rgb(0, 23, 31)' ? 'rgb(153, 162, 165)' : 'rgb(213 41 166)')};
        font-size: 1.6rem;
      }
    }


    .right-0 {
      right: 0;
    }

    .bottom-1\/2 {
      bottom: 48rem;
    }

    .top-1\/2 {
      top: -20rem;
    }

    .left-0 {
      left: 0;
    }

    .main-gradient {
      background-image: linear-gradient(500deg,#e4b942c8,#ce6eae 47.71%,#ba2f9c 0,#6f71b6d8,#387986,#a4295c);
      filter: blur(20px);
      -webkit-filter: blur(150px);

      position: absolute;
      z-index: -10;
      height: 30rem;
      width: 20rem;
      border-radius: 9999px;
    }
`

const SkillsSection = styled.div`
  padding: 0 2.4rem;

  .sectionTitle {
        margin-top: 4rem;
        text-align: center;
      
        h2 {
          font-size: 3rem;
    text-align: center;
    font-weight: 800;
    color: ${(props) => (props.theme.body === 'rgb(0, 23, 31)' ? 'hsla(0,0%,99%,.8)' : 'rgb(213 41 166)')}; 
    letter-spacing: .2rem;
        }
    }


  .skillsIcon {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
    margin-top: 5rem;


    img {

      padding: 1rem;
      border: none;
      border-radius: 9999px;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;

      backdrop-filter: blur(64px);

      background-color: hsla(0,0%,99%,.1);

    }

  }
`



export default function Home() {
  return (
    <Container>

      <Header />

      <Content id="#home">
        <img className="HelloTitle" src="/bye.webp" alt="" />
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
          <img src="/happy.webp" alt="" />
        </div>
      </Content>

      <About>
        <div className="title">
          <h2 className={roboto.className}>Sobre mim</h2>
          <img src="/ideia.webp" alt="" />
          <p className={roboto.className}>Olá! Sou Lucas Andrade, um <span>dev FullStack</span> atualmente focado no Frontend. Adoro dar vida aos designs do Figma, transformando-os em experiências interativas e <span>totalmente responsivas</span>. Minha jornada tech é uma constante busca por conhecimento, sempre de olho em <span>novos frameworks e bibliotecas</span> para impulsionar meu desenvolvimento diário. Não gosto da ideia do comodismo, então estou sempre atrás de <span>novos desafios</span> para me aprimorar. Seja bem-vindo ao meu mundo onde código e design se encontram para criar <span>experiências incríveis!</span></p>
        </div>
        <div className="contactSection">
          <div className="locationSection">
            <img src="/location.svg" alt="" />
            <h4 className={roboto.className}>Minas Gerais, Brasil</h4>
          </div>
          <div className="phoneSection">
            <img src="/phone.svg" alt="" />
            <h4 className={roboto.className}>+55 31 98470-2550</h4>
          </div>
          <div className="mailSection">
            <img src="/mail.svg" alt="" />
            <h4 className={roboto.className}>contato.developerlucas@gmail.com</h4>
          </div>
        </div>
      </About>

      <Separator>
        <div className="separatorSection">
          <h3 className={roboto.className}>Starbucks</h3>
          <h3 className={roboto.className}>Google</h3>
          <h3 className={roboto.className}>Behance</h3>
          <h3 className={roboto.className}>Tesla</h3>
        </div>
        <div className="main-gradient left-0 top-1/2"></div>
        <div className="main-gradient right-0 bottom-1/2"></div>
      </Separator>

      <SkillsSection>
        <div className="sectionTitle">
          <h2 className={roboto.className}>Skills</h2>
        </div>
        <div className="skillsIcon">
          <img src="/js.svg" alt="" />
          <img src="/react.svg" alt="" />
          <img src="/nextjs.svg" alt="" />
          <img src="/typescript.svg" alt="" />
          <img src="/figma.svg" alt="" />
          <img src="/html.svg" alt="" />
          <img src="/css.svg" alt="" />
          <img src="/git.svg" alt="" />
        </div>
      </SkillsSection>


      <BackgroundBlur>
        <div className="main-gradient left-0 top-1/2 opacity-100"></div>
        <div className="main-gradient left-0 top-0 opacity-100"></div>
        <div className="main-gradient right-0 top-10"></div>
        <div className="main-gradient left-0 bottom-0"></div>
      </BackgroundBlur>


    </Container>
  )

}
