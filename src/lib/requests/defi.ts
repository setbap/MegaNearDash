import { ReturnDataType } from "lib/types/base";
import { DeFi1TotalSingleNumber, DeFi2DailySingleNumber, DeFi3TodayChanges, DeFi4SwappingOverTime, DeFi5TopSwappingFromAssetsTransactions, DeFi5TopSwappingFromAssetsUniqueSwappers, DeFi5TopSwappingFromAssetsVolume, DeFi6TopSwappingToAssetsTransactions, DeFi6TopSwappingToAssetsUniqueSwappers, DeFi6TopSwappingToAssetsVolume, DeFi7TopSwappingPairsTransactions, DeFi7TopSwappingPairsUniqueSwappers, DeFi7TopSwappingPairsVolume, DeFi8WeeklyTop10SwappingPairsTransactions, DeFi8WeeklyTop10SwappingPairsUniqueSwappers, DeFi8WeeklyTop10SwappingPairsVolume, DeFi9DEXsComparison } from "lib/types/types/defi";

import {
  getSimpleArrayData,
  getSimpleInfo,
  pivotData,
  summerizeRow,
} from "./utils";

export const getDeFi1TotalSingleNumber = () =>
  getSimpleInfo<DeFi1TotalSingleNumber>(
    "cb24b7e7-94a7-4a21-8005-41f077d63528",
    "Total Swap Transactions,Total Unique Swappers,Total Swap Volume(in USD)"
  );

export const getDeFi2DailySingleNumber = () =>
  getSimpleInfo<DeFi2DailySingleNumber>(
    "b5beaf23-e198-4414-99fa-b5d3686f8c0c",
    "Daily Swap size(in USD),Daily Unique Swappers,Daily Swap Volume(in USD),Daily Swap Transactions"
  );

export const getDeFi3TodayChanges = () =>
  getSimpleInfo<DeFi3TodayChanges>(
    "4d824d1a-13de-4dde-9fa4-8745b7225e71",
    "24h Swap Count,24h Unique Swapper,24h Volume (in USD)"
  );


export const getDeFi4SwappingOverTime = () =>
  getSimpleArrayData<
    DeFi4SwappingOverTime,
    DeFi4SwappingOverTime
  >(
    "c53f36f3-26c5-462e-ab99-908e506a5828",
    "Weekly average swap size(in USD),Cumulative volume of swap transactions(in USD),Cumulative number of swap transactions,Weekly number of unique swappers,Weekly volume of swap transactions,Weekly number of swap transactions"
  );


export const getDeFi5TopSwappingFromAssetsTransactions = () =>
  getSimpleArrayData<
    DeFi5TopSwappingFromAssetsTransactions,
    DeFi5TopSwappingFromAssetsTransactions
  >(
    "cca9ec24-2e5a-441c-8f91-d144d0fa5f1d",
    "Top swapping from assets based on transactions"
  );


export const getDeFi5TopSwappingFromAssetsUniqueSwappers = () =>
  getSimpleArrayData<
    DeFi5TopSwappingFromAssetsUniqueSwappers,
    DeFi5TopSwappingFromAssetsUniqueSwappers
  >(
    "ce8b232a-ab5b-43d6-a098-50482ff083b9",
    "Top swapping from assets based on unique swappers"
  );


export const getDeFi5TopSwappingFromAssetsVolume = () =>
  getSimpleArrayData<
    DeFi5TopSwappingFromAssetsVolume,
    DeFi5TopSwappingFromAssetsVolume
  >(
    "53535720-a965-4007-b026-74b0053c6338",
    "Top swapping from assets based on volume"
  );

export const getDeFi6TopSwappingToAssetsTransactions = () =>
  getSimpleArrayData<
    DeFi6TopSwappingToAssetsTransactions,
    DeFi6TopSwappingToAssetsTransactions
  >(
    "5eb9f820-58f5-442c-bcaa-d36e2aceaa96",
    "Top swapping to assets based on transactions"
  );


export const getDeFi6TopSwappingToAssetsUniqueSwappers = () =>
  getSimpleArrayData<
    DeFi6TopSwappingToAssetsUniqueSwappers,
    DeFi6TopSwappingToAssetsUniqueSwappers
  >(
    "8a59cce1-8c10-4911-9c6c-db94d159631c",
    "Top swapping to assets based on unique swappers"
  );


export const getDeFi6TopSwappingToAssetsVolume = () =>
  getSimpleArrayData<
    DeFi6TopSwappingToAssetsVolume,
    DeFi6TopSwappingToAssetsVolume
  >(
    "c2f48c27-41a6-4856-a34c-bf9e4e1d35fe",
    "Top swapping to assets based on volume"
  );


