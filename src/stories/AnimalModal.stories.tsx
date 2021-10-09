import React from 'react';
import AnimalModal from '../components/organisms/AnimalModal/AnimalModal';
import { Story, Meta } from '@storybook/react';

export default {
  component: AnimalModal,
  title: 'components/organisms/AnimalModal'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => (
  <AnimalModal weight={2} description="lorem ipsum dolor sit amet conencrus" type="Dogo" age={2} race="dachowiec" />
);

export const Primary = template.bind({});
Primary.args = {};
