import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    html{
        box-sizing: border-box;
    }

    *,::after,::before{
        box-sizing:inherit;
    }

    body{
        max-width:1248px;
        margin:100px auto;
        padding: 16px;
        font-family:"Inter",sans-serif;
        color:${({ theme }) => theme.basic.mainText};
        background-color: ${({ theme }) => theme.basic.background};

        @media (max-width: ${({ theme }) => theme.breakpoint.ipadMax}){
            margin:35px auto;
            max-width:1024px
        }

        @media (max-width: ${({ theme }) => theme.breakpoint.medium}){
            margin: 21px 0;
            padding:0;
        }
    }
`;
