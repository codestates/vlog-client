import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { displayData } from "../modules/mainPageModule";
import { RootState } from "../modules";
import { fakedata } from "../fakedata";

import axios from "axios";

export default function usePoster() {
  const state = useSelector((state: RootState) => state.mainPageReducer);
  const dispatch = useDispatch();

  return {
    state,
  };
}
