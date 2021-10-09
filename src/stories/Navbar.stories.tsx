import React from 'react';
import Navbar from '../components/organisms/Navbar/Navbar';
import { Story, Meta } from '@storybook/react';

export default {
  component: Navbar,
  title: 'components/organisms/Navbar'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => <Navbar />;

export const Primary = template.bind({});
Primary.args = {};
