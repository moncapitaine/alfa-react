import { Header } from "./header"
import { Footer } from "./footer"
export const Layout = () => {

  const nameToRender = 'USERNAME'
  // Show welcome message with 'Welcome, <username>' => needs access to the user context
  return (<>
    <Header></Header>
    <section>
      <h2>Welcome, {nameToRender}</h2>
      <p>This is our great super app for showing vite and stuff</p>
    </section>
    <Footer />
  </>)
}