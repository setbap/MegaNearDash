import { Box, color, SimpleGrid } from "@chakra-ui/react";
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
import MultiChartBox from "lib/components/charts/MultiLineChart";
import ChartBox from "lib/components/charts/LineChart";

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

const Staking = ({
  stakingOvertime,
  stakingDailyAverage,
  stakingActiveStakingPool,
  stakingTop10PoolsTransaction,
  stakingTop10PoolsUniqueStakers,
  stakingTop10PoolsVolume,
  stakingTop10PoolsWithDayTransaction,
  stakingTop10PoolsWithDayUniqueStakers,
  stakingTop10PoolsWithDayUniqueVolume,
  stakingTop30HighestPools,
  stakingTopWallets,
}: StakingProps): JSX.Element => {
  const stakingOvertimeNames = stakingOvertime.title.split(",");
  const stakingDailyAverageNames = stakingDailyAverage.title.split(",");

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

`}
        </HeaderSection>
        <Box pt={"4"}></Box>

        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"6"}
          gap={4}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <HeaderSection title="Staking Over time" />
          {["cumTXCount", "tXCount", "cumVolume", "uniqueWallet", "volume"].map(
            (item, index) => (
              <StackedAreaChart
                key={index}
                values={stakingOvertime.data[item]}
                queryLink={stakingOvertime.key}
                modalInfo=""
                title={stakingOvertimeNames[index]}
                baseSpan={1}
                dataKey="Name"
                oyLabel="$Near"
                oxLabel="Action"
                labels={stakingOvertime.data.actions.map(
                  (item: string, index: number) => ({
                    key: item,
                    color: colors[index % colors.length],
                  })
                )}
              />
            )
          )}

          <HeaderSection title="Daily average" />
          {[
            "AVG TX volume",
            "AVG tx count",
            "AVG unique wallet",
            "AVG volume",
          ].map((item, index) => (
            <BarGraph
              key={item}
              values={stakingDailyAverage.data}
              queryLink={stakingDailyAverage.key}
              modalInfo=""
              isNotDate
              title={stakingDailyAverageNames[index]}
              baseSpan={1}
              dataKey="Actions"
              oyLabel="$Luna"
              oxLabel="Action"
              labels={[
                {
                  key: item,
                  color: colors[index],
                },
              ]}
            />
          ))}

          <HeaderSection title="Active Staking Pool" />
          <ChartBox
            baseSpan={3}
            customColor={colors[2]}
            xAxisDataKey={"Day"}
            areaDataKey={"Active Staking Pool"}
            title={stakingActiveStakingPool.title}
            queryLink={stakingActiveStakingPool.key}
            data={stakingActiveStakingPool.data}
          />

          <HeaderSection title="Top 10 pools" />
          <DonutChart
            queryLink={stakingTop10PoolsTransaction.key}
            data={stakingTop10PoolsTransaction.data}
            modalInfo=""
            baseSpan={1}
            title={stakingTop10PoolsTransaction.title}
            nameKey="Pool name"
            dataKey="tx count"
          />
          <DonutChart
            queryLink={stakingTop10PoolsUniqueStakers.key}
            data={stakingTop10PoolsUniqueStakers.data}
            modalInfo=""
            baseSpan={1}
            title={stakingTop10PoolsUniqueStakers.title}
            nameKey="Pool name"
            dataKey="Unique wallet"
          />
          <DonutChart
            queryLink={stakingTop10PoolsVolume.key}
            data={stakingTop10PoolsVolume.data}
            modalInfo=""
            baseSpan={1}
            title={stakingTop10PoolsVolume.title}
            nameKey="Pool name"
            dataKey="Volume"
          />

          <HeaderSection title="Weekly top 10 pools" />

          <BarGraph
            values={stakingTop10PoolsWithDayTransaction.data.txCount}
            queryLink={stakingTop10PoolsWithDayTransaction.key}
            modalInfo=""
            title={stakingTop10PoolsWithDayTransaction.title}
            baseSpan={3}
            dataKey="Name"
            oyLabel=""
            oxLabel="Day"
            hideLegend
            labels={stakingTop10PoolsWithDayTransaction.data.actions.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />

          <BarGraph
            values={stakingTop10PoolsWithDayUniqueStakers.data.uniqueWallet}
            queryLink={stakingTop10PoolsWithDayUniqueStakers.key}
            modalInfo=""
            title={stakingTop10PoolsWithDayUniqueStakers.title}
            baseSpan={3}
            dataKey="Name"
            oyLabel=""
            oxLabel="Day"
            hideLegend
            labels={stakingTop10PoolsWithDayUniqueStakers.data.actions.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />

          <BarGraph
            values={stakingTop10PoolsWithDayUniqueVolume.data.volume}
            queryLink={stakingTop10PoolsWithDayUniqueVolume.key}
            modalInfo=""
            title={stakingTop10PoolsWithDayUniqueVolume.title}
            baseSpan={3}
            dataKey="Name"
            oyLabel=""
            oxLabel="Day"
            hideLegend
            labels={stakingTop10PoolsWithDayUniqueVolume.data.actions.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />

          <HeaderSection title="Top 30 pools based on current balance" />
          <BarGraph
            values={stakingTop30HighestPools.data}
            queryLink={stakingTop30HighestPools.key}
            isNotDate
            modalInfo=""
            title={stakingTop30HighestPools.title}
            baseSpan={3}
            dataKey="Pool name"
            oyLabel=""
            oxLabel="Pool name"
            hideLegend
            labels={[
              {
                key: "Current stake amount",
                color: colors[2],
              },
            ]}
          />

          <HeaderSection title="Top stakers" />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Staking;
