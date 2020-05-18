import React from 'react';
import Button from './Button'
import { action, text } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const BtnBasic = () => (
  <Button 
  text="Short Text" 
  onClick={action('onClick')}
  />
);

export const BtnBasicLongText = () => (
  <Button onClick={action('onClick')}>Long Text in Button Component</Button> 
);

export const BtnActive = () => (
  <Button 
  text="Short Text" 
  onClick={action('onClick')}/>
);