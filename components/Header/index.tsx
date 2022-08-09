import Image from "next/image";

// STYLES
import { Container, Content, SearchButton } from "./styles";

type HeaderProps = {
  openSearch: () => void;
};
const Header = function ({ openSearch }: HeaderProps) {
  return (
    <Container>
      <Content>
        <Image src="/logo.png" alt="logo" width={130} height={70} />

        <SearchButton onClick={openSearch}>ABRIR BUSCA</SearchButton>
      </Content>
    </Container>
  );
};

export default Header;
