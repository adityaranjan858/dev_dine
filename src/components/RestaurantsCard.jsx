import { RES_IMG_CDN } from "./utils/constants";

const RestaurantsCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  costForTwo,
  sla,
}) => {
  const imageUrl = RES_IMG_CDN + cloudinaryImageId;
  const { slaString } = sla;
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
          <p className="text-gray-600 mb-2">{cuisines.join(", ")}</p>
                  <div className="flex items-center justify-between">
                      <div className="bg-green-600 font-medium px-1 rounded-sm">
                          <span className="text-yellow-500 mr-1">★</span>
                          <span className="text-white">{avgRating}</span>                          
                      </div>

            <span className="text-gray-700 font-medium">|</span>
            <span className="text-gray-700 font-medium">{costForTwo}</span>
            <span className="text-gray-700 font-medium">|</span>
            <span className="text-gray-700 font-medium">{slaString}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantsCard;