export const getDeFi7TopSwappingPairsTransactions = () =>
  getSimpleArrayData<
    DeFi7TopSwappingPairsTransactions,
    DeFi7TopSwappingPairsTransactions
  >(
    "7c31fe87-28c1-43bb-97ac-7c8baa6e0ab9",
    "Top swapping pairs based on transactions"
  );


export const getDeFi7TopSwappingPairsUniqueSwappers = () =>
  getSimpleArrayData<
    DeFi7TopSwappingPairsUniqueSwappers,
    DeFi7TopSwappingPairsUniqueSwappers
  >(
    "1b9a0c04-9d5e-43ff-85d0-3e83e2a090c5",
    "Top swapping pairs based on unique swappers"
  );


export const getDeFi7TopSwappingPairsVolume = () =>
  getSimpleArrayData<
    DeFi7TopSwappingPairsVolume,
    DeFi7TopSwappingPairsVolume
  >(
    "c8ffa2d2-fdbb-4cf1-bca1-bdebe1367470",
    "Top swapping pairs based on volume"
  );


export const _getDeFi8WeeklyTop10SwappingPairsTransactions = () =>
  getSimpleArrayData<
    DeFi8WeeklyTop10SwappingPairsTransactions,
    DeFi8WeeklyTop10SwappingPairsTransactions
  >(
    "9408011b-d21d-402c-9cf1-88e1373b739d",
    "Weekly top 10 swapping pairs based on transactions"
  );

export const getDeFi8WeeklyTop10SwappingPairsTransactions: () => Promise<
  ReturnDataType<any>
> = async () => {
  const rawData = await _getDeFi8WeeklyTop10SwappingPairsTransactions();

  const pairs = Array.from(
    new Set(
      rawData.data.map((item) => {
        return item["Pair"];
      })
    )
  );
  const swapCount = pivotData(
    rawData.data,
    "Day",
    "Pair",
    "Swap Count",
    pairs,
    0
  );

  return {
    data: {
      swapCount,
      pairs,
    },
    key: rawData.key,
    title: rawData.title,
  };
};


export const _getDeFi8WeeklyTop10SwappingPairsUniqueSwappers = () =>
  getSimpleArrayData<
    DeFi8WeeklyTop10SwappingPairsUniqueSwappers,
    DeFi8WeeklyTop10SwappingPairsUniqueSwappers
  >(
    "aa6441e8-2099-4888-b035-e31dc0a63c6d",
    "Weekly top 10 swapping pairs based on unique swappers"
  );
export const getDeFi8WeeklyTop10SwappingPairsUniqueSwappers: () => Promise<
  ReturnDataType<any>
> = async () => {
  const rawData = await _getDeFi8WeeklyTop10SwappingPairsUniqueSwappers();

  const pairs = Array.from(
    new Set(
      rawData.data.map((item) => {
        return item["Pair"];
      })
    )
  );
  const uniqueSwapper = pivotData(
    rawData.data,
    "Day",
    "Pair",
    "Unique Swapper",
    pairs,
    0
  );

  return {
    data: {
      uniqueSwapper,
      pairs,
    },
    key: rawData.key,
    title: rawData.title,
  };
};

export const _getDeFi8WeeklyTop10SwappingPairsVolume = () =>
  getSimpleArrayData<
    DeFi8WeeklyTop10SwappingPairsVolume,
    DeFi8WeeklyTop10SwappingPairsVolume
  >(
    "e2c3c14c-fd21-46e9-a437-50807d9769ea",
    "Weekly top 10 swapping pairs based on volume"
  );
export const getDeFi8WeeklyTop10SwappingPairsVolume: () => Promise<
  ReturnDataType<any>
> = async () => {
  const rawData = await _getDeFi8WeeklyTop10SwappingPairsVolume();

  const pairs = Array.from(
    new Set(
      rawData.data.map((item) => {
        return item["Pair"];
      })
    )
  );
  const volume = pivotData(
    rawData.data,
    "Day",
    "Pair",
    "Volume",
    pairs,
    0
  );

  return {
    data: {
      volume,
      pairs,
    },
    key: rawData.key,
    title: rawData.title,
  };
};


export const getDeFi9DEXsComparison = () =>
  getSimpleArrayData<
    DeFi9DEXsComparison,
    DeFi9DEXsComparison
  >(
    "7b8c0366-579b-4b8f-be86-3ed8e32723c1",
    "DEXs share in number of transactions,DEXs share in volume of transactions,DEXs share in unique user of transactions"
  );