import React from 'react';
import { Title } from '../components/atoms/Title/Title';
import { Story, Meta } from '@storybook/react';

export default {
  component: Title,
  title: 'components/atoms/Title'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => <Title {...args}>lorem ipsum dolor sit amet</Title>;

export const Primary = template.bind({});
Primary.args = {};
