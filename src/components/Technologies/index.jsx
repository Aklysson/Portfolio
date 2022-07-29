import { Container } from "./style"
import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiReact,
} from "react-icons/di";
import { SiTypescript } from 'react-icons/si'



export function Tecnologies() {

    const technologies = [
        { id: "html", name: "HTML5", icon: <DiHtml5 /> },
        { id: "css", name: "CSS3", icon: <DiCss3 /> },
        { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
        { id: "tp", name: "TypeScript", icon: <SiTypescript /> },
        { id: "react", name: "React", icon: <DiReact /> },
        { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    ]
    return (
        <Container>
            {
                technologies.map((tec) => (
                    <div className="content">
                        <p id={tec.id}>{tec.icon}</p>
                        <div className="write">
                            <h3>{tec.name}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                ))
            }
        </Container>
    )
}