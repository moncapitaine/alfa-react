import { TestUseRef } from "../components/testUseRef"
import { TestUseRef2 } from "../components/testUseRef2"

export const Test1Page = () => {
  return (
    <section>
      <h2>Test1</h2>
      <TestUseRef2 />
      <TestUseRef />
    </section>
  )
}