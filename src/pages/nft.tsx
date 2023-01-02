import NFT from "lib/pages/nft";
import {
  getNFTCollectionsTransactions,
  getNFTCollectionsUniqueBuyers,
  getNFTCollectionsVolume,
  getNFTMarketplaceComparison,
  getNFTSelling,
  getNFTTotalDailyInfo,
  getNFTTotalInfo,
} from "lib/requests/nft";
import { ReturnDataType } from "lib/types/base";
import {
  NFTCollectionsTransactions,
  NFTCollectionsUniqueBuyers,
  NFTCollectionsVolume,
  NFTMarketplaceComparison,
  NFTSelling,
  NFTTotalDailyInfo,
  NFTTotalInfo,
} from "lib/types/types/nfts";

export async function getStaticProps() {
  const [
    nFTTotalInfo,
    nFTTotalDailyInfo,
    nFTSelling,
    nFTMarketplaceComparison,
    nFTCollectionsTransactions,
    nFTCollectionsVolume,
    nFTCollectionsUniqueBuyers,
  ] = await Promise.all([
    getNFTTotalInfo(),
    getNFTTotalDailyInfo(),
    getNFTSelling(),
    getNFTMarketplaceComparison(),
    getNFTCollectionsTransactions(),
    getNFTCollectionsVolume(),
    getNFTCollectionsUniqueBuyers(),
  ]);

  return {
    props: {
      nFTTotalInfo,
      nFTTotalDailyInfo,
      nFTSelling,
      nFTMarketplaceComparison,
      nFTCollectionsTransactions,
      nFTCollectionsVolume,
      nFTCollectionsUniqueBuyers,
    },
    revalidate: 10 * 60,
  };
}

export interface NFTProps {
  nFTTotalInfo: ReturnDataType<NFTTotalInfo>;
  nFTTotalDailyInfo: ReturnDataType<NFTTotalDailyInfo>;
  nFTSelling: ReturnDataType<NFTSelling[]>;
  nFTMarketplaceComparison: ReturnDataType<NFTMarketplaceComparison[]>;
  nFTCollectionsTransactions: ReturnDataType<NFTCollectionsTransactions[]>;
  nFTCollectionsVolume: ReturnDataType<NFTCollectionsVolume[]>;
  nFTCollectionsUniqueBuyers: ReturnDataType<NFTCollectionsUniqueBuyers[]>;
}

export default NFT;
