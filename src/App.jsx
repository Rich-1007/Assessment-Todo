import { useState } from "react";

import UI from "./Components/UI";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UI />
    </>
  );
}

export default App;
