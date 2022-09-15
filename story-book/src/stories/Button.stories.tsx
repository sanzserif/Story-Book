import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Click Me',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Hello World',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const New = Template.bind({});
New.args = {
  primary : true,
  size: 'small',
  label: 'Confirm',
};

export const inshaf = Template.bind({});
inshaf.args ={
  primary: false,
  size: 'medium',
  label: 'hello'
}

export const poornima = Template.bind({});
poornima.args = {
  primary: false,
  size: "medium",
  label: "hello",
};

export const bt01 = Template.bind({});
bt01.args = {
  primary: false,
  size: "medium",
  label: "Log In",
  backgroundColor: "pink",
};