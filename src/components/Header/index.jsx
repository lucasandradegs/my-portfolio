import { Container } from "./styles";
import { Dancing_Script, Roboto } from 'next/font/google'


const dancing = Dancing_Script({ weight: '400', style: 'normal', subsets: ['latin'] })
const roboto = Roboto({ weight: '400', style: 'normal', subsets: ['latin'] })

export function Header() {
    return (
        <Container>
            <div className="nameSection">
                <h4 className={dancing.className}>Lucas Andrade</h4>
                <h5 className={dancing.className}>portfolio</h5>
            </div>

            <div className="desktopSection">
                <ul>
                    <a href="#home">
                        <li>Home</li>
                    </a>
                </ul>
                <ul>
                    <a href="#about">
                        <li>Sobre</li>
                    </a>
                </ul>
                <ul>
                    <a href="#skills">
                        <li>Skills</li>
                    </a>
                </ul>
                <ul>
                    <a href="#project">
                        <li>Projetos</li>
                    </a>
                </ul>
                <ul>
                    <a href="#contact">
                        <li>Contato</li>
                    </a>
                </ul>
            </div>

        </Container>
    )
}