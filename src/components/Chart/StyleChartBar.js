import styled from 'styled-components';

export const ContainerChartBar = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InnerChartBar = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 12px;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const FillChartBar = styled.div`
    height: ${ props => props.heightFill };
    background-color: #40005d;
    width: 100%;
    transition: all 0.3s ease-out;
`;

export const LabelChartBar = styled.div`
    font-weight: bold;
    font-size: 0.5rem;
    text-align: center;
`;