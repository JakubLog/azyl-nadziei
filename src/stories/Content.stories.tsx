import React from 'react';
import { Content } from '../components/atoms/Content/Content';
import { Story, Meta } from '@storybook/react';

export default {
  component: Content,
  title: 'components/atoms/Content'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => <Content {...args}>lorem ipsum dolor sit amet</Content>;

export const Primary = template.bind({});
Primary.args = {};
