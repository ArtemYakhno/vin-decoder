import { Outlet } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/layouts/Header/Header";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Header />
      <main className="container main">
        <Outlet />
      </main>
      <Toaster position="top-right" richColors />
    </>
  );
}

export default App;
