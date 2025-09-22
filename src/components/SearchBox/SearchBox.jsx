import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={handleChangeFilter}
      />
    </div>
  );
};
