import styled from 'styled-components';

export const Footer = styled.footer`
    background-color: #f8f8f8;
    padding: 20px;
    font-family: Arial, sans-serif;
    color: #333;

    .footer-content {
        display: flex;
        justify-content: space-around;
        padding-bottom: 20px;
        border-bottom: 1px solid #ddd;

        .column {
            width: 20%;

            h3 {
                color: #0056b3;
                margin-bottom: 10px;
            }

            ul {
                list-style: none;
                padding: 0;

                li {
                    margin-bottom: 8px;
                }
            }

            .social-media {
                display: flex;
                align-items: center;

                img {
                    margin-right: 10px;
                }
            }
        }
    }

    .footer-bottom {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-top: 20px;

        .footer-logo {
            width: 40%;

            img {
                display: block;
                margin: 0 auto 10px;
            }

            p {
                text-align: justify;
                font-size: 14px;
                line-height: 1.6;
            }
        }

        .payment-security {
            width: 40%;
            text-align: center;

            h3 {
                margin-bottom: 10px;
                color: #0056b3;
            }

            .payment-icons {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;

                img {
                    margin: 5px 10px;
                    height: 30px;
                }
            }

            img {
                margin: 5px 10px;
                height: 30px;
            }
        }
    }
`;
