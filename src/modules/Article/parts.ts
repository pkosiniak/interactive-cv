import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { breakpoint, PRINT_BREAK } from '@/styles';

const printView = css`
  width: 14.5cm;
  padding-top: 2cm;
  padding-right: 1cm;
  padding-bottom: 2cm;
  padding-left: 0.7cm;
`;

const responsiveView = css`
  max-width: 825px;
  padding: 80px 40px;

  @media only screen and (max-width: ${breakpoint.small}px) {
    padding: 80px 20px;
  }
`;

const responsiveWithoutSidePanel = css`
  max-width: 1200px;
  padding: 80px 60px;

  @media only screen and (max-width: ${breakpoint.medium}px) {
    padding: 80px 40px;
  }

  @media only screen and (max-width: ${breakpoint.small}px) {
    padding: 80px 20px;
  }
`;

const printWithoutSidePanel = css`
  max-width: 21cm;
  padding: 2.5cm;
`;

type StyledArticleProps = {
  isResponsive: boolean;
  isSidePanelOpen: boolean;
};

export const StyledArticle = styled.article<StyledArticleProps>`
  display: flex;
  flex-direction: column;

  ${({ isResponsive, isSidePanelOpen }) =>
    isResponsive
      ? isSidePanelOpen
        ? responsiveView
        : responsiveWithoutSidePanel
      : isSidePanelOpen
        ? printView
        : printWithoutSidePanel}

  background-color: ${({ theme }) => (theme as Theme).colors.background};
  gap: 2.5rem;

  .${PRINT_BREAK} {
  }

  @media print {
    .${PRINT_BREAK} {
      margin-top: 2cm;
      page-break-before: always;
    }
  }
`;
