import React, { useState } from "react";
import { Box, Link, Flex, VStack, HStack } from "@chakra-ui/react";
import Logo from "../../assets/icons/logo.svg";
import TemplateIcon from "../../assets/icons/template-icon.svg";
import TemplateActiveIcon from "../../assets/icons/template-icon-active.svg";
import BuildIcon from "../../assets/icons/build-icon.svg";
import BuildActiveIcon from "../../assets/icons/build-icon-active.svg";
import TestIcon from "../../assets/icons/test-icon.svg";
import TestActiveIcon from "../../assets/icons/test-icon-active.svg";
import DocIcon from "../../assets/icons/documentation-icon.svg";
import DocActiveIcon from "../../assets/icons/documentation-icon-active.svg";
import SupportIcon from "../../assets/icons/support-icon.svg";
import SupportActiveIcon from "../../assets/icons/support-icon-active.svg";

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState("Templates");
  const menus = [
    {
      label: "Templates",
      icon: TemplateIcon,
      activeIcon: TemplateActiveIcon,
    },
    {
      label: "Build",
      icon: BuildIcon,
      activeIcon: BuildActiveIcon,
    },
    {
      label: "Test",
      icon: TestIcon,
      activeIcon: TestActiveIcon,
    },
    {
      label: "Documentation",
      icon: DocIcon,
      activeIcon: DocActiveIcon,
    },
    {
      label: "Support",
      icon: SupportIcon,
      activeIcon: SupportActiveIcon,
    },
  ];

  return (
    <Box minWidth='260px' w="260px" p="16px">
      <Box>
        <Link href="/">
          <img src={Logo} />
        </Link>
      </Box>
      <VStack gap="22px" mt="44px" alignItems="flex-start" cursor="pointer">
        {menus.map((menu, index) => (
          <Flex
            justifyContent="flex-start"
            gap="12px"
            onClick={() => setActiveMenu(menu.label)}
            border={
              activeMenu == menu.label
                ? "1px solid #DFE7F3"
                : "1px solid #FFFFFF"
            }
            rounded="10px"
            boxShadow={activeMenu == menu.label ? "0px 4px 4px 0px rgba(0, 0, 0, 0.02)" : ''}
            p="12px"
            w="100%"
          >
            <img src={menu.label == activeMenu ? menu.activeIcon : menu.icon} />
            <Box fontSize="16px" fontWeight="500" color="#556C84">
              {menu.label}
            </Box>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
}
