// State structure

import { LucideIcon } from "lucide-react";

export type GameTheme = "numbers" | "icons";
export type GridSize = "4x4" | "6x6";

export interface Tile {
  id: number;
  value: number | LucideIcon;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface Player {
  id: number;
  name: string;
  pairs: number;
}

export interface GameState {
  screen: "setup" | "game" | "results";
  theme: GameTheme;
  numPlayers: 1 | 2 | 3 | 4;
  gridSize: GridSize;
  tiles: Tile[];
  currentPlayer: number;
  players: Player[];
  moves: number;
  startTime: number | null;
  endTime: number | null;
}

export type GameAction =
  | { type: "SET_THEME"; payload: GameTheme }
  | { type: "SET_NUM_PLAYERS"; payload: 1 | 2 | 3 | 4 }
  | { type: "SET_GRID_SIZE"; payload: GridSize }
  | { type: "START_GAME" }
  | { type: "FLIP_TILE"; payload: number }
  | { type: "CHECK_MATCH" }
  | { type: "NEXT_PLAYER" }
  | { type: "END_GAME" }
  | { type: "RESET_GAME" };
