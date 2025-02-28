import { GameAction, GameState } from "@/lib/types";
import { createContext, useReducer } from "react";
import { gameReducer, initialState } from "./gameReducer";

interface GameContextProps {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
}

export const GameContext = createContext<GameContextProps | undefined>(undefined);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}


