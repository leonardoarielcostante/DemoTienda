import { AboutUs } from "./components/AboutUs"
import { Categories } from "./components/Categories"
import { Footer } from "./components/Footer"
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
      <Footer />
    </>
  )
}

export default App
