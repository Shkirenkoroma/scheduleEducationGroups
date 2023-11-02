import styled from 'styled-components';

export const TableHead = styled.th`
  padding: 10px;
  border: 1px solid #eaeaea;
 
    @media (max-width: 768px) {
      font-size: 12px;
  }
 
     @media (max-width: 480px) {
      padding: 3px;
      font-size: 10px;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 2px solid #59667c;
`;

export const ContainerHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 6px;
`;
