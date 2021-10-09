import React from 'react';
import { Input } from '../components/atoms/Input/Input';
import { Story, Meta } from '@storybook/react';

export default {
  component: Input,
  title: 'components/atoms/Input'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => <Input {...args}>lorem ipsum dolor sit amet</Input>;

export const Primary = template.bind({});
Primary.args = {};
