import { Container } from "./style"

export function Section({Dados,Content,icon,id}){
    return (
        <Container>
        <div id={id}>{icon}</div>
        <div className="align">
            <p>{Content}</p>
            <h4>{Dados}</h4>
        </div>
        </Container>
    )
}