import styled from 'styled-components';

export const Select = styled.select`
width:100%;
max-width:400px;
margin: 7px 1px;
padding:10px;
background-color:${props => props.disabled ? '#f2f2f2' : '#ffffff'};
border:1px solid #d0d1d1;
border-radius:5px;
`;

export const SelectOption = styled.option`
  text-align: center;
`;
