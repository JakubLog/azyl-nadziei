import React from 'react';
import AdoptModal from '../components/organisms/AdoptModal/AdoptModal';
import { Story, Meta } from '@storybook/react';

export default {
  component: AdoptModal,
  title: 'components/organisms/AdoptModal'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => <AdoptModal animalName="Lorem ipsum" />;

export const Primary = template.bind({});
Primary.args = {};
