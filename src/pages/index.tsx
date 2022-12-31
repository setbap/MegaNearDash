import Transaction from "lib/pages/transaction";
import {} from "lib/requests/transaction";
import { ReturnDataType } from "lib/types/base";
import {} from "lib/types/types/transaction";
export async function getStaticProps() {
  const [] = await Promise.all([]);
  return {
    props: {},
    revalidate: 10 * 60,
  };
}
export default Transaction;
export interface TransactionsProps {}
