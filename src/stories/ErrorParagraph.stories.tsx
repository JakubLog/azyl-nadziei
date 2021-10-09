import React from 'react';
import { ErrorParagraph } from '../components/atoms/ErrorParagraph/ErrorParagraph';
import { Story, Meta } from '@storybook/react';

export default {
  component: ErrorParagraph,
  title: 'components/atoms/ErrorParagraph'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => <ErrorParagraph {...args}>lorem ipsum dolor sit amet</ErrorParagraph>;

export const Primary = template.bind({});
Primary.args = {};
