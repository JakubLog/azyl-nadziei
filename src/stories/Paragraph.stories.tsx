import React from 'react';
import { Paragraph } from '../components/atoms/Paragraph/Paragraph';
import { Story, Meta } from '@storybook/react';

export default {
  component: Paragraph,
  title: 'components/atoms/Paragraph'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => <Paragraph {...args}>lorem ipsum dolor sit amet</Paragraph>;

export const Primary = template.bind({});
Primary.args = {};
