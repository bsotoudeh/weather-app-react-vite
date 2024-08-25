import { QueryClient, QueryClientProvider } from "react-query";
import InputContext from "./context/InputContext";
import WeatherContext from "./context/WeatherContext";
import Home from "./components/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <InputContext>
          <WeatherContext>
            <Home />
          </WeatherContext>
        </InputContext>
      </QueryClientProvider>
    </>
  );
}

export default App;
