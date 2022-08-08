import Image from "next/image";

// ICONS
import Glass from "./icons/glass.svg";

// STYLES
import { Container, Content, SearchBar } from "./styles";

type HeaderProps = {
  searchValue: string;
  onChange: (newValue: string) => void;
  onRequestSearch: () => void;
};
const Header = function () {
  return (
    <Container>
      <Content>
        <Image src="/logo.png" alt="logo" width={130} height={70} />

        <SearchBar>
          <Glass />

          <input placeholder="Buscar... " type="text" />
        </SearchBar>
      </Content>
    </Container>
  );
};

export default Header;
