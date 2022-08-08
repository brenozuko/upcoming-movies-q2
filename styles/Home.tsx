import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const ReactPaginateStyled = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  padding-bottom: 60px;

  li.selected {
    background-color: #fff;
    color: #000;
  }

  li {
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    border: solid 1px #fff;
    color: #ffffff;
    cursor: pointer;
    padding: 5px;

    a {
      outline: none;
    }

    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }

  @media (min-width: 768px) {
    li {
      font-size: 16px;
      padding: 10px;
    }
  }
`;
