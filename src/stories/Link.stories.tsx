import React from 'react';
import Link from '../components/atoms/Link/Link';
import { Story, Meta } from '@storybook/react';

export default {
  component: Link,
  title: 'components/atoms/Link'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => (
  <Link to="/" {...args}>
    lorem ipsum dolor sit amet
  </Link>
);

export const Primary = template.bind({});
Primary.args = {};
