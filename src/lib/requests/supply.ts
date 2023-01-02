import { SupplyOverTime, SupplyTotal } from "lib/types/types/supply";
import { getSimpleArrayData, getSimpleInfo } from "./utils";

export const getSupplyOverTime = () =>
  getSimpleArrayData<SupplyOverTime, SupplyOverTime>(
    "d85cd10b-e416-4b92-8988-58fd5d7d75d6",
    "Total supply over time",
    "Day"
  );

export const getSupplyTotal = () =>
  getSimpleInfo<SupplyTotal>(
    "4038f6e9-43c3-4472-bb77-23ac889b09c3",
    "Total supply"
  );
