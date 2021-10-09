import React from 'react';
import { InlineTitle } from '../components/atoms/InlineTitle/InlineTitle';
import { Story, Meta } from '@storybook/react';

export default {
  component: InlineTitle,
  title: 'components/atoms/InlineTitle'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => <InlineTitle {...args}>lorem ipsum dolor sit amet</InlineTitle>;

export const Primary = template.bind({});
Primary.args = {};
