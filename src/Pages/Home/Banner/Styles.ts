import styled from 'styled-components';

export const Banner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f8f8f8;

    .info {
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin-bottom: 20px;

        .info-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            color: #333;

            h3 {
                margin: 10px 0 5px;
                font-size: 16px;
                color: #0056b3;
            }

            p {
                margin: 0;
                font-size: 14px;
            }

            svg {
                color: #0056b3;
                margin-bottom: 10px;
            }
        }
    }

    .products {
        display: flex;
        justify-content: space-around;
        width: 100%;

        img {
            max-width: 300px;
            height: auto;
            margin: 0 10px;
        }
    }
`;
