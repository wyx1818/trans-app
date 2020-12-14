import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Input from './index';

export default {
  title: 'Example/Input',
  component: Input,
} as Meta;

const Template: Story = (args) => <Input {...args} />;

export const Default = Template.bind({});
