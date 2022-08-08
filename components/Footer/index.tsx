import Image from "next/image";

// ICONS
import Linkedin from "./icons/linkedin-logo.svg";
import Github from "./icons/github-logo.svg";

// STYLES
import { Container, Content, Disclaimer, IconsContainer } from "./styles";

const Footer = function () {
  return (
    <Container>
      <Content>
        <Image src="/logo.png" alt="logo" width={130} height={70} />

        <Disclaimer>
          <p>Um original Zukowski.</p>
          <p>Todos os direitos reservados. Vida longa e próspera.</p>
        </Disclaimer>

        <IconsContainer>
          <a
            href="https://www.linkedin.com/in/breno-zukowski-b873101a2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>

          <a
            href="https://github.com/brenozuko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </IconsContainer>
      </Content>
    </Container>
  );
};

export default Footer;
