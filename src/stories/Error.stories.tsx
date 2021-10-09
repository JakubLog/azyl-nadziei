import React from 'react';
import Error from '../components/molecules/Error/Error';
import { Story, Meta } from '@storybook/react';

export default {
  component: Error,
  title: 'components/molecules/Error'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => <Error message="Lorem ipsum dolor sit amet" />;

export const Primary = template.bind({});
Primary.args = {};
