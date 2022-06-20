import { ComponentStory, ComponentMeta } from "@storybook/react";

import Icon from "../../components/Icon";

export default {
  title: "UI/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const IsLoading = Template.bind({});
IsLoading.args = {
  isLoading: true
};

export const IsNotLoading = Template.bind({});
IsNotLoading.args = {
    IsNotLoading: false
};