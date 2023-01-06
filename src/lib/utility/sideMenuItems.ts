import { GiMeepleCircle, GiProfit } from "react-icons/gi";
import { BsCodeSquare, BsFileEarmarkImage } from "react-icons/bs";
import { BiTransferAlt } from "react-icons/bi";
import { AiOutlineSwap } from "react-icons/ai";

export default [
  { name: "Transactions", path: "/", icon: BiTransferAlt },
  { name: "Staking", path: "/staking", icon: GiProfit },
  { name: "Supply", path: "/supply", icon: GiMeepleCircle },
  { name: "Defi", path: "/defi", icon: AiOutlineSwap },
  { name: "NFT", path: "/nft", icon: BsFileEarmarkImage },
  { name: "Development", path: "/development", icon: BsCodeSquare },
];
