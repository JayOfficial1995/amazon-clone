import styled from "styled-components";

import { FlexBox } from "../../style/Common.style";

export const ProductStyle = styled.section`
  background: ${(props) => props.theme.color.whiteColor};
  padding: 3rem 1rem;
  z-index: 1;
  margin: 0 1rem;
  flex: 1;

  .product-info {
    ${FlexBox};

    flex-direction: column;
    width: 100%;

    .price {
      padding: 1rem 0;
      font-size: ${(props) => props.theme.fontSize.h3};
    }

    .product-rating {
      ${FlexBox};

      justify-content: flex-start;

      .star-icon {
        color: ${(props) => props.theme.color.goldenColor};
      }
    }

    .card-image {
      width: 29.6rem;
      height: 29.6rem;
      margin: 1.5rem;
    }

    .add-to-card-btn {
      border: none;
      outline: none;
      padding: 0.5rem 3rem;
      border-radius: 0.4rem;
      background: ${(props) => props.theme.color.gradientButton};
      color: ${(props) => props.theme.color.blackColor};
      cursor: pointer;

      &:hover {
        background: ${(props) => props.theme.color.orangeColor};
      }
    }
  }
`;
