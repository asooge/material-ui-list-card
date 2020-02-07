import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import ListCard from './ListCard'

const stories = storiesOf('ListCard', module);

stories.addDecorator(withKnobs)

stories
    .add('with header', () => {
        const value = text('enter input', 'Hello Header');
        return <ListCard header={value}/>
    })
    .add('with list', () => <ListCard items={['hello', 'world', 'list', 'items']}/>)
    .add('with custom theme', () => {
        const theme = select('choose theme', ['light', 'dark'], 'dark');
        return <ListCard theme={theme}/>
    })