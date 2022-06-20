import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchBar from "../../components/SearchBar";
import { MemoryRouter } from "react-router";

export default {
  title: "UI/SearchBar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

/* const Template: ComponentStory<typeof SearchBar> = (args) => (
  <MemoryRouter>
    <SearchBar {...args} />
  </MemoryRouter>
); */

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Owner = Template.bind({});
Owner.args = {
  type: "owner",
  placeholder: "Placeholder",
};

export const Repositories = Template.bind({});
Repositories.args = {
  type: "repositories",
  placeholder: "Placeholder",
};