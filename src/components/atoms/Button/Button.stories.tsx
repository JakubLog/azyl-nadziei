import React from 'react';
import { Button } from './Button';
import { Story, Meta } from '@storybook/react';

export default {
  component: Button,
  title: 'components/atoms/Button'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => <Button {...args}>Button content</Button>;

export const Primary = template.bind({});
Primary.args = {
  isLight: false
};
