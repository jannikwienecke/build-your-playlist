import { screen, render } from '@testing-library/react'
import Hello from './index'

test('should render', () => {
  render(<Hello />)

  expect(screen.getByText(/hello/i)).toBeInTheDocument()
})
