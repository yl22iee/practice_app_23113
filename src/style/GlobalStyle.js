import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainColors = {
  blackColor: "#1d1d1d",
  pointColor: "#F97B22",
};

export const GlobalStyle = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }

    body{
        background-color: ${mainColors.blackColor};
        color: white;
        letter-spacing: -1px;
        word-break: break-all;
        /* =>단어 별로 줄바꿈 처리 */
        font-family: "Noto Sans KR", sans-serif;
    }

    ul, li{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: "white";
    }
`;
