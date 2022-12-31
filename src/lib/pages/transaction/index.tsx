import { Box, SimpleGrid } from "@chakra-ui/react";
import ChartBox from "lib/components/charts/LineChart";
import { StatsCard } from "lib/components/charts/StateCard";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import { TransactionsProps } from "pages";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";
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

const Governance = ({}: TransactionsProps): JSX.Element => {
  // const transactionsFeeNames = transactionsFee.title.split(",");

  return (
    <>
      <NextSeo
        title={`Near | Transactions`}
        description={`Track the latest stats and trends on ${names.BLOCKCHAIN}`}
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `Near  | Transactions`,
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
        <HeaderSection title="Near Transaction">
          {`
in this page we review all information about Near Transaction in three topic:
- Transaction Count and Status
- Transaction Fee
- Transaction Per Second (TPS)
- Age of Blocks
but before deep dive into chart i prepare some statics to see status of network at the glance.
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
            stat={
              transactionsTxCountAndSuccess.data.at(-1)?.["AVG success rate"]!
            }
            title={transactionsTxCountAndSuccessNames[0]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsTxCountAndSuccess.key}
          /> */}
        </SimpleGrid>
        <HeaderSection title="Transaction Count and Status">
          {`
####  
transaction status define as whether a transaction successfully done or transaction doesn't completed of failed. the reasons for failing transaction are varying from lack of gas fee and authorization problem.
`}
        </HeaderSection>
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"6"}
          gap={4}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        ></SimpleGrid>
      </Box>
    </>
  );
};

export default Governance;
