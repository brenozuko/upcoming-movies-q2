import Image from "next/image";

// STYLES
import { Container, Content } from "./styles";

const Footer = function () {
  return (
    <Container>
      <Content>
        <Image src="/logo.png" alt="logo" width={130} height={70} />
      </Content>
    </Container>
  );
};

export default Footer;
