import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPosition,
  selectVisiblePositions,
} from "../features/positions/positions-slice";
import data from "../mock/data.json";
import { selectFilters } from "../features/filters/filter-slice";

export const usePositions = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  );

  useEffect(() => {
    dispatch(addPosition(data));
  }, []);

  return positions;
};
