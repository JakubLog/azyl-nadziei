import React from 'react';
import { SubTitle } from '../components/atoms/SubTitle/SubTitle';
import { Story, Meta } from '@storybook/react';

export default {
  component: SubTitle,
  title: 'components/atoms/SubTitle'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => <SubTitle {...args}>lorem ipsum dolor sit amet</SubTitle>;

export const Primary = template.bind({});
Primary.args = {};
