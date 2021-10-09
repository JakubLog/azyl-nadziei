import React from 'react';
import AboutSection from '../components/molecules/AboutSection/AboutSection';
import { Story, Meta } from '@storybook/react';

export default {
  component: AboutSection,
  title: 'components/molecules/AboutSection'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => (
  <AboutSection
    title="Lorem ipsum"
    subtitle="Lorem ipsum dolor sit amet"
    imageSrc="https://picsum.photos/500"
    content={<p>Lorem ipsum dolor sit amet</p>}
  />
);

export const Primary = template.bind({});
Primary.args = {};
