import { DevelopmentNewContracts } from "lib/types/types/development";
import { getSimpleArrayData } from "./utils";

export const getDevelopmentNewContracts = () =>
  getSimpleArrayData<DevelopmentNewContracts, DevelopmentNewContracts>(
    "b1452789-d313-4eaa-9cb5-a57a75bf8e4d",
    "Cumulative new deployed contracts,Weekly new deployed contracts",
    "Day"
  );
