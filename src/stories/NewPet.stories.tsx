import React from 'react';
import NewPet from '../components/organisms/NewPet/NewPet';
import { Story, Meta } from '@storybook/react';

export default {
  component: NewPet,
  title: 'components/organisms/'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => <NewPet />;

export const Primary = template.bind({});
Primary.args = {};
