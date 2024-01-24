import styled from "styled-components";

export const Container = styled.div`
    .tag-list {
        width: 30rem;
        position: relative;
        overflow: hidden;
    }

    .inner {
        width: fit-content;
        display: flex;
        gap: 1rem;
        animation: loop 10s linear infinite;
    }

    .tag {
        display: flex;
        align-items: center;
        gap: 0 0.2rem;
        background-color: #334155;
        padding: 0.7rem 1rem;
        border-radius: 0.4rem;
        box-shadow: 
        0 0.1rem 0.2rem #00000033,
        0 0.1rem 0.5rem #0000004d,
        0 0.2rem 1.5rem #00000066;
    }

    .fade {
        position: absolute;
        background: linear-gradient(90deg, #1e293b, transparent 30%, transparent 70%, #1e293b);
        inset: 0;
        pointer-events: none;
    }

    @keyframes loop {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(-50%);
        }
    }
`

