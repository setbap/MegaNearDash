import Staking from "lib/pages/staking";
import {} from "lib/requests/staking";
import { ReturnDataType } from "lib/types/base";
import {} from "lib/types/types/staking";
import Transaction from "pages";

export async function getStaticProps() {
  const [] = await Promise.all([]);
  return {
    props: {},
    revalidate: 10 * 60,
  };
}
export default Staking;
export interface StakingProps {}
