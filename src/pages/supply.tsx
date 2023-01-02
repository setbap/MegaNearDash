import Supply from "lib/pages/supply";
import { getSupplyOverTime, getSupplyTotal } from "lib/requests/supply";
import { ReturnDataType } from "lib/types/base";
import { SupplyOverTime, SupplyTotal } from "lib/types/types/supply";

export async function getStaticProps() {
  const [supplyOverTime, supplyTotal] = await Promise.all([
    getSupplyOverTime(),
    getSupplyTotal(),
  ]);

  return {
    props: { supplyOverTime, supplyTotal },
    revalidate: 10 * 60,
  };
}

export interface SupplyProps {
  supplyOverTime: ReturnDataType<SupplyOverTime[]>;
  supplyTotal: ReturnDataType<SupplyTotal>;
}

export default Supply;
