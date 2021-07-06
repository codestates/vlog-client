import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../modules";

export default function usePoster() {
  const state = useSelector((state: RootState) => state.mainPageReducer);

  return {
    state,
  };
}
