import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
`;


export const Header = styled(Content)`
    width: 100%;
    background: #fa3d8f;
    height: 5vh;
    color: white;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    padding: 10px;
`;