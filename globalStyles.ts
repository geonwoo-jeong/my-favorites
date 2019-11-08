import { css, createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 376,
} as const;

const media = Object.keys(sizes).reduce(
  (acc, label) => {
    acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
      css`
        @media (max-width: ${sizes[label]}px) {
          ${css(literals, ...placeholders)};
        }
      `.join("");
    return acc;
  },
  {} as Record<
    keyof typeof sizes,
    (l: TemplateStringsArray, ...p: any[]) => string
  >
);

const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
    font-size: 62.5%;
    background-color: ${({ theme }: any) => theme.body};

    ${media.phone`
      font-size: 56.25%;
    `}

  }

  body {
    box-sizing: border-box;
    font-family:"游ゴシック Medium",YuGothic,YuGothicM,"Hiragino Kaku Gothic ProN","Hiragino Kaku Gothic Pro",メイリオ,Meiryo,sans-serif;
    font-weight: 400;
    line-height: 1.7;    
  }

`;

export default GlobalStyles;
