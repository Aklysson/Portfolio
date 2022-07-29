import { Container } from "./style";
import { Tecnologies } from "../Technologies";


export function MainContent() {
    return (
        <Container>
            <div className="text">
                <h2>Sobre</h2>
                <p>Sou estudante de Análise e Desenvolvimento de Sistemas.</p>
                <p>Atualmente estudo a linguagem de programação JavaScript e TypeScript com o objetivo de me tornar um Full-Stack na área de desenvolvimento web.</p>
                <p>Busco me especializar na biblioteca React e em Seus frameworks, e no Node.Js para Backend.</p>
            </div>
            <h2>Tecnologias</h2>
            <Tecnologies />
       
        </Container>
    )
}