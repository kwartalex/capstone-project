import React from 'react'
import { render } from '@testing-library/react'
import Button from '../components/Button'

test('that it changes color upon submit', () => { 
        const btn1before = render(<Button styleActivated={true} />)
        expect(btn1before.getByText(/Make/i)).toHaveStyle('background: var(--senary)')     
 })

test('that it changes color upon submit', () => { 
        const btn1before = render(<Button styleActivated={false} />)
        expect(btn1before.getByText(/Make/i)).toHaveStyle('background: var(--septenary)')     
 })