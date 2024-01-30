import { Container } from "./styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: '400', style: 'normal', subsets: ['latin'] })

export function Card({ image, title, desc, techs }) {
    return (
        <Container>
            <div className="cardTitle">
                <img src={image} alt="Imagem do card" />
            </div>
            <div className="titleAndDesc">
                <h2 className={roboto.className}>{title}</h2>
                <p className={roboto.className}>{desc}</p>
            </div>
            <div className="techs">
                {techs.map((tech, index) => (
                    <img key={index} src={tech} alt={`Tecnologia ${index + 1}`} />
                ))}
            </div>
        </Container>
    )
}