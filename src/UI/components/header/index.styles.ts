import styled from 'styled-components';

export const EducationGroupHeader = styled.header`
  margin-bottom: 20px;
`;

export const EducationGroupNameHeader = styled.div`
  height: 50px;
  background-color: #e7f1ff;
  text-align: center;
`;

export const EducationGroupTitle = styled.span`
  display: inline-block;
  padding: 15px;
  font-weight: 900;
  color: #3c4b64;
`;

export const EducationTitleName = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const EducationGroupDescriptionHeader = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px;
  border-top: 2px solid #eaeaea;
  border-bottom: 2px solid #eaeaea;
`;

export const EducationGroupDescriptionItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

export const EducationGroupDescriptionItemName = styled.span`
  font-weight: 900;
  color: #3c4b64;
  
    @media(max-width: 768px) {
      fonst-size: 24px;
  }
`;
