import "./App.css";
import { Routes, Route } from "react-router-dom";

import CalculatePremium from "./page-components/calculate-premium";
import { Layout } from "./layout-components/default-layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<CalculatePremium />} />
      </Route>
    </Routes>
  );
}

export default App;
