import {
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  Link,
  Flex,
  Tooltip,
  Text,
  Center,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { HiExternalLink } from "react-icons/hi";
import { FC } from "react";

const colors: any = {
  html: "orange",
  css: "blue",
  javascript: "yellow",
  nextjs: "gray",
  chakra: "cyan",
  typescript: "teal",
  "material-ui": "blue",
  react: "blue",
  antd: "red",
};

type cardData = {
  image: string;
  technology: string[];
  title: string;
  link: string;
  description: string;
};

const Card: FC<cardData> = (props) => {
  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image
            height={"100%"}
            width={"100%"}
            src={props.image}
            layout={"fill"}
            alt={`Screen of ${props.title}`}
          />
        </Box>
        <Stack>
          <Box>
            {props.technology.map((tech) => {
              return (
                <Badge
                  mr={1}
                  key={tech}
                  rounded="full"
                  px="2"
                  fontSize="0.8em"
                  colorScheme={colors[tech]}
                >
                  {tech}
                </Badge>
              );
            })}
          </Box>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {props.title}
          </Heading>
          <Text color={"gray.500"}>{props.description}</Text>
          <Flex mt="1" justifyContent="center" alignContent="center">
            <Tooltip
              label="Visit page"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <Link href={props.link} isExternal>
                <Icon as={HiExternalLink} h={7} w={7} alignSelf={"center"} />
              </Link>
            </Tooltip>
          </Flex>
        </Stack>
      </Box>
    </Center>
  );
};

export default Card;
