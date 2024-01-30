import styled from "styled-components";

export const Container = styled.div`
    width: 31.5rem;
    height: 38.3rem;

    margin-bottom: 4rem;

    background-color: hsla(0,0%,99%,.9);

    border-radius: .8rem;

    img {
        width: 31.5rem;
        border-radius: .5rem .5rem .8rem .8rem;
    }

    .techs {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        margin-top: 2.5rem;

        img {
            width: 5rem;
            height: 5rem;
        }
    }

    .titleAndDesc {
        padding: 0 1.2rem;

        
        
        h2 {
            text-align: center;
            font-weight: 700;
            margin-top: 4rem;
            font-size: 1.8rem;

            color: rgb(0, 23, 31);
        }

        p {
            text-align: center;
            margin-top: 1.2rem;
            font-size: 1.4rem;
            padding-bottom: 2rem;
            color: rgb(0, 23, 31);

            border-bottom-width: .2rem;
            border-bottom-style: solid;
            border-bottom-color: ${(props) => (props.theme.body === 'rgb(0, 23, 31)' ? '#000' : '#000')};
        }
    }
`