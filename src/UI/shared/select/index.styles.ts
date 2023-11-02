import styled from 'styled-components';

export const Select = styled.select`
  width: 100%;
  max-width: 435px;
  margin: 7px 1px;
  padding: 10px;
  border: 1px solid #d0d1d1;
  border-radius: 5px;
  background-color:${props => props.disabled ? '#f2f2f2' : '#ffffff'};

    @media(max-width: 768px){
      max-width: 250px;
      width: 100%;
  }

    @media(max-width: 480px){
      max-width: 40px;
      width: 100%;
      height: 33px;
}
`;

export const SelectOption = styled.option`
  text-align: center;
`;
