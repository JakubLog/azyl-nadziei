import React from 'react';
import Loading from '../components/molecules/Loading/Loading';
import { Story, Meta } from '@storybook/react';

export default {
  component: Loading,
  title: 'components/molecules/Loading'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => <Loading />;

export const Primary = template.bind({});
Primary.args = {};
