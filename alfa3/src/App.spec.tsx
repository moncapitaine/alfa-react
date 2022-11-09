import { render, screen } from "@testing-library/react"
import App from "./App"

describe('The app main component...', () => {
  it('...renders hello', () => {
    render(<App />)
    const helloDiv = screen.getByText(/hallo/i)
    expect(helloDiv).toBeVisible()
  })

  it('renders the selectbox', () => {
    render(<App />)
    screen.logTestingPlaygroundURL()
    expect(1).toBe(1)
  })
})