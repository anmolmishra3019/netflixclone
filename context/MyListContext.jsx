"use client";

import { createContext, useContext, useCallback, useMemo } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const MyListContext = createContext(undefined);

export function MyListProvider({ children }) {
  const [myList, setMyList] = useLocalStorage("netflix-my-list", []);

  const addToList = useCallback(
    (movie) => {
      setMyList((prev) => {
        if (prev.some((m) => m.id === movie.id)) return prev;
        return [...prev, movie];
      });
    },
    [setMyList]
  );

  const removeFromList = useCallback(
    (movieId) => {
      setMyList((prev) => prev.filter((m) => m.id !== movieId));
    },
    [setMyList]
  );

  const isInList = useCallback(
    (movieId) => {
      return myList.some((m) => m.id === movieId);
    },
    [myList]
  );

  const toggleList = useCallback(
    (movie) => {
      if (isInList(movie.id)) {
        removeFromList(movie.id);
      } else {
        addToList(movie);
      }
    },
    [isInList, removeFromList, addToList]
  );

  const value = useMemo(
    () => ({ myList, addToList, removeFromList, isInList, toggleList }),
    [myList, addToList, removeFromList, isInList, toggleList]
  );

  return (
    <MyListContext.Provider value={value}>{children}</MyListContext.Provider>
  );
}

export function useMyList() {
  const context = useContext(MyListContext);
  if (!context) {
    throw new Error("useMyList must be used within a MyListProvider");
  }
  return context;
}
