import React from "react";
import { VStack, IconButton, Divider } from "@chakra-ui/react";
import {
  AddIcon,
  SearchIcon,
  ChevronDownIcon,
  BellIcon,
  SmallAddIcon,
  WarningIcon,
  QuestionIcon,
  MoonIcon,
  SunIcon,
  TriangleDownIcon,
} from "@chakra-ui/icons";

function Sidebar() {
  return (
    <VStack spacing={4} align="left" p={4}>
      {/* Sidebar items */}
      <div>
        <IconButton
          icon={<AddIcon />}
          variant="ghost"
          colorScheme="teal"
          aria-label="Home"
          label="Home"
        />
        Home
      </div>
      <div>
        <IconButton
          icon={<SearchIcon />}
          variant="ghost"
          colorScheme="teal"
          aria-label="Search"
          label="Search"
        />
        Issues
      </div>
      <div>
        <IconButton
          icon={<TriangleDownIcon />}
          variant="ghost"
          colorScheme="teal"
          aria-label="Dropdown"
          label="Dropdown"
        />
        Pull requests
      </div>

      <div>
        <IconButton
          icon={<BellIcon />}
          variant="ghost"
          colorScheme="teal"
          aria-label="Notifications"
          label="Notifications"
        />
        Discussion
      </div>
      <div>
        <IconButton
          icon={<WarningIcon />}
          variant="ghost"
          colorScheme="teal"
          aria-label="Issues"
          label="Issues"
        />
        Codespaces
      </div>
      <div>
        <IconButton
          icon={<QuestionIcon />}
          variant="ghost"
          colorScheme="teal"
          aria-label="Pull Requests"
          label="Pull Requests"
        />
        Codespaces
      </div>

      {/* Divider */}
      <Divider borderColor="gray.500" width="80%" my={4} />

      {/* Settings and themes */}
      <IconButton
        icon={<ChevronDownIcon />}
        variant="ghost"
        colorScheme="teal"
        aria-label="Settings"
        label="Settings"
      />
      <div>
        <IconButton
          icon={<SunIcon />}
          variant="ghost"
          colorScheme="teal"
          aria-label="Light Mode"
          label="Light Mode"
        />
        Explore
      </div>
      <div>
        <IconButton
          icon={<MoonIcon />}
          variant="ghost"
          colorScheme="teal"
          aria-label="Dark Mode"
          label="Dark Mode"
        />
        Marketplace
      </div>
      <Divider borderColor="gray.500" width="80%" my={4} />
      <div>
        <IconButton
          icon={<MoonIcon />}
          variant="ghost"
          colorScheme="teal"
          aria-label="Dark Mode"
          label="Dark Mode"
        />
        Marketplace
      </div>
    </VStack>
  );
}

export default Sidebar;
