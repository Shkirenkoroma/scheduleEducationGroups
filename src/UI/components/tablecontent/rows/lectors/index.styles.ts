import styled from 'styled-components';

export const TableRow = styled.tr``;

export const TableCeil = styled.td`
  border: 1px solid #eaeaea;
  text-align: center;

    @media (max-width: 768px) {
      font-size: 12px;
  }
 
    @media (max-width: 480px) {
      padding: 0;
}
`;

export const ContainerHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const ContainerIcon = styled.div`
  color: #ffffff;

    &:hover {
      cursor: pointer;
      transform: scale(0.93);
      transition: all 300ms ;
  }
}
`;
