import styled from 'styled-components';

export const Textarea = styled.textarea`
  resize: none;
  outline: none;
  margin: 7px;

    @media(max-width: 768px){
      max-width: 250px;
      width: 100%;
}
    @media(max-width: 480px){
      max-width: 90px;
      width: 100%;
}`;
