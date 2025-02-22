import { useEffect } from "react";
import RestaurantsCard from "./RestaurantsCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../redux/slices/restaurantsSlice";
import RestaurantCardShimmer from "./RestaurantCardShimmer";

const Restaurants = () => {
    const {restaurants, loading } = useSelector(store => store.restaurant);
    const dispatch = useDispatch();

    const shimmerCount = restaurants.length || 8;

    useEffect(() => {
        dispatch(fetchRestaurants());
    }, []); 
    
  return (
      <>
          <div className="container mx-auto px-8 py-8">
              <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold mb-4">Welcome to <span className="text-fire">Dev Dine!</span></h1>
                  <p className="text-xl text-gray-400">Our restaurants are available now.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {loading ?
                      Array.from({ length: shimmerCount }).map((_, index) => (
                          <RestaurantCardShimmer key={index} />
                      ))
                  :
                  restaurants.map(restaurant => (
                      <RestaurantsCard key={restaurant?.info?.id} {...restaurant?.info} />
                  ))
                  }</div> 
          </div>
      </>
  )
}

export default Restaurants;