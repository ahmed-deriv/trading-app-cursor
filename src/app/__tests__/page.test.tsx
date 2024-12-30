import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home Page', () => {
  it('renders the Next.js logo', () => {
    render(<Home />)
    const logo = screen.getByAltText('Next.js logo')
    expect(logo).toBeInTheDocument()
  })

  it('renders the instructions list', () => {
    render(<Home />)
    const instructions = screen.getByRole('list')
    expect(instructions).toBeInTheDocument()
    expect(instructions.children.length).toBe(2)
  })

  it('renders the primary button with correct text', () => {
    render(<Home />)
    const primaryButton = screen.getByRole('link', { name: /Deploy now/i })
    expect(primaryButton).toBeInTheDocument()
    expect(primaryButton).toHaveAttribute('href', 'https://vercel.com/new')
  })

  it('renders the secondary button with correct text', () => {
    render(<Home />)
    const secondaryButton = screen.getByRole('link', { name: /Read our docs/i })
    expect(secondaryButton).toBeInTheDocument()
    expect(secondaryButton).toHaveAttribute('href', 'https://nextjs.org/docs')
  })
})
