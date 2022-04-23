import styled from 'styled-components';

export const CardWrapper = styled.div`
display: flex;
`;

export const CardImg = styled.img`
margin-right: 26px;
max-width: 300px;
max-height: 300px;
border-radius: 6px;
`;

// ---
export const CardInfoWrapper = styled.div`
max-width: 500px;
`;

export const CardCategory = styled.div`
margin-bottom: 10px;
color: #b9b9b9;
font-size: 14px;
`;

export const CardTitle = styled.div`
margin-bottom: 12px;
font-weight: 600;
font-size: 22px;
`;

export const CardDescription = styled.div`
margin-bottom: 30px;
color: #5f5f5f;
font-weight: 400;
font-size: 16px;
`;

export const ItemBlock = styled.div`
margin-bottom: 20px;
display: flex;
& > div {
    margin-right: 30px;
    font-weight: 600;
    font-size: 16px;
}
`;

export const CardPrice = styled.div`
margin-bottom: 16px;
font-weight: 500;
font-size: 28px;
`;

// ---

export const CardButton = styled.button`
padding: 16px 44px;
cursor: pointer;
border: none;
border-radius: 6px;
font-size: 16px;
color: #FFFFFF;
background: #4ec37f;
&:active {
    background: #35aa64;
}
`;

export const ButtonsList = styled.ul`
margin-bottom: 22px;
display: flex;
justify-content: space-between;
border-radius: 6px;
border: 1px solid #b9b9b9;
& > li {
    padding 14px 0;
    width: 100%;
    text-align: center;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    list-style: none;
    &:hover {
     background: #d3f0de;
    }
&:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
}
&:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}
}
`;