import React from "react";
import { Box, BoxProps } from "@chakra-ui/layout";
import { motion } from "framer-motion";

const MotionBox = motion<BoxProps>(Box);

const Example = () => {
  return (
    <MotionBox
      height="40px"
      bg="red.300"
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    />
  );
};

export default Example;
