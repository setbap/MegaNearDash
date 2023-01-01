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

const Governance = ({
  transactionsAVGInfo,
  transactionsTotalInfo,
  transactionsTPS,
  transactionsBlockAge,
  transactionsTXInfo,
  transactionsNewWallet,
  transactionsTodayInfo,
}: TransactionsProps): JSX.Element => {
  const transactionsAVGInfoNames = transactionsAVGInfo.title.split(",");
  const transactionsTotalInfoNames = transactionsTotalInfo.title.split(",");
  const transactionsTPSNames = transactionsTPS.title.split(",");
  const transactionsBlockAgeNames = transactionsBlockAge.title.split(",");
  const transactionsTXInfoNames = transactionsTXInfo.title.split(",");
  const transactionsNewWalletNames = transactionsNewWallet.title.split(",");
  const transactionsTodayInfoNames = transactionsTodayInfo.title.split(",");

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
          {/* first */}
          <StatsCard
            stat={transactionsAVGInfo.data["AVG Active users"]}
            title={transactionsAVGInfoNames[0]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsAVGInfo.key}
          />

          <StatsCard
            stat={transactionsAVGInfo.data["AVG fee"]}
            title={transactionsAVGInfoNames[1]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsAVGInfo.key}
          />

          <StatsCard
            stat={transactionsAVGInfo.data["AVG tx fee per day"]}
            title={transactionsAVGInfoNames[2]}
            decimal={3}
            status="inc"
            hasArrowIcon={false}
            link={transactionsAVGInfo.key}
          />

          <StatsCard
            stat={transactionsAVGInfo.data["AVG tx count"]}
            title={transactionsAVGInfoNames[3]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsAVGInfo.key}
          />

          <StatsCard
            stat={transactionsAVGInfo.data["AVG success rate"]}
            title={transactionsAVGInfoNames[4]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsAVGInfo.key}
          />
          {/* second */}

          <StatsCard
            stat={transactionsTotalInfo.data.fee}
            title={transactionsTotalInfoNames[0]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsTotalInfo.key}
          />

          <StatsCard
            stat={transactionsTotalInfo.data["Active users"]}
            title={transactionsTotalInfoNames[1]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsTotalInfo.key}
          />

          <StatsCard
            stat={transactionsTotalInfo.data["tx count"]}
            title={transactionsTotalInfoNames[2]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsTotalInfo.key}
          />

          <StatsCard
            stat={transactionsTPS.data.at(-1)?.["AVG TPS"] ?? 6}
            title={transactionsTPSNames[1]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsTPS.key}
          />

          <StatsCard
            stat={transactionsBlockAge.data.at(-1)?.["AVG block age"] ?? 1.2}
            title={transactionsBlockAgeNames[1]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsBlockAge.key}
          />

          <StatsCard
            stat={transactionsBlockAge.data.at(-1)?.["AVG block tx"] ?? 6.7}
            title={transactionsBlockAgeNames[3]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsBlockAge.key}
          />

          <StatsCard
            stat={transactionsNewWallet.data.at(-1)?.["AVG New wallet"] ?? 76.4}
            title={transactionsNewWalletNames[2]}
            status="inc"
            hasArrowIcon={false}
            link={transactionsNewWallet.key}
          />
        </SimpleGrid>

        <HeaderSection title="Today Changes" />
        <SimpleGrid
          my={"6"}
          columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <StatsCard
            stat={transactionsTodayInfo.data["Today Transactions"]}
            title={transactionsTodayInfoNames[0]}
            status={
              transactionsTodayInfo.data["change (%) Transactions"] >= 0
                ? "inc"
                : "dec"
            }
            change={transactionsTodayInfo.data["change (%) Transactions"]}
            changeUnit={"%"}
            hasArrowIcon={false}
            link={transactionsTodayInfo.key}
          />

          <StatsCard
            stat={transactionsTodayInfo.data["Today Active Wallets"]}
            title={transactionsTodayInfoNames[1]}
            status={
              transactionsTodayInfo.data["change (%) Active Wallets"] >= 0
                ? "inc"
                : "dec"
            }
            change={transactionsTodayInfo.data["change (%) Active Wallets"]}
            changeUnit={"%"}
            hasArrowIcon={false}
            link={transactionsTodayInfo.key}
          />

          <StatsCard
            stat={transactionsTodayInfo.data["Today TX Fee"]}
            title={transactionsTodayInfoNames[2]}
            status={
              transactionsTodayInfo.data["change (%) TX Fee"] >= 0
                ? "inc"
                : "dec"
            }
            change={transactionsTodayInfo.data["change (%) TX Fee"]}
            changeUnit={"%"}
            hasArrowIcon={false}
            link={transactionsTodayInfo.key}
          />

          <StatsCard
            stat={transactionsTodayInfo.data["Today Success Rate"]}
            title={transactionsTodayInfoNames[3]}
            status={
              transactionsTodayInfo.data["change (%) Success Rate"] >= 0
                ? "inc"
                : "dec"
            }
            change={transactionsTodayInfo.data["change (%) Success Rate"]}
            changeUnit={"%"}
            hasArrowIcon={false}
            link={transactionsTodayInfo.key}
          />
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
        >
          <LineChartWithBar
            data={transactionsTPS.data}
            queryLink={transactionsTPS.key}
            title={transactionsTPSNames[0]}
            baseSpan={3}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"TPS"}
            lineDataKey="AVG TPS"
          />

          <LineChartWithBar
            data={transactionsBlockAge.data}
            queryLink={transactionsBlockAge.key}
            title={transactionsBlockAgeNames[0]}
            baseSpan={3}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"Block tx"}
            additionalLineKey={["MA7 block tx"]}
            lineDataKey="AVG Block tx"
          />

          <LineChartWithBar
            data={transactionsBlockAge.data}
            queryLink={transactionsBlockAge.key}
            title={transactionsBlockAgeNames[0]}
            baseSpan={3}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"block age"}
            lineDataKey="AVG block age"
          />

          <LineChartWithBar
            data={transactionsTXInfo.data}
            queryLink={transactionsTXInfo.key}
            title={transactionsTXInfoNames[0]}
            baseSpan={3}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"fee"}
            additionalLineKey={["MA7 fee"]}
            lineDataKey="AVG fee"
          />

          <LineChartWithBar
            data={transactionsTXInfo.data}
            queryLink={transactionsTXInfo.key}
            title={transactionsTXInfoNames[1]}
            baseSpan={3}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"Avg tx fee"}
            lineDataKey="AVG tx fee per day"
          />

          <LineChartWithBar
            data={transactionsTXInfo.data}
            queryLink={transactionsTXInfo.key}
            title={transactionsTXInfoNames[2]}
            baseSpan={3}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"Active users"}
            lineDataKey="AVG Active users"
          />

          <LineChartWithBar
            data={transactionsTXInfo.data}
            queryLink={transactionsTXInfo.key}
            title={transactionsTXInfoNames[3]}
            baseSpan={3}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"tx count"}
            lineDataKey="AVG tx count"
            additionalLineKey={["MA7 tx count"]}
          />

          <ChartBox
            data={transactionsTXInfo.data}
            queryLink={transactionsTXInfo.key}
            title={transactionsTXInfoNames[4]}
            baseSpan={3}
            customColor={colors[0]}
            xAxisDataKey="Day"
            areaDataKey="Cum tx count"
          />

          <LineChartWithBar
            data={transactionsTXInfo.data}
            queryLink={transactionsTXInfo.key}
            title={transactionsTXInfoNames[5]}
            baseSpan={3}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"Success Rate"}
            lineDataKey="AVG Success Rate"
          />

          <LineChartWithBar
            data={transactionsNewWallet.data}
            queryLink={transactionsNewWallet.key}
            title={transactionsNewWalletNames[0]}
            baseSpan={3}
            customColor={colors[0]}
            barColor={colors[2]}
            xAxisDataKey="Day"
            barDataKey={"New wallet"}
            lineDataKey="AVG New wallet"
          />

          <ChartBox
            data={transactionsNewWallet.data}
            queryLink={transactionsNewWallet.key}
            title={transactionsNewWalletNames[1]}
            baseSpan={3}
            customColor={colors[0]}
            xAxisDataKey="Day"
            areaDataKey="Cum new wallet"
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Governance;
