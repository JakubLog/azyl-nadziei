import React from 'react';
import { LoadingIcon } from '../components/atoms/LoadingIcon/LoadingIcon';
import { Story, Meta } from '@storybook/react';

export default {
  component: LoadingIcon,
  title: 'components/atoms/LoadingIcon'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => <LoadingIcon {...args} />;

export const Primary = template.bind({});
Primary.args = {};
