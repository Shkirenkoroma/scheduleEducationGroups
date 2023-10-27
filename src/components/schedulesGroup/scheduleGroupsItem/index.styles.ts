import styled from 'styled-components';

export const ScheduleGroupsContainerItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  height: 400px;
  margin: 20px 20px;
  background-color: red;
  border-radius: 20px;
`;

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
  color: #3c4b64;
  font-weight: 900;
`;

export const EducationGroupDescriptionHeader = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  border: 1px solid grey;
`;

export const EducationGroupDescriptionItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

export const EducationGroupDescriptionItemName = styled.span`
  color: #3c4b64;
  font-weight: 900;
`;

export const Table = styled.table``;

export const TableBody = styled.tbody``;

export const TableHead = styled.th`
  border: 1px solid #fdfdfd;
`;

export const TableRow = styled.tr``;

export const TableCeil = styled.td`
  border: 1px solid #fdfdfd;
  text-align: center;
`;

export const Select = styled.select`
  text-align: center;
`;

export const SelectOption = styled.option`
  text-align: center;
`;
