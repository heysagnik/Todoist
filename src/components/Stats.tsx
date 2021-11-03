import { StatGroup, Container, Divider } from "@chakra-ui/react";
import React from "react";
import { VIEWPORT_WIDTH } from "../constants";
import { StatBox } from "./StatBox";

interface StatsProps {
  productiveTime: string;
  itemsAdded: number;
  itemsCompleted: number;
  timesEdited: number;
}

export const Stats: React.FC<StatsProps> = ({
  productiveTime,
  itemsAdded,
  itemsCompleted,
  timesEdited,
}) => {
  const max_width = `${
    (140 / 100) * Number(VIEWPORT_WIDTH.substr(0, VIEWPORT_WIDTH.length - 2))
  }px`;
  return (
    <Container
      maxW={max_width}
      as="footer"
      role="contentinfo"
      my="2vh"
      px={{ base: "4", md: "8" }}
    >
      <Divider mt={6} mb={6} />
      <StatGroup>
        <StatBox
          title="Active Session"
          value={productiveTime}
          type="increase"
          percentage="23.36%"
        />
        <StatBox
          title="Added"
          value={itemsAdded.toString() + " items"}
          type="decrease"
          percentage="9.05%"
        />
        <StatBox
          title="Completed"
          value={itemsCompleted.toString() + " items"}
          type="increase"
          percentage="12.26%"
        />

        <StatBox
          title="Edited"
          value={timesEdited.toString() + " times"}
          type="decrease"
          percentage="124.05%"
        />
      </StatGroup>
    </Container>
  );
};
