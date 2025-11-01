import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/home";
import { SearchPage } from "./pages/search";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route index element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
