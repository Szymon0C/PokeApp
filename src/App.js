import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Nav from "./components/navigation/Nav";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Nav />
      </div>
    </QueryClientProvider>
  );
}

export default App;
