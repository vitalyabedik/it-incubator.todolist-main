import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {EditableSpan} from '../Wednesday/Todolist12/EditableSpan';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof EditableSpan> = {
    title: 'TODOLISTS/EditableSpan',
    component: EditableSpan,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    args: {
        value: 'ddffd'
    }
};

export default meta;
type Story = StoryObj<typeof EditableSpan>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// Story - компонент с определенным набором пропсов
export const EditableSpanStory: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args

};

