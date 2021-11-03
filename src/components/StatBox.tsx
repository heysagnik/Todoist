import {
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MotionStat } from "./Motions";

interface StatBoxProps {
  title: string;
  value: string;
  percentage: string;
  type: "decrease" | "increase";
}

export const StatBox: React.FC<StatBoxProps> = ({
  title,
  value,
  percentage,
  type,
}) => {
  const STATCOLOR_DEFAULT: string = "blackAlpha.200";
  const STATCOLOR_HOVER: string = "blackAlpha.300";

  const [statColor, setStatColor] = useState(STATCOLOR_DEFAULT);

  return (
    <MotionStat
      mt={4}
      mr={4}
      boxShadow="base"
      p="6"
      rounded="md"
      bg={statColor}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => {
        setStatColor(STATCOLOR_HOVER);
      }}
      onHoverEnd={() => {
        setStatColor(STATCOLOR_DEFAULT);
      }}
    >
      <StatLabel>{title}</StatLabel>
      <StatNumber>{value}</StatNumber>
      <StatHelpText>
        <StatArrow type={type} />
        {percentage}
      </StatHelpText>
    </MotionStat>
  );
};
