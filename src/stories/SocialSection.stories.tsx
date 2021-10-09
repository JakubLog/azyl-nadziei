import React from 'react';
import SocialSection from '../components/organisms/SocialSection/SocialSection';
import { Story, Meta } from '@storybook/react';

export default {
  component: SocialSection,
  title: 'components/organisms/SocialSection'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => <SocialSection />;

export const Primary = template.bind({});
Primary.args = {};
