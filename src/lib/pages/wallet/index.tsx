import { Box, SimpleGrid } from "@chakra-ui/react";
import ChartBox from "lib/components/charts/LineChart";
import { StatsCard } from "lib/components/charts/StateCard";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";

import LineChartWithBar from "lib/components/charts/LineChartWithBar";
import { WalletProps } from "pages/wallet";
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

const Governance = ({}: WalletProps): JSX.Element => {
  // const walletsActiveNames = walletsActive.title.split(",");

  return (
    <>
      <NextSeo
        title={`Near | Wallets`}
        description={`Track the latest stats and trends on ${names.BLOCKCHAIN}`}
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `Near | Wallets`,
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
        <HeaderSection title="Near Wallet ">
          {`
in this page we review all information users(addresses) that currently done t transaction in Near to see what is status of Near from user side. Near addresses reviewed from two side:
- Active wallets
- new wallets
all of above information calculated as weekly TimeFrame.
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
          {/* <StatsCard
            stat={walletsNew.data.at(-1)?.["AVG New wallet"]!}
            title={walletsNewNames[2]}
            status="inc"
            hasArrowIcon={false}
            link={walletsNew.key}
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
          <HeaderSection title="Active Wallets">
            {`
number of active wallets is one of most important metrics for reviewing is one network work currently and has wired function
`}
          </HeaderSection>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Governance;
