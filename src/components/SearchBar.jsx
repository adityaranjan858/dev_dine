import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRestaurants } from "../redux/slices/restaurantsSlice";

const debounce = (func, delay) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
};

const SearchBar = () => {
    const [searchedVal, setSearchVal] = useState("")
    const dispatch = useDispatch()

    const debouncedSearch = useCallback(
        debounce((query) => dispatch(fetchRestaurants(query)), 500),
        [dispatch]
    );

    const searchHandler = (e) => {
        let val = e.target.value.trim();
        setSearchVal(val);
        debouncedSearch(val);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch(fetchRestaurants(searchedVal));
    }
  return (
      <>
          <form onSubmit={submitHandler} className="text-center my-5">
              <input type="text" value={searchedVal} onChange={searchHandler} className="search-bar px-4 py-2 rounded-s-xl border border-fire focus:outline-none hover:border-green-600 focus:border-green-600 " placeholder="Search for restaurants..." />
              <button type="submit" className=" bg-fire hover:bg-green-600 text-white px-4 py-2 rounded-e-xl border border-fire hover:border-green-600">Search</button>
          </form>
          
      </>
  )
}

export default SearchBar;