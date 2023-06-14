import type {Meta, StoryObj} from '@storybook/react';


import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react';
import {ReduxStoreProviderDecorator} from '../Wednesday/Todolist12/state/ReduxStoreProviderDecorator';
import AppWithRedux from '../Wednesday/Todolist12/AppWithRedux';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AppWithRedux> = {
    title: 'TODOLISTS/AppWithRedux',
    component: AppWithRedux,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    decorators: [ReduxStoreProviderDecorator]
};

export default meta;
type Story = StoryObj<typeof AppWithRedux>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const AppWithReduxStory: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    // render: () => <Provider store={store}><AppWithRedux /></Provider>
}