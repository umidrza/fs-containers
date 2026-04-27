/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Todo from './Todo'

describe('Todo component', () => {
  it('renders todo text', () => {
    const todo = { text: 'Test todo', done: false }

    render(<Todo todo={todo} />)

    expect(screen.getByText('Test todo')).toBeInTheDocument()
  })
})