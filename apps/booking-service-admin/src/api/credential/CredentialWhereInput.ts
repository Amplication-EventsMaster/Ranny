import { AppWhereUniqueInput } from "../app/AppWhereUniqueInput";
import { DestinationCalendarListRelationFilter } from "../destinationCalendar/DestinationCalendarListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CredentialWhereInput = {
  app?: AppWhereUniqueInput;
  destinationCalendars?: DestinationCalendarListRelationFilter;
  id?: IntFilter;
  key?: JsonFilter;
  typeField?: StringFilter;
  user?: UserWhereUniqueInput;
};
