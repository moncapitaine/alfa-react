import { Header } from "./header"
import { Footer } from "./footer"
import { UserContext } from "../userContext"
import { useContext } from "react"
export const Layout = () => {

  // Show welcome message with 'Welcome, <username>' => needs access to the user context
  const { userName } = useContext(UserContext)
  return (<>
    <Header></Header>
    <section>
      <h2>Welcome, {userName}</h2>
      <p>This is our great super app for showing vite and stuff</p>
    </section>
    <Footer />
  </>)
}