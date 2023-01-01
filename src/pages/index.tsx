import Transaction from "lib/pages/transaction";
import {
  getTransactionsAVGInfo,
  getTransactionsBlockAge,
  getTransactionsNewWallet,
  getTransactionsTodayInfo,
  getTransactionsTotalInfo,
  getTransactionsTPS,
  getTransactionsTXInfo,
} from "lib/requests/transaction";
import { ReturnDataType } from "lib/types/base";
import {
  TransactionsAVGInfo,
  TransactionsBlockAge,
  TransactionsNewWallet,
  TransactionsTodayInfo,
  TransactionsTotalInfo,
  TransactionsTPS,
  TransactionsTXInfo,
} from "lib/types/types/transaction";
export async function getStaticProps() {
  const [
    transactionsAVGInfo,
    transactionsTotalInfo,
    transactionsTPS,
    transactionsBlockAge,
    transactionsTXInfo,
    transactionsNewWallet,
    transactionsTodayInfo,
  ] = await Promise.all([
    getTransactionsAVGInfo(),
    getTransactionsTotalInfo(),
    getTransactionsTPS(),
    getTransactionsBlockAge(),
    getTransactionsTXInfo(),
    getTransactionsNewWallet(),
    getTransactionsTodayInfo(),
  ]);
  return {
    props: {
      transactionsAVGInfo,
      transactionsTotalInfo,
      transactionsTPS,
      transactionsBlockAge,
      transactionsTXInfo,
      transactionsNewWallet,
      transactionsTodayInfo,
    },
    revalidate: 10 * 60,
  };
}
export default Transaction;
export interface TransactionsProps {
  transactionsAVGInfo: ReturnDataType<TransactionsAVGInfo>;
  transactionsTotalInfo: ReturnDataType<TransactionsTotalInfo>;
  transactionsTPS: ReturnDataType<TransactionsTPS[]>;
  transactionsBlockAge: ReturnDataType<TransactionsBlockAge[]>;
  transactionsTXInfo: ReturnDataType<TransactionsTXInfo[]>;
  transactionsNewWallet: ReturnDataType<TransactionsNewWallet[]>;
  transactionsTodayInfo: ReturnDataType<TransactionsTodayInfo>;
}
