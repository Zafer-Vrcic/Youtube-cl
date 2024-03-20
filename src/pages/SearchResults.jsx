import { useSearchParams } from 'react-router-dom';
import SideBar from './../components/SideBar';
import { useEffect, useState } from 'react';
import { getData } from '../utils/getData';
import Loader from './../components/Loader';
import VideoCard from './../components/VideoCard';

const SearchResults = () => {
  const [results, setResults] = useState(null);

  const [searchParams] = useSearchParams();
  const query = searchParams.get('search_query');

  useEffect(() => {
    // for every request to delete a data
    setResults(null);

    // for new request
    getData(`/search?query=${query}&type=video`).then((data) =>
      setResults(data)
    );
  }, [query]);

  return (
    <div className="flex">
      <SideBar />
      <div className="flex justify-center flex-1 p-5   h-screen overflow-auto video-layout  ">
        <div className="flex flex-col max-w-lg gap-10 ">
          <p className="text-lg">
           results for <span className="font-bold">{query}</span> 
          </p>
          {!results ? (
            <Loader />
          ) : (
            results.data.map(
              (item) =>
                item.type === 'video' && <VideoCard video={item} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;