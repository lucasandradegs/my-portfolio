import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 8rem;

    position: fixed;
    padding: 0 2.4rem;
    
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    --webkit-backdrop-filter: blur(10px);
    --moz-backdrop-filter: blur(10px);
    --o-backdrop-filter: blur(10px);
    --ms-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 0 0 15px 15px;
    border-bottom: 1px solid;
    box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.37);

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 20;

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }

    .nameSection {
        display: flex;
        flex-direction: column;
        align-items: center;

        h5 {
            color: rgb(213, 41, 166);
            font-size: 1.6rem;
        }
        
        h4 {
            font-weight: 700;
            font-size: 3rem;

        }
    }
    
    .desktopSection {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.4rem;

        font-family: 'Roboto', sans-serif;
        font-weight: 600;

        letter-spacing: .1em;

        a, li {
            color: #fff;
            font-size: 1.6rem;
            list-style: none;
            font-weight: 600;
        }

        ul {
            padding: .6rem 1.6rem;
            border-radius: .8rem;

            transition: background-color 0.5s ease, color 0.5s ease;

            &:hover {
                background-color: #fff;
            
                li {
                    color: rgb(213, 41, 166);
                }
            }
        }


        @media (min-width: 1024px) {
            gap: 3rem;
        }


        @media (max-width: 767px) {
            display: none;
        }
    }
        
        
`