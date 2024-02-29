import React, { useState, useEffect } from "react";
import { Box, Container, Heading, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Image, Center, VStack, Text } from "@chakra-ui/react";
import { FaHeartbeat, FaWalking, FaBed, FaBurn } from "react-icons/fa";

// Simulated function to fetch real user health data
function fetchHealthData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        heartRate: 68, // bpm
        steps: 10234,
        sleepHours: 8.2,
        caloriesBurned: 650,
      });
    }, 1000);
  });
}

const Index = () => {
  const [healthData, setHealthData] = useState({
    heartRate: 0, // bpm
    steps: 0,
    sleepHours: 0,
    caloriesBurned: 0,
  });

  useEffect(() => {
    fetchHealthData().then((data) => {
      setHealthData(data);
    });
  }, []); // Added missing closing bracket

  return (
    <Container maxW="container.xl" py={10}>
      <Heading mb={6}>My Health Dashboard</Heading>
      <Box boxShadow="md" p={5} borderRadius="md" bg="white">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {/* Heart Rate */}
          <Stat>
            <Center>
              <FaHeartbeat size="3rem" color="#E53E3E" />
            </Center>
            <StatLabel mt={3}>Heart Rate</StatLabel>
            <StatNumber>{healthData.heartRate} bpm</StatNumber>
            <StatHelpText>Resting</StatHelpText>
          </Stat>

          {/* Steps */}
          <Stat>
            <Center>
              <FaWalking size="3rem" color="#48BB78" />
            </Center>
            <StatLabel mt={3}>Steps</StatLabel>
            <StatNumber>{healthData.steps}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              Today
            </StatHelpText>
          </Stat>

          {/* Sleep */}
          <Stat>
            <Center>
              <FaBed size="3rem" color="#4299E1" />
            </Center>
            <StatLabel mt={3}>Sleep</StatLabel>
            <StatNumber>{healthData.sleepHours} hrs</StatNumber>
            <StatHelpText>Last night</StatHelpText>
          </Stat>

          {/* Calories */}
          <Stat>
            <Center>
              <FaBurn size="3rem" color="#ED8936" />
            </Center>
            <StatLabel mt={3}>Calories Burned</StatLabel>
            <StatNumber>{healthData.caloriesBurned}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              Today
            </StatHelpText>
          </Stat>
        </SimpleGrid>
      </Box>

      <VStack spacing={5} mt={10}>
        <Heading size="md">Recent Activities</Heading>
        <Image borderRadius="md" src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHdhdGNoJTIwZml0bmVzc3xlbnwwfHx8fDE3MDkyMjQxMDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Fitness Activity" />
        <Text>Keep up with your fitness goals by reviewing your recent activities.</Text>
      </VStack>
    </Container>
  );
};

export default Index;
