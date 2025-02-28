import MemorySetup from "./components/MemorySetup";
import { GameProvider } from "./contexts/game/GameProvider";

function App() {
  return (
    <GameProvider>
      <main>
        <MemorySetup />
      </main>
    </GameProvider>
  );
}

export default App;
