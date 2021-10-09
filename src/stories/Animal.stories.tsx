import React from 'react';
import Animal from '../components/molecules/Animal/Animal';
import { Story, Meta } from '@storybook/react';

export default {
  component: Animal,
  title: 'components/molecules/Animal'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => (
  <Animal img="https://picsum.photos/500" name="Lorem ipsum" type="Dogo" age={2} description="Lorem ipsum dolor sit amet" weight={2} race="ipsum" />
);

export const Primary = template.bind({});
Primary.args = {};
