import type {Meta, StoryObj} from '@storybook/react';

import {Button} from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // помогает описывать пропсы или ограничить их количество
  argTypes: {
    backgroundColor: {control: 'color'},
  },
  // Здесь задаются/ описываются пропсы (также можно использовать ниже)
  args: {}
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// Story - компонент с определенным набором пропсов
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
