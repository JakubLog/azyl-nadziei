import React from 'react';
import Footer from '../components/organisms/Footer/Footer';
import { Story, Meta } from '@storybook/react';

export default {
  component: Footer,
  title: 'components/organisms/Footer'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => <Footer />;

export const Primary = template.bind({});
Primary.args = {};
