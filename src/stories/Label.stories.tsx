import React from 'react';
import { Label } from '../components/atoms/Label/Label';
import { Story, Meta } from '@storybook/react';

export default {
  component: Label,
  title: 'components/atoms/Label'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => <Label {...args}>lorem ipsum dolor sit amet</Label>;

export const Primary = template.bind({});
Primary.args = {};
