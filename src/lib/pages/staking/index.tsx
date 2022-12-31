import { Box, SimpleGrid } from "@chakra-ui/react";
import { StatsCard } from "lib/components/charts/StateCard";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";
import { StakingProps } from "pages/staking";
import BarGraph from "lib/components/charts/BarGraph";
import DonutChart from "lib/components/charts/DonutChart";
import StackedAreaChart from "lib/components/charts/StackedAreaGraph";
import { StateCardRemoteData } from "lib/components/charts/StateCardRemoteData";
import HeaderSection from "lib/components/basic/HeaderSection";

const colors = [
  "#ff5722",
  "#03a9f4",
  "#ffc107",
  "#4caf50",
  "#00bcd4",
  "#f44336",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#009688",
  "#607d8b",
];

const Staking = ({}: StakingProps): JSX.Element => {
  // const averageweeklytxcounttxvolumeanduniqueusersNames =
  //   averageweeklytxcounttxvolumeanduniqueusers.title.split(",");

  return (
    <>
      <NextSeo
        title={`Near | Staking`}
        description={`Track the latest stats and trends on ${names.BLOCKCHAIN}`}
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `Near | Staking`,
          description: `Track the latest stats and trends on ${names.BLOCKCHAIN}`,
          images: [
            {
              url: `https://${names.SITE_URL}/og.png`,
              alt: `${names.APP_NAME} by Flipside Crypto and Setbap`,
            },
          ],
          site_name: `${names.APP_NAME}`,
        }}
        twitter={{
          handle: "@flipsidecrypto",
          cardType: "summary_large_image",
        }}
      />
      <Box mx={"auto"} pt="4" px={{ base: 3, sm: 2, md: 8 }}>
        <HeaderSection title="Near Staking ">
          {`
in this page we review all information all about staking in Near. after Near fall and brith of Near(2) most of Near's Airdroped to old user and this airdropd token 
divided in 4 part and just 1/4 of that availble for user and remaining staked and distributed according schadule

`}
        </HeaderSection>
        <Box pt={"4"}></Box>
        <HeaderSection title="Glance">
          {`
according section defined in above, i prepare some of static about these topics. all data came from Flipside data and with click of title of each item can see query these data in Flipside Crypto
`}
        </HeaderSection>
        <SimpleGrid
          my={"6"}
          columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          {/* <StateCardRemoteData
            url="https://phoenix-lcd.Near.dev/cosmos/staking/v1beta1/pool"
            link="https://docs.Near.money/develop/swagger"
            status="unchanged"
            title={"Not Bonded Token In Pool"}
            getStat={(data) => data.pool.not_bonded_tokens / 1e6}
          /> */}
        </SimpleGrid>
        <SimpleGrid
          my={"6"}
          columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          {/* <StatsCard
            stat={totalInfo.data.supplyTotal}
            title={"Total Supply"}
            status="inc"
            unit=""
            isExternalLink
            hasArrowIcon={false}
            link={totalInfo.key}
          /> */}
        </SimpleGrid>
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"6"}
          gap={4}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <HeaderSection title="Tops ">
            {`
review top information or actor or validators in Near
`}
          </HeaderSection>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Staking;
