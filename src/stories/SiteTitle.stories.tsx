import React from 'react';
import SiteTitle from '../components/molecules/SiteTitle/SiteTitle';
import { Story, Meta } from '@storybook/react';

export default {
  component: SiteTitle,
  title: 'components/molecules/SiteTitle'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => <SiteTitle title="Lorem ipsum" subtitle="dolor sit amet enim" />;

export const Primary = template.bind({});
Primary.args = {};
