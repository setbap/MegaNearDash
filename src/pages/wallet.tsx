import Wallet from "lib/pages/wallet";
import {} from "lib/requests/wallet";
import { ReturnDataType } from "lib/types/base";
import {} from "lib/types/types/wallet";

export async function getStaticProps() {
  const [] = await Promise.all([]);
  return {
    props: {},
    revalidate: 10 * 60,
  };
}
export default Wallet;
export interface WalletProps {}
