import {
  NFTCollectionsTransactions,
  NFTCollectionsUniqueBuyers,
  NFTCollectionsVolume,
  NFTMarketplaceComparison,
  NFTSelling,
  NFTTotalDailyInfo,
  NFTTotalInfo,
} from "lib/types/types/nfts";
import { getSimpleArrayData, getSimpleInfo } from "./utils";

export const getNFTTotalInfo = () =>
  getSimpleInfo<NFTTotalInfo>(
    "4a933e9a-2d95-45bc-996b-6b0592df41ef",
    "Total Sales Volume (in USD),Total Unique Buyers,Total Unique Sellers,Total Sales Count"
  );

export const getNFTTotalDailyInfo = () =>
  getSimpleInfo<NFTTotalDailyInfo>(
    "5e13bc8c-8a5d-427f-b0f9-7bb27c078ebf",
    "Daily Sales Volume (in USD),Daily NFT Price (in USD),Daily Sales Count,Daily Unique Buyers,Daily Unique Sellers"
  );

export const getNFTSelling = () =>
  getSimpleArrayData<NFTSelling, NFTSelling>(
    "62d913fe-edc2-489e-9ea0-f21b9fe12c6a",
    "Weekly volume (in USD) of NFTs sold,Cumulative volume (in USD) of NFTs sold,Cumulative number of NFTs sold,Weekly average NFT price (in USD),Weekly number of NFT buyers Vsellers,Weekly number of NFTs sold",
    "Day"
  );

export const getNFTMarketplaceComparison = () =>
  getSimpleArrayData<NFTMarketplaceComparison, NFTMarketplaceComparison>(
    "7aaca9ac-950b-4f64-900a-7d928e6c136e",
    "Marketplaces share in volume of sale,Marketplaces share in number of sale"
  );

export const getNFTCollectionsTransactions = () =>
  getSimpleArrayData<NFTCollectionsTransactions, NFTCollectionsTransactions>(
    "ff8678a9-f15a-4d4e-9f06-01637da801f6",
    "Top 10 NFT collections based on sold count"
  );

export const getNFTCollectionsVolume = () =>
  getSimpleArrayData<NFTCollectionsVolume, NFTCollectionsVolume>(
    "dece9d6e-7d41-4420-b682-34c203f64e9f",
    "Top 10 NFT collections based on volume"
  );

export const getNFTCollectionsUniqueBuyers = () =>
  getSimpleArrayData<NFTCollectionsUniqueBuyers, NFTCollectionsUniqueBuyers>(
    "76e22612-5aee-4c96-ae5d-d0ef1b062921",
    "Top 10 NFT collections based on unique buyers"
  );
