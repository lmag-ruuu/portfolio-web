import { SpaceProps, HStack, Tag } from "@chakra-ui/react";
import { FC } from "react";

type ITags = {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
  bgCol: string;
};

const AboutTags: FC<ITags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme={props.bgCol} key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export default AboutTags;
