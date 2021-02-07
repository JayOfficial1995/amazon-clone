import styled from "styled-components";

import { CustomContainerStyle, FlexBox } from "../../style/Common.style";

export const CheckoutStyle = styled.main`
  ${FlexBox};
  ${CustomContainerStyle};

  background: ${(props) => props.theme.color.whiteColor};
  padding: 2rem;
  align-items: flex-start;

  .checkout-list {
    .ad-wrapper {
      margin-right: 3rem;
      display: block;

      .ad-image {
        max-width: 100%;
      }
    }

    .item-list-wrapper {
      padding: 1rem;
      border-bottom: 1px solid ${(props) => props.theme.color.grayColor};
    }
  }
`;
