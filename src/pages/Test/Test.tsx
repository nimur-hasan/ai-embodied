import React from "react";
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

export default function Test() {
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
        <Box fontSize="24px" fontWeight="500" color="#142536">
          Test
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
        <Box minW={{md: '220px', lg: '420px'}} w={{md: '220px', lg: '420px'}}>
          {/* Header */}
          <Box bg="#F2F5FA" borderRight="1px solid #E7ECF3" py="28px" px="22px">
            <HStack w="100%" justifyContent="space-between">
              <Flex gap="14px">
                <img src={BackArrow} />
                <Box color="#142536" fontSize="24px" fontWeight="500">
                  Patient Transcript #12
                </Box>
              </Flex>
              <img src={ExpandArrow} alt="" />
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
          >
            <span className="mark-text-green">I'm a teacher.</span>
            <span className="mark-text-yellow">
              Any known allergies or medical conditions? No allergies
            </span>
            , but I have hypertension.Thanks, John. We've got your basic
            information.
            <br /> Great, let's move on. Can you tell me about your family
            medical history? Any significant illnesses or conditions that run in
            your family?
            <br /> As far as I know, my family doesn't have a history of major
            illnesses. My parents are both healthy, and my grandparents lived
            long lives without any serious health issues.
            <span className="mark-text-red">
              Do you ever feel down, depressed or hopeless? Sometimes, it comes
              and goes.
            </span>
            Now, could you provide details about your daily habits and
            lifestyle? Do you smoke or drink alcohol?
            <br />{" "}
            <span className="mark-text-yellow">
              I don't smoke, but I do enjoy an occasional drink with friends on
              weekends.
            </span>{" "}
            Maybe one or two drinks.
            <br /> And what about your diet and exercise routines?
            <br /> I try to eat a balanced diet, lots of vegetables, and I
            exercise regularly. I go to the gym three times a week and enjoy
            hiking on the weekends.
            <br /> That sounds healthy. How about any current medications or
            supplements you're taking?
            <br /> I take a daily blood pressure medication for my hypertension,
            and I also take{" "}
            <span className="text-mark-yellow">a daily multivitamin.</span>
            <br /> Do you have a preferred pharmacy for your prescriptions?
            <br /> Yes, I usually get my medications at the Smith's Pharmacy on
            Oak Street. Thanks, John. Now, let's talk about any recent illnesses
            or hospitalizations. Have you had any surgeries or been hospitalized
            in the past few years?
            <br />
            No, I haven't had any surgeries or been hospitalized recently. I've
            been relatively healthy. The nurse just checked them a few minutes
            ago, and they were{" "}
            <span className="text-mark-yellow">
              within the normal range.
            </span>{" "}
            Blood pressure was 120/80, and my heart rate was 75 beats per
            minute. Well, I have been experiencing some back pain
          </Box>
        </Box>
        <Box flexGrow='1'>
          <Table />
        </Box>
      </Flex>
    </Box>
  );
}
