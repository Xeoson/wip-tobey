import { screen } from '@testing-library/dom'
import Search from './Search'
import { render } from '@testing-library/react'

describe('search', () => {
  it('renders', () => {
    render(<Search />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
