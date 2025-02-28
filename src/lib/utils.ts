import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { GameTheme, GridSize, Tile } from "./types";
import { ICON_OPTIONS } from "./constants";
import { LucideIcon } from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateTiles(theme: GameTheme, gridSize: GridSize): Tile[] {
  const gridDimension = parseInt(gridSize.split("x")[0]);
  const totalTiles = gridDimension * gridDimension;
  const pairsNeeded = totalTiles / 2;

  let values: (number | LucideIcon)[];
  if ((theme === "numbers")) {
    values = Array.from({ length: pairsNeeded }, (_, i) => i + 1);
  } else {
    // Use Lucide icons
    values = ICON_OPTIONS.slice(0, pairsNeeded);
  }

  // Duplicate each value to create pairs and shuffle
  const pairedValues = [...values, ...values];
  const shuffledValues = pairedValues.sort(() => Math.random() - 0.5);

  // Create tile objects
  return shuffledValues.map((value, index) => ({
    id: index,
    value,
    isFlipped: false,
    isMatched: false,
  }));
}
