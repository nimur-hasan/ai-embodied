import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  VStack,
  Button,
  Select,
  Divider,
} from "@chakra-ui/react";
import ListIcon from "../../assets/icons/list-icon.svg";
import DownArrow from "../../assets/icons/down-arrow.svg";
import BackArrow from "../../assets/icons/back-arrow.svg";
import ExpandArrow from "../../assets/icons/expand-arrow.svg";
import Table from "./Table";

export type useDataStateProps = {
  data: {
    data: any;
    transcript: string;
  };
};

export default function Test({ data }: useDataStateProps) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const coloredData = data.data;
    const transcript = data.transcript;
    const boxTranscript = document.getElementById("transcript");

    coloredData.map((item: any, index: any) => {
      const str = transcript.slice(item.highlight.start, item.highlight.end);
      console.log(str);

      if (boxTranscript?.innerHTML) {
        const newData = boxTranscript?.innerHTML.replace(
          str,
          `<span class="mark-text-${item.highlight.status}">${str}</span>`
        );
        boxTranscript.innerHTML = newData;
        console.log(newData);
      }
    });
  }, []);

  return (
    <Box m="12px" border="1.5px solid #E7ECF3" rounded="22px" background="#FFF">
      {/* Header */}
      <Flex
        justifyContent="space-between"
        alignItems="center"
        pb="12px"
        pt="14px"
        pl="24px"
        pr="16px"
      >
        <Box
          display="flex"
          gap="16px"
          alignItems="center"
          fontSize="24px"
          fontWeight="500"
          color="#142536"
        >
          <Box>Test</Box>
          <Box cursor="pointer" display={collapsed ? "block" : "none"}>
            <img
              onClick={() => setCollapsed(!collapsed)}
              src={ExpandArrow}
              alt=""
            />
          </Box>
        </Box>
        <HStack gap="16px">
          <Flex
            cursor="pointer"
            bg="#F9FAFC"
            p="18px"
            rounded="10px"
            border="1.5px solid #E7ECF3"
          >
            <img src={ListIcon} alt="" />
            <Box ml="16px" mr="30px">
              Saved Versions
            </Box>
            <img src={DownArrow} alt="" />
          </Flex>
          <Box
            as="button"
            bg="#2764FF"
            border="1.5px solid #E7ECF3"
            rounded="10px"
            py="18px"
            px="80px"
            fontSize="16px"
            fontWeight="600"
            color="white"
          >
            Save
          </Box>
        </HStack>
      </Flex>
      <Box h="1.5px" bg="#E7ECF3" />
      <Flex>
        <Box
          display={collapsed ? "none" : "block"}
          minW={{ md: "220px", lg: "420px" }}
          w={{ md: "220px", lg: "420px" }}
        >
          {/* Header */}
          <Box bg="#F2F5FA" borderRight="1px solid #E7ECF3" py="28px" px="22px">
            <HStack w="100%" justifyContent="space-between">
              <Flex gap="14px">
                <img src={BackArrow} />
                <Box color="#142536" fontSize="24px" fontWeight="500">
                  Patient Transcript #12
                </Box>
              </Flex>
              <Box cursor="pointer" transform="rotate(180deg)">
                <img
                  onClick={() => setCollapsed(!collapsed)}
                  src={ExpandArrow}
                  alt=""
                />
              </Box>
            </HStack>
            <Flex mt="30px">
              <Box
                color="#556C84"
                fontSize="16px"
                fontWeight="600"
                borderRight="2px solid #556C84"
                lineHeight="16px"
                pr="8px"
                mr="8px"
              >
                Date: 13 October 2023
              </Box>
              <Box
                color="#556C84"
                fontSize="16px"
                fontWeight="600"
                lineHeight="16px"
              >
                Date: 13 October 2023
              </Box>
            </Flex>
          </Box>

          {/* Content */}
          <Box
            py="14px"
            px="18px"
            color="#556C84"
            fontSize="16px"
            lineHeight="32px"
            borderRight="1px solid #E7ECF3"
            id="transcript"
          >
            {data.transcript}
          </Box>
        </Box>
        <Box flexGrow="1">
          <Table data={data} />
        </Box>
      </Flex>
    </Box>
  );
}
