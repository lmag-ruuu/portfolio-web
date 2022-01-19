import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Link,
} from "@chakra-ui/react";
import { HiExternalLink } from "react-icons/hi";
import { FC } from "react";

type cardData = {
  image: string;
  technology: string[];
  title: string;
  link: string;
};

const Card: FC<cardData> = (props) => {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image
          height={220}
          width={"full"}
          src={props.image}
          alt={`Picture of ${props.title}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {props.technology.map((tech) => {
              return (
                <Badge
                  m="2"
                  rounded="full"
                  px="2"
                  fontSize="0.8em"
                  colorScheme="red"
                  key={tech}
                >
                  {tech}
                </Badge>
              );
            })}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {props.title}
            </Box>
            <Tooltip
              label="View page"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <Link href={props.link} display={"flex"} isExternal>
                <Icon as={HiExternalLink} h={7} w={7} alignSelf={"center"} />
              </Link>
            </Tooltip>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Card;
