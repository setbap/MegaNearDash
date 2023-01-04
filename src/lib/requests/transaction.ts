import {
  TransactionsAVGInfo,
  TransactionsBlockAge,
  TransactionsNewWallet,
  TransactionsTodayInfo,
  TransactionsTotalInfo,
  TransactionsTPS,
  TransactionsTXInfo,
} from "lib/types/types/transaction";
import { getSimpleArrayData, getSimpleInfo } from "./utils";

export const getTransactionsAVGInfo = () =>
  getSimpleInfo<TransactionsAVGInfo>(
    "6e618fc0-517b-446f-abf3-8f87dde49cd8",
    "Daily active wallets,Daily fee (in USD) spent,Transactions fee (in USD),Daily transactions,Transaction success rate"
  );

export const getTransactionsTotalInfo = () =>
  getSimpleInfo<TransactionsTotalInfo>(
    "ca70bc69-b115-437c-90e8-a933e9846c43",
    "Total fee (in USD) spent,Total wallets,Total transactions"
  );

export const getTransactionsTPS = () =>
  getSimpleArrayData<TransactionsTPS, TransactionsTPS>(
    "ecac8bba-653f-417d-93cd-03f59c829411",
    "Number of transactions per second (TPS),Weekly number of transactions per second (TPS)",
    "Day"
  );

export const getTransactionsBlockAge = () =>
  getSimpleArrayData<TransactionsBlockAge, TransactionsBlockAge>(
    "3a2c5308-412f-46e6-87ca-80e06df074ab",
    "Weekly number of transactions per block,Block age,Weekly block age,Number of transactions per block",
    "Day"
  );

export const getTransactionsTXInfo = () =>
  getSimpleArrayData<TransactionsTXInfo, TransactionsTXInfo>(
    "164e2960-1bee-4a95-a431-d1df8c3ba3b5",
    "Daily total fee,Average transaction fee per day,Daily number of active wallets,Daily number of transactions,Cumulative number of transaction,Daily transaction success rate",
    "Day"
  );

export const getTransactionsNewWallet = () =>
  getSimpleArrayData<TransactionsNewWallet, TransactionsNewWallet>(
    "c653021e-20d2-4492-9e29-3c822e050db2",
    "Daily number of new wallets,Cumulative number of new wallets,Average number of new wallets per week",
    "Day"
  );

export const getTransactionsTodayInfo = () =>
  getSimpleInfo<TransactionsTodayInfo>(
    "20ec1693-7e34-429f-a4fc-02517d5d6608",
    "24H Transactions Count,24H Active Wallets,24H TX Fee,24H Success Rate"
  );
