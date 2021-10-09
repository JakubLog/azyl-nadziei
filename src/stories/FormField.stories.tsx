import React from 'react';
import FormField from '../components/molecules/FormField/FormField';
import { Story, Meta } from '@storybook/react';

export default {
  component: FormField,
  title: 'components/molecules/FormField'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => <FormField label="Lorem ipsum" />;

export const Primary = template.bind({});
Primary.args = {};
