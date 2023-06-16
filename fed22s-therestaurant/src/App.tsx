import "./App.css";
import { router } from "./Router";
import { RouterProvider } from "react-router";
import GlobalStyles from "./components/Styled/Global";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
