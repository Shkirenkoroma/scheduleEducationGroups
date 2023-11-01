import styled from 'styled-components'

export const Button = styled.button`
  margin-left: 30px;
  padding: 10px;
  background-color: #198754;
  border: none;
  border-radius: 3px;
  color: #ffffff;
  background-size: 400%;
  background-image: linear-gradient(45deg, #3c4b64 50%, transparent 50%);
  background-position: 100%;
  transition: background 350ms ease-in-out;
    &:hover {
      background-position: 0;
      cursor: pointer;
  }
`;
