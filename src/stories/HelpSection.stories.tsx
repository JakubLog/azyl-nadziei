import React from 'react';
import HelpSection from '../components/molecules/HelpSection/HelpSection';
import { Story, Meta } from '@storybook/react';

export default {
  component: HelpSection,
  title: 'components/molecules/HelpSection'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => (
  <HelpSection
    title="Lorem ipsum"
    subtitle="Lorem ipsum dolor sit amet"
    content={<p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>}
  />
);

export const Primary = template.bind({});
Primary.args = {};
