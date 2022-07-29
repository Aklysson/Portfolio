import lindo from '../../imgs/lindo2.jpg';
import curriculo from '../../imgs/Curriculo_att.jpg';


import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { Container } from './style';
import { SocialNetwork } from '../SocialNetwork';
import { Section } from '../Section';
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";



export function Sidebar() {

    function Curriculum(url){
        window.open(url,'_blank').focus()
    }

    return (
        <Container>
        <img src={lindo} />
        <p id='dev'>Desenvolvedor</p>
        <div className="icons">
            <SocialNetwork link={'https://www.linkedin.com/in/aklysson-roberto-048907226/'} name='linkedIn' icon= {<FaLinkedinIn />} />
            <SocialNetwork link={'https://github.com/Aklysson'} name='Github' icon={<FaGithub />}/>
            <SocialNetwork link={'https://www.instagram.com/aklyssonroberto/'} name='Instagram' icon={<FaInstagram />}/>

        </div>
        <div className="Section">
            <Section icon={<AiFillPhone />} Content={'Telefone'} Dados={'(81) 9 8929-1924'} id={'telefone'}/>
            <Section icon={<AiOutlineMail />} Content={'E-mail'} Dados={'aklyroberto@hotmail.com'} id={'email'}/>
            <Section icon={<AiFillEnvironment />} Content={'Localização'} Dados={'Santa Cruz/PE'} id={'dados'}/>
        </div>
        <button onClick={() => Curriculum(curriculo)}>Dowload Curriculo</button>
        </Container>
    )
}