"use client";
import {
    Card,
    Metric,
    Text,
    List,
    ListItem,
    BadgeDelta,
    Flex,
    Bold,
    Grid
  } from "@tremor/react"
  
  const sales = [
    {
      name: "Switzerland",
      stat: "18.3%",
      status: "increase"
    },
    {
      name: "Germany",
      stat: "8.3%",
      status: "moderateIncrease"
    },
    {
      name: "Italy",
      stat: "1.6%",
      status: "unchanged"
    },
    {
      name: "France",
      stat: "-5.1%",
      status: "moderateDecrease"
    }
  ]
  
  const profit = [
    {
      name: "Switzerland",
      stat: "1.3%",
      status: "unchanged"
    },
    {
      name: "Germany",
      stat: "3.3%",
      status: "moderateIncrease"
    },
    {
      name: "Italy",
      stat: "2.6%",
      status: "moderateIncrease"
    },
    {
      name: "France",
      stat: "-8.2%",
      status: "decrease"
    }
  ]
  
  const customers = [
    {
      name: "Switzerland",
      stat: "-6.3%",
      status: "moderateDecrease"
    },
    {
      name: "Germany",
      stat: "6.7%",
      status: "increase"
    },
    {
      name: "Italy",
      stat: "2.9%",
      status: "moderateIncrease"
    },
    {
      name: "France",
      stat: "1.2%",
      status: "unchanged"
    }
  ]
  
  const categories = [
    {
      title: "Sales",
      metric: "$ 23,456",
      data: sales
    },
    {
      title: "Profit",
      metric: "$ 16,450",
      data: profit
    },
    {
      title: "Customers",
      metric: "456",
      data: customers
    }
  ]
  
  export default function KPIS() {
    return (
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        {categories.map(item => (
          <Card key={item.title}>
            <Text>{item.title}</Text>
            <Metric>{item.metric}</Metric>
            <Flex className="mt-6">
              <Text>
                <Bold>Country</Bold>
              </Text>
              <Text>
                <Bold>WoW (%)</Bold>
              </Text>
            </Flex>
            <List className="mt-1">
              {item.data.map(country => (
                <ListItem key={country.name}>
                  <Flex justifyContent="start" className="truncate space-x-2.5">
                    <BadgeDelta deltaType={country.status} />
                    <Text className="truncate">{country.name}</Text>
                  </Flex>
                  <Text>{country.stat}</Text>
                </ListItem>
              ))}
            </List>
          </Card>
        ))}
      </Grid>
    )
  }
  