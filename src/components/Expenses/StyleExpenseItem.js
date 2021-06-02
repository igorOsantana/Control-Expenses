import styled from 'styled-components';

export const ContainerExpenseItem = styled.button`
  display: flex;
  width: 100%;
  border-style: none;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #4b4b4b;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  transition: all .3s;

  &:hover {
    filter: brightness(75%);
  }

  & h2 {
    font-size: 1rem;
    margin: 0 1rem;
    color: #fff;
  }
`;
  
export const DescriptionExpenseItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  padding: .5rem;

  & div:first-child {
    display: flex;
    align-items: center;
  }

  @media (min-width: 580px) {
    align-items: center;
    & h2 {
      font-size: 1.25rem;
    }
  }
`;
 
export const PriceExpenseItem = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #90019D;
  border: 1px solid #fff;
  padding: 0.5rem;
  border-radius: 12px;
  align-content: end;

  @media (min-width: 580px) {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }
`;