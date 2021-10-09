import React from 'react';
import Navigation from '../components/molecules/Navigation/Navigation';
import { Story, Meta } from '@storybook/react';

export default {
  component: Navigation,
  title: 'components/molecules/Navigation'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => <Navigation />;

export const Primary = template.bind({});
Primary.args = {};
