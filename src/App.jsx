import { useState } from "react";
import Home from "./component/home"


function App() {

  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  }

  return (
    <>
      <Home cartCount={cartCount} handleAddToCart={handleAddToCart} />
    </>
  )
}

export default App