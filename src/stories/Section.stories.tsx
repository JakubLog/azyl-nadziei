import React from 'react';
import Section from '../components/molecules/Section/Section';
import { Story, Meta } from '@storybook/react';

export default {
  component: Section,
  title: 'components/molecules/Section'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => (
  <Section buttonContent="Read more" direction="left" title="Lorem ipsum" subtitle="dolor sit amet, consectetur adipisicing elit" />
);

export const Primary = template.bind({});
Primary.args = {};
