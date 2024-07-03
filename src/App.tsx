import { AboutUs } from "./components/AboutUs"
import { Categories } from "./components/Categories"
import { Nav } from "./components/Nav"
import { Presentation } from "./components/Presentation"
import { Products } from "./components/Products"

function App() {
  return (
    <>
      <Nav />
      <Presentation />
      <Categories />
      <Products />
      <AboutUs />
    </>
  )
}

export default App
