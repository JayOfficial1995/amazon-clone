import styled from "styled-components";
import { FlexBox } from "../../style/Common.style";

export const SubTotalStyle = styled.section`
  ${FlexBox};

  flex-direction: column;
  align-items: flex-start;
  background: ${(props) => props.theme.color.grayColor};
  width: 30rem;
  padding: 2rem;
  border: 1px solid #dddddd;
  border-radius: 0.3rem;

  .items-title {
    font-size: ${(props) => props.theme.fontSize.h2};
  }

  .gift-wrapper {
    ${FlexBox};

    margin: 1rem 0;

    .checkbox {
      margin-right: 0.5rem;
    }
  }

  .checkout-button {
    display: block;
    width: 100%;
    padding: 0.2rem;
    color: ${(props) => props.theme.color.blackColor};
    background: ${(props) => props.theme.color.orangeColor};
    outline: none;
    border: 1px solid;
    border-radius: 0.2rem;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.color.goldenColor};
    }
  }
`;
