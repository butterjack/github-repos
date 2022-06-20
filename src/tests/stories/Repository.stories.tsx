import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Repository from "../../components/Repository";

export default {
  title: "UI/Repository",
  component: Repository,
} as ComponentMeta<typeof Repository>;

const Template: ComponentStory<typeof Repository> = (args) => <Repository {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    repo: {
        name: "repository name",
        description: "description of the repository",
        updatedAt: new Date(),
        owner: {
            avatarUrl: "/github.png",
            login : 'github user'
        },
    },
};