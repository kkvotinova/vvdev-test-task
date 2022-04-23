import styled from 'styled-components';

interface IProps {
    visibility: 'hidden' | 'visible';
}

export const FooterWrapper = styled.div`
padding: 16px 0;
visibility: ${(props: IProps) => props.visibility};
position: fixed;
bottom: 0;
left: 0;
right: 0;
display: flex;
justify-content: center;
align-items: center;
color: #FFFFFF;
background-color: #8489bc;
`;