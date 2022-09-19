import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconButton from "src/components/atoms/IconButton";
import { AddIcon } from "src/assets/icons";
import { ThemeProvider } from "styled-components";
import theme from "src/themes";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/IconButton",
  component: IconButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButton> = (args) => (
  <ThemeProvider theme={theme}>
    <IconButton {...args} />
  </ThemeProvider>
);

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: <AddIcon />,
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  children: <AddIcon />,
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: <AddIcon />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  children: <AddIcon />,
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  children: <AddIcon />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: "primary",
  children: <AddIcon />,
  disabled: true,
};
