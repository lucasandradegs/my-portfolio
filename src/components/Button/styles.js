import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 4.1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
    color: #fff;

    border: 2px solid #fff;
    border-radius: 1.2rem;

    padding: 0.5rem;

    backdrop-filter: blur(64px);
    box-shadow: 0px 8px 16px rgba(255, 255, 255, 0.2); 

    &:hover {
        box-shadow: 0px 12px 24px rgba(255, 255, 255, 0.4);
    }

    p {
        font-size: 1.4rem;
        font-weight: bold;
    }
`
