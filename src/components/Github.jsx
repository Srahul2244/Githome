import Sidebar from "./Sidebar";
import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Spacer,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Avatar,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Heading,
  Divider,
  VStack,
  Text,
  Typography,
  Image,
  Button,
  Center,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  SearchIcon,
  AddIcon,
  ChevronDownIcon,
  BellIcon,
  SmallAddIcon,
  WarningIcon,
  QuestionOutlineIcon,
  MoonIcon,
  SunIcon,
  TriangleDownIcon,
} from "@chakra-ui/icons";
const repo = [
  {
    name: "asosclonegit",
    img: "https://tse2.mm.bing.net/th?id=OIP.HLuY60jzx5puuKjbqmWRRwHaEK&pid=Api&P=0&h=180",
  },
  {
    name: "internclone",
    img: "https://tse2.mm.bing.net/th?id=OIP.HLuY60jzx5puuKjbqmWRRwHaEK&pid=Api&P=0&h=180",
  },
  {
    name: "masaischool",
    img: "https://tse2.mm.bing.net/th?id=OIP.HLuY60jzx5puuKjbqmWRRwHaEK&pid=Api&P=0&h=180",
  },
  {
    name: "finmeehuyf",
    img: "https://tse2.mm.bing.net/th?id=OIP.HLuY60jzx5puuKjbqmWRRwHaEK&pid=Api&P=0&h=180",
  },
  {
    name: "maoogithub",
    img: "https://tse2.mm.bing.net/th?id=OIP.HLuY60jzx5puuKjbqmWRRwHaEK&pid=Api&P=0&h=180",
  },
  {
    name: "portfolib",
    img: "https://tse2.mm.bing.net/th?id=OIP.HLuY60jzx5puuKjbqmWRRwHaEK&pid=Api&P=0&h=180",
  },
  {
    name: "neloftiog9g",
    img: "https://tse2.mm.bing.net/th?id=OIP.HLuY60jzx5puuKjbqmWRRwHaEK&pid=Api&P=0&h=180",
  },
  {
    name: "softechhvuy",
    img: "https://tse2.mm.bing.net/th?id=OIP.HLuY60jzx5puuKjbqmWRRwHaEK&pid=Api&P=0&h=180",
  },
  {
    name: "aayurvedahv",
    img: "https://tse2.mm.bing.net/th?id=OIP.HLuY60jzx5puuKjbqmWRRwHaEK&pid=Api&P=0&h=180",
  },
];

