const allowedUserNames = ['Harry', 'Sabine', 'Bill']

export const Header = () => {

  // todo: Implement login and logout - user context has user object or null
  // => needs access to the user context
  const handleLogin = () => {}
  const handleLogout = () => {}
  return (<section>
    <input placeholder="Enter username" />
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Logout</button>
  </section>)
}