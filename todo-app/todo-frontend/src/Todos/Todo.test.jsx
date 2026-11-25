
import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

import Todo from './Todo'

afterEach(() => {
  cleanup()
})

describe('Todo component', () => {
  const todo = {
    _id: '123',
    text: 'Learn Docker',
    done: false
  }

  it('displays the todo text and status', () => {
    render(
      <Todo
        todo={todo}
        deleteTodo={vi.fn()}
        completeTodo={vi.fn()}
      />
    )

    expect(screen.getByText('Learn Docker')).toBeInTheDocument()
    expect(screen.getByText('This todo is not done')).toBeInTheDocument()
  })

  it('calls completeTodo when Set as done is clicked', () => {
    const completeTodo = vi.fn()

    render(
      <Todo
        todo={todo}
        deleteTodo={vi.fn()}
        completeTodo={completeTodo}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: 'Set as done' }))

    expect(completeTodo).toHaveBeenCalledWith(todo)
  })

  it('displays a completed todo and allows deletion', () => {
    const completedTodo = { ...todo, done: true }
    const deleteTodo = vi.fn()

    render(
      <Todo
        todo={completedTodo}
        deleteTodo={deleteTodo}
        completeTodo={vi.fn()}
      />
    )

    expect(screen.getByText('This todo is done')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Delete' }))

    expect(deleteTodo).toHaveBeenCalledWith(completedTodo)
  })
})
