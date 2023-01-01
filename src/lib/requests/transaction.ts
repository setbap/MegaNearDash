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
    "2. Daily active wallets,5. Daily fee (in USD) spent,5. Transactions fee (in USD),1. Daily transactions,4. Transaction success rate"
  );

export const getTransactionsTotalInfo = () =>
  getSimpleInfo<TransactionsTotalInfo>(
    "ca70bc69-b115-437c-90e8-a933e9846c43",
    "5. Total fee (in USD) spent,2. Total wallets,1. Total transactions"
  );

export const getTransactionsTPS = () =>
  getSimpleArrayData<TransactionsTPS, TransactionsTPS>(
    "ecac8bba-653f-417d-93cd-03f59c829411",
    "6. Number of transactions per second (TPS),6. Weekly number of transactions per second (TPS)",
    "Day"
  );

export const getTransactionsBlockAge = () =>
  getSimpleArrayData<TransactionsBlockAge, TransactionsBlockAge>(
    "3a2c5308-412f-46e6-87ca-80e06df074ab",
    "7. Weekly number of transactions per block,7. Block age,7. Weekly block age,7. Number of transactions per block",
    "Day"
  );

export const getTransactionsTXInfo = () =>
  getSimpleArrayData<TransactionsTXInfo, TransactionsTXInfo>(
    "164e2960-1bee-4a95-a431-d1df8c3ba3b5",
    "5. Daily total fee,5. Average transaction fee per day,2. Daily number of active wallets,1. Daily number of transactions,1. Cumulative number of transaction,4. Daily transaction success rate",
    "Day"
  );

export const getTransactionsNewWallet = () =>
  getSimpleArrayData<TransactionsNewWallet, TransactionsNewWallet>(
    "c653021e-20d2-4492-9e29-3c822e050db2",
    "3. Daily number of new wallets,3. Cumulative number of new wallets,3. Average number of new wallets per week",
    "Day"
  );

export const getTransactionsTodayInfo = () =>
  getSimpleInfo<TransactionsTodayInfo>(
    "20ec1693-7e34-429f-a4fc-02517d5d6608",
    "Transactions Count, Active Wallets, Today TX Fee, Today Success Rate"
  );
