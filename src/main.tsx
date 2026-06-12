import { createRoot } from "react-dom/client";
import { GlobalProvider } from "./providers/GlobalProvider.tsx";

createRoot(document.getElementById("root")!).render(<GlobalProvider />);
