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
          <a href="/aaa">
            <Linkedin />
          </a>

          <a href="/aaa">
            <Github />
          </a>
        </IconsContainer>
      </Content>
    </Container>
  );
};

export default Footer;
