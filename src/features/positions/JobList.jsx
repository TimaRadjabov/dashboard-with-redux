import { useDispatch } from "react-redux";
import { JobPosition } from "./JobPosition";
import { usePositions } from "../../hooks/usePosition";
import { addFilter } from "../filters/filter-slice";

const JobList = () => {
  const positions = usePositions();
  const dispatch = useDispatch();
  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };
  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          handleAddFilter={handleAddFilter}
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
