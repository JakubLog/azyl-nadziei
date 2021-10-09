import React from 'react';
import Hero from '../components/organisms/Hero/Hero';
import { Story, Meta } from '@storybook/react';

export default {
  component: Hero,
  title: 'components/organisms/Hero'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => <Hero />;

export const Primary = template.bind({});
Primary.args = {};
