import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;
    padding: 10px 20px;

    .top-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;

        .menu-links a, .icons a {
            color: #fff;
            text-decoration: none;
            margin: 0 10px;
            position: relative;

            &.highlighted {
                background-color: #00f;
                padding: 5px 10px;
                border-radius: 5px;
                font-weight: bold;
            }
        }

        .logo img {
            height: 40px;
        }

        .icons {
            display: flex;
            align-items: center;

            svg {
                margin: 0 10px;
                cursor: pointer;
            }
        }
    }

    .bottom-nav {
        display: flex;
        justify-content: center;
        padding: 10px 0;
        border-top: 1px solid #444;
        border-bottom: 1px solid #444;

        a {
            color: #fff;
            text-decoration: none;
            margin: 0 15px;
            position: relative;

            &.highlighted {
                background-color: #0ff;
                padding: 5px 10px;
                border-radius: 5px;
                font-weight: bold;
            }
        }
    }
`;
