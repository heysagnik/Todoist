import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Stat,
  StatProps,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionBox = motion<BoxProps>(Box);
export const MotionFlex = motion<FlexProps>(Flex);
export const MotionStat = motion<StatProps>(Stat);
