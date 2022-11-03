import { CSSProperties } from "react"

export const MainNavigation = () => {
  const navStyles: CSSProperties = { display: 'flex', gap: '1em', justifyContent: "center" }
  return (<nav style={navStyles}>
    <a href="www.google.de">Google</a>
    <a href="www.sueddeutsche.de">Sueddeutsche</a>
  </nav>)
}