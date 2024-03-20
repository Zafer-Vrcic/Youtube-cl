import React, { useContext } from "react";
import { categories } from "../pages/constants";
import { YoutubeContext } from "../context/youtubecontext";

const SideBar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(YoutubeContext);
  // console.log(selectedCategory)

  return (
    <div className="flex flex-col p-1 md:p-4">
      {categories.map((item, i) => (
        <div key={i}>
          <div
            onClick={() => setSelectedCategory(item)}
            className={`${
              item.name === selectedCategory.name && "bg-[#2d2d2d]"
            } flex items-center gap-2 py-4 px-2 md:px-3 text-md md:text-lg transition duration-300 cursor-pointer rounded-md hover:bg-[#2d2d2d]`}
          >
            <span className="max-sm:text-2xl">{item.icon} </span>
            <span className="max-sm:hidden">{item.name} </span>
          </div>

          {/* if diveder is true, put line  */}
          {item.divider && <hr />}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
