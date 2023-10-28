import { ChangeEvent, FC } from "react";
import { DataGroup } from "src/store/types/types";
import Select from "src/UI/shared/select";
import * as Style from "./index.styles";

interface PracticProps {
  educationGroupsItem:DataGroup,
  column:boolean
};

const Practic:FC<PracticProps>= ({educationGroupsItem, column}):JSX.Element => {
  return (
    <Style.TableRow>
      <Style.TableCeil>Практические</Style.TableCeil>
      <Style.TableCeil>{educationGroupsItem.practicHours}</Style.TableCeil>
      <Style.TableCeil>
        <Select
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setTeacher(e.target.value)
          }
          value={nameLector}
          editionDataTeachers={editionDataTeachers}
          educationHours={educationGroupsItem.practicHours}
        />
      </Style.TableCeil>
      {column && (
        <Style.TableCeil>
          <Select
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setTeacher(e.target.value)
            }
            value={nameLector}
            editionDataTeachers={editionDataTeachers}
            educationHours={educationGroupsItem.practicHours}
          />
        </Style.TableCeil>
      )}
    </Style.TableRow>
  )
};

export default Practic;
