import { Box, SimpleGrid } from "@chakra-ui/react";
import ChartBox from "lib/components/charts/LineChart";
import { StatsCard } from "lib/components/charts/StateCard";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import { SupplyProps } from "pages/supply";
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

const Development = ({
  supplyOverTime,
  supplyTotal,
}: SupplyProps): JSX.Element => {
  // const developmentMostUsedContractsNames =
  //   developmentMostUsedContracts.title.split(",");

  return (
    <>
      <NextSeo
        title={`Near | Supply`}
        description={`Track the latest stats and trends on ${names.BLOCKCHAIN}`}
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `Near  | Supply`,
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
        <HeaderSection title="Near Supply">
          {`
* **Total supply:** Total supply of a token refers to the total number of coins or tokens that currently exist and are either in circulation or locked somehow. it can be determined by adding the circulating supply to the number of coins that have been mined but not yet distributed in the market.

* **Circulating supply:** Circulating supply is the total number of coins or tokens that are actively available for trade and are being used in the market and in general public. This value fluctuates over time, as tokens can be minted, burned, or locked up as part of a project's protocol or roadmap.

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
          <StatsCard
            stat={supplyTotal.data["Total Supply"]}
            title={supplyTotal.title}
            status="inc"
            hasArrowIcon={false}
            link={supplyTotal.key}
          />
        </SimpleGrid>

        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          pb={"6"}
          gap={4}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <HeaderSection title="Total supply over time" />

          <ChartBox
            xAxisDataKey={"Day"}
            customColor={colors[4]}
            areaDataKey={"Total Supply"}
            title={supplyOverTime.title}
            queryLink={supplyOverTime.key}
            data={supplyOverTime.data}
            baseSpan={3}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Development;
