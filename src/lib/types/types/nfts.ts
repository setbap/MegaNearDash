export interface NFTTotalInfo {
  "Total Sales Volume (in USD)": number;
  "Total Unique Buyers": number;
  "Total Unique Sellers": number;
  "Total Sales Count": number;
}

export interface NFTTotalDailyInfo {
  "Daily Sales Volume (in USD)": number;
  "Daily NFT Price (in USD)": number;
  "Daily Sales Count": number;
  "Daily Unique Buyers": number;
  "Daily Unique Sellers": number;
}

export interface NFTSelling {
  Day: string;
  "Sales Volume": number;
  "AVG NFT Price": number;
  "Unique Buyers": number;
  "Unique Sellers": number;
  "Sales Count": number;
  "MA7 Sales Volume": number;
  "MA7 Sales Count": number;
  "MA7 AVG NFT Price": number;
  "Cum Sales Volume": number;
  "Cum Sales Count": number;
  "AVG Sales Volume": number;
  "Total AVG NFT Price": number;
  "AVG Sales Count": number;
}

export interface NFTMarketplaceComparison {
  Marketplace: string;
  "Sales Volume": number;
  "AVG NFT Price": number;
  "Unique Buyers": number;
  "Unique Sellers": number;
  "Sales Count": number;
}

export interface NFTCollectionsTransactions {
  "Collection Name": string;
  "Sales Count": number;
}

export interface NFTCollectionsUniqueBuyers {
  "Collection Name": string;
  "Unique Buyers": number;
}

export interface NFTCollectionsVolume {
  "Collection Name": string;
  "Sales Volume": number;
  "AVG NFT Price": number;
  "Unique Buyers": number;
  "Unique Sellers": number;
  "Sales Count": number;
}
