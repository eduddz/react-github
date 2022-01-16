import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 8px;

    h1 {
        font-size: 36px;
        font-weight: bold;
    }
`
    
export const WrapperStatusContent = styled.div`
    display: flex;
    align-items: center;

    div {
        margin: 8px;
        text-align: center;
    }

    h4 {
        font-size: 16px;
        font-weight: bold;
    }
`
    
export const WrapperUsername = styled.div`
    display: flex;
    align-items: center;

    h3 {
        margin-right: 8px;
    }

    a {
        color: blue;
        font-weight: bold;
        font-size: 18px;
    }
`

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 250px;
    margin: 8px;
`