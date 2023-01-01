export interface TransactionsAVGInfo {
  "AVG tx count": number;
  "AVG success rate": number;
  "AVG Active users": number;
  "AVG fee": number;
  "AVG tx fee per day": number;
}

export interface TransactionsTotalInfo {
  "tx count": number;
  "Active users": number;
  fee: number;
}

export interface TransactionsTPS {
  Day: string;
  TPS: number;
  "AVG TPS": number;
}

export interface TransactionsBlockAge {
  Day: string;
  "block age": number;
  "Block tx": number;
  "MA7 block tx": number;
  "AVG block age": number;
  "AVG block tx": number;
}

export interface TransactionsTXInfo {
  Day: string;
  "tx count": number;
  "Active users": number;
  fee: number;
  "Avg tx fee": number;
  "Success Rate": number;
  "MA7 tx count": number;
  "MA7 fee": number;
  "Cum tx count": number;
  "Cum fee": number;
  "AVG tx count": number;
  "AVG success rate": number;
  "AVG Active users": number;
  "AVG fee": number;
  "AVG tx fee per day": number;
}

export interface TransactionsNewWallet {
  Day: string;
  "New wallet": number;
  "Cum new wallet": number;
  "AVG New wallet": number;
}

export interface TransactionsTodayInfo {
  Day: string;
  "Today Transactions": number;
  "Previous Transactions": number;
  "change (%) Transactions": number;
  "Today Active Wallets": number;
  "Previous Active Wallets": number;
  "change (%) Active Wallets": number;
  "Today TX Fee": number;
  "Previous TX Fee": number;
  "change (%) TX Fee": number;
  "Today Success Rate": number;
  "Previous Success Rate": number;
  "change (%) Success Rate": number;
}
