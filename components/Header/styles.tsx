import styled from "styled-components";

export const Container = styled.div`
  background-color: #121212;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  z-index: 10;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1024px) {
    max-width: 1280px;
    margin: 0 auto;
  }
`;

export const SearchButton = styled.button`
  font-family: "Montserrat";
  border: none;
  background-color: #6c1fc3;
  color: #fff;
  font-weight: 600;
  font-size: 12px;
  padding: 15px;
  border-radius: 25px;
  box-shadow: 2px 1px 15px 3px rgba(0, 0, 0, 0.52);
  margin-right: 10px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
