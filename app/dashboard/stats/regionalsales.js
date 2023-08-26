"use client";
import {
  ProgressBar,
  Card,
  Flex,
  Text,
  Metric,
  TabList,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
} from "@tremor/react";

import { useState } from "react";

export default function RegionalSales() {
  return (
    <div className="my-4 mx-auto">
      <Card>
        <Text>Total Sales</Text>
        <Metric>$ 442,276</Metric>
        <TabGroup>
          <TabList className="mt-8">
            <Tab>America</Tab>
            <Tab>International</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="mt-10">
                <Flex className="mt-4">
                  <Text className="w-full">Product Y</Text>
                  <Flex className="space-x-2" justifyContent="end">
                    <Text>$ 108,799</Text>
                    <Text>38%</Text>
                  </Flex>
                </Flex>
                <ProgressBar value={38} className="mt-2" />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-10">
                <Flex className="mt-4">
                  <Text className="w-full">Product Z</Text>
                  <Flex className="space-x-2" justifyContent="end">
                    <Text>$ 99,484</Text>
                    <Text>16%</Text>
                  </Flex>
                </Flex>
                <ProgressBar value={12} className="mt-2" />
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Card>
    </div>
  );
}
