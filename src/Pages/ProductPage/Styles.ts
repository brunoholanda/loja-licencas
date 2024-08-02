import styled from 'styled-components';

export const ProductDetail = styled.div`
    display: flex;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;

    .image-section {
        flex: 1;
        img {
            max-width: 100%;
            border-radius: 8px;
        }
    }

    .details-section {
        flex: 2;
        margin-left: 20px;
        
        h1 {
            font-size: 24px;
            margin-bottom: 10px;
        }

        .product-code {
            color: #555;
            margin-bottom: 10px;
        }

        .rating {
            display: flex;
            align-items: center;
            margin-bottom: 10px;

            span {
                margin-left: 10px;
                color: #888;
            }
        }

        .price-section {
            .original-price {
                text-decoration: line-through;
                color: #888;
                margin-bottom: 5px;
            }

            .discounted-price {
                font-size: 24px;
                margin-bottom: 10px;

                .highlight {
                    color: #d32f2f;
                    font-weight: bold;
                }
            }

            .installments {
                margin-bottom: 10px;
                a {
                    color: #0056b3;
                    text-decoration: none;
                }
            }

            .boleto-price {
                color: #43a047;
                font-weight: bold;
                margin-bottom: 5px;
            }

            .pix-price {
                color: #2e7d32;
                font-weight: bold;

                .pix-discount {
                    background-color: #dcedc8;
                    border-radius: 4px;
                    padding: 2px 4px;
                    margin-left: 5px;
                }
            }
        }

        .purchase-section {
            display: flex;
            align-items: center;
            margin-top: 20px;

            .quantity {
                input {
                    width: 50px;
                    padding: 5px;
                    font-size: 16px;
                    margin-right: 10px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                }
            }

            .buy-button {
                display: flex;
                align-items: center;
                padding: 10px 20px;
                background-color: #43a047;
                color: #fff;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 16px;

                &:hover {
                    background-color: #388e3c;
                }

                svg {
                    margin-right: 5px;
                }
            }
        }

        .support {
            display: flex;
            align-items: center;
            margin-top: 20px;
            color: #4caf50;

            svg {
                margin-right: 5px;
            }
        }

        .availability {
            margin-top: 10px;
            color: #388e3c;

            span {
                font-weight: bold;
            }
        }
    }
`;
