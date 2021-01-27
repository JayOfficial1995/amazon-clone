import styled from "styled-components";

import { CustomContainerStyle, FlexBox } from "../../style/Common.style";

export const HomeStyle = styled.main`
  .home-container {
    ${CustomContainerStyle};

    .banner-wrapper {
      .banner-image {
        width: 100%;
        margin-bottom: -10rem;
        z-index: -1;
        mask-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 1),
          rgba(0, 0, 0, 0)
        );
      }
    }

    .items-container {
      ${FlexBox};

      justify-content: flex-start;
      margin: 1rem;
      z-index: 1;
    }
  }
`;
