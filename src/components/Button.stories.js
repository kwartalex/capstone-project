import React from 'react';
import Button from './Button'
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
  component: Button,
};

export const BtnUnclicked = () => (
  <Button />
);

export const BtnClicked = () => (
  <Button active={action('onClick')}></Button> 
);
