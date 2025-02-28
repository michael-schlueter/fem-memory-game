import { GameAction, GameState } from "@/lib/types";
import { generateTiles } from "@/lib/utils";

const initialState: GameState = {
    screen: "setup",
    theme: "numbers",
    numPlayers: 1,
    gridSize: "4x4",
    tiles: [],
    currentPlayer: 0,
    players: [],
    moves: 0,
    startTime: null,
    endTime: null,
}

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };

    case "SET_NUM_PLAYERS":
      return { ...state, numPlayers: action.payload };

    case "SET_GRID_SIZE":
      return { ...state, gridSize: action.payload };

    case "START_GAME": {
      const players = Array.from({ length: state.numPlayers }, (_, i) => ({
        id: i,
        name: `Player ${i + 1}`,
        pairs: 0,
      }));

      return {
        ...state,
        screen: "game",
        players,
        currentPlayer: 0,
        tiles: generateTiles(state.theme, state.gridSize),
        moves: 0,
        startTime: Date.now(),
        endTime: null,
      };
    }

    case "FLIP_TILE": {
      const tileId = action.payload;
      return {
        ...state,
        tiles: state.tiles.map((tile) =>
          tile.id === tileId ? { ...tile, isFlipped: true } : tile
        ),
      };
    }

    case "CHECK_MATCH": {
      const flippedTiles = state.tiles.filter(
        (tile) => tile.isFlipped && !tile.isMatched
      );

      if (flippedTiles.length !== 2) return state;

      const isMatch = flippedTiles[0].value === flippedTiles[1].value;
      let newPlayers = [...state.players];

      if (isMatch) {
        // Increment pairs for current player if match found
        newPlayers = state.players.map((player, index) =>
          index === state.currentPlayer
            ? { ...player, pairs: player.pairs + 1 }
            : player
        );
      }

      return {
        ...state,
        moves: state.moves + 1,
        players: newPlayers,
        tiles: state.tiles.map((tile) => {
          if (tile.isFlipped && !tile.isMatched) {
            return {
              ...tile,
              isFlipped: !isMatch, // Keep flipped if matched, flip back if not
              isMatched: isMatch, // Set matched if match found
            };
          }
          return tile;
        }),
      };
    }

    case "NEXT_PLAYER":
      return {
        ...state,
        currentPlayer: (state.currentPlayer + 1) % state.numPlayers,
      };

    case "END_GAME":
      return {
        ...state,
        screen: "results",
        endTime: Date.now(),
      };

    case "RESET_GAME":
      return initialState;

    default:
      return state;
  }
}
