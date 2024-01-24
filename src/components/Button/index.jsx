import { Container } from "./styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: '400', style: 'normal', subsets: ['latin'] })

export function Button({ title, ...rest }) {
    return (
        <Container
            type="button"
            {...rest}
        >
            <p className={roboto.className}>{title}</p>
        </Container>
    )
}