function Github() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const disp = showAll ? repo : repo.slice(0, 3);

  const toggleColorMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const openSidebar = () => {
    onOpen();
  };

  return (
    <ChakraProvider>
      <div
        h="100vh"
        bgColor={isDarkMode ? "gray.900" : "gray.100"}
        color={isDarkMode ? "white" : "black"}
      >
        {/* Hamburger menu */}
        <IconButton
          icon={<HamburgerIcon />}
          variant="outline"
          colorScheme="teal"
          onClick={openSidebar}
          aria-label="Toggle Sidebar"
          display={{ md: "none" }}
          position="fixed"
          top={4}
          left={4}
        />

        {/* Sidebar Drawer */}
        <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              GitHub Dashboard
            </DrawerHeader>
            <DrawerBody p={0}>
              <Sidebar />
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* Main Content */}
        <Flex p={4} style={{ border: "1px solid gray" }}>
          {/* Navbar */}
          <Box flex="1" display={{ base: "none", md: "flex" }}>
            <IconButton
              icon={<HamburgerIcon />}
              variant="ghost"
              colorScheme="teal"
              mr={2}
              onClick={openSidebar}
            />

            <Flex alignItems="center">
              <Box>
                <Text fontWeight="bold">Dashboard</Text>
              </Box>
            </Flex>
            <IconButton icon={<AddIcon />} variant="ghost" colorScheme="teal" />

            <IconButton
              icon={<TriangleDownIcon />}
              variant="ghost"
              colorScheme="teal"
            />
          </Box>

          {/* Search Bar */}
          <Box flex="1" mx={4}>
            <InputGroup size="md">
              <Input placeholder="Search..." />
              <InputRightElement pointerEvents="none">
                <SearchIcon color="gray.400" />
              </InputRightElement>
            </InputGroup>
          </Box>

          {/* Actions */}
          <Spacer />
          <IconButton
            icon={<SmallAddIcon />}
            variant="outline"
            colorScheme="teal"
            mr={2}
          >
            <TriangleDownIcon />
          </IconButton>
          <IconButton
            icon={<BellIcon />}
            variant="outline"
            colorScheme="teal"
            mr={2}
          >
            <WarningIcon color="red.400" />
          </IconButton>
          <IconButton
            icon={<QuestionOutlineIcon />}
            variant="outline"
            colorScheme="teal"
            mr={2}
          >
            <ChevronDownIcon />
          </IconButton>
          <IconButton
            icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
            variant="outline"
            colorScheme="teal"
          />

          <IconButton
            icon={<Avatar size="sm" />}
            variant="outline"
            colorScheme="teal"
            ml={2}
          ></IconButton>

          {/* Sidebar for Mobile */}
          <Box display={{ base: "block", md: "none" }}>
            <IconButton
              icon={<AddIcon />}
              variant="ghost"
              colorScheme="teal"
              ml={2}
            />
            <IconButton
              icon={<TriangleDownIcon />}
              variant="ghost"
              colorScheme="teal"
            />
          </Box>
        </Flex>

        {/* Main Content Area */}
        <Flex>
          <Box
            p={4}
            width="25%"
            borderRight="1px solid #E2E8F0"
            overflowY="auto"
            height="75vh"
            position="fixed"
            left={0}
          >
            <Box>
              <Flex mb={4} alignItems="center">
                <Avatar
                  size="md"
                  name="Repository"
                  src="https://example.com/avatar-url.jpg"
                  mr={2}
                />
                <Text>Snrupul2244</Text>
                <IconButton
                  icon={<TriangleDownIcon />}
                  variant="ghost"
                  colorScheme="teal"
                  ml={2}
                />
              </Flex>
            </Box>

            <Flex mb={4} alignItems="center" gap="100px">
              <Flex alignItems="center">
                <Text> Top Repository</Text>
              </Flex>
              <Box>
                <IconButton
                  icon={<AddIcon />}
                  variant="ghost"
                  colorScheme="teal"
                  ml="auto"
                  bg="green.500"
                />
              </Box>
            </Flex>

            <Input
              border="2px solid blue"
              placeholder=" Find repository..."
              mb={4}
            />

            <VStack spacing={4} mb={4}>
              {/* ... */}
              <Flex
                direction="column"
                alignItems="flex-start"
                mt={4}
                justifyContent={"space-between"}
              >
                {disp.map((repo, index) => {
                  return (
                    <>
                      <Flex key={index} alignItems="center" mb={2} gap={10}>
                        <Box mr={2}>
                          <Image
                            rounded={100}
                            src={repo.img}
                            alt="Repository Avatar"
                            boxSize="10px"
                          />
                        </Box>
                        <Text>{repo.name}</Text>
                      </Flex>
                    </>
                  );
                })}
                {!showAll && repo.length > 3 && (
                  <Button
                    mr={200}
                    variant="link"
                    color="teal.500"
                    onClick={() => setShowAll(true)}
                  >
                    Show More
                  </Button>
                )}
              </Flex>
            </VStack>

            <Divider my={4} />

            {/* Your Teams */}
            <Box mb={4}>
              <Heading fontSize="lg" mb={2}>
                Your Teams
              </Heading>
              <Input placeholder="Find a team..." mb={4} />
              <Flex alignItems="center" mb={2}>
                <Avatar
                  size="sm"
                  name="Masai-Cohort"
                  src="https://example.com/team-avatar.jpg"
                  mr={2}
                />
                <Text>Masai-Cohort</Text>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </div>
    </ChakraProvider>
  );
}

export default Github;
