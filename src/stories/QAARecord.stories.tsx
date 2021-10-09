import React from 'react';
import QAARecord from '../components/molecules/QAARecord/QAARecord';
import { Story, Meta } from '@storybook/react';

export default {
  component: QAARecord,
  title: 'components/molecules/QAARecord'
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template: Story<any> = (args) => <QAARecord question="Question" answer="Answer" />;

export const Primary = template.bind({});
Primary.args = {};
