import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeedComponent = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="border rounded-full bg-transparent h-10 w-10 border-pink-500 flex items-center justify-center border-dashed">
            <div className="bg-gray-400 rounded-full h-8 w-8"/>
          </div>
          <div className="text-xs my-auto">
            <p className="text-[#2D4174]">Name</p>
            <p className="text-gray-400">Location</p>
          </div>
        </div>
        <div className="border w-5 h-5 my-auto flex justify-center items-center rounded-full border-gray-400">
          <FontAwesomeIcon
            icon={faEllipsis}
            className="text-gray-400"
          />
        </div>
      </div>
      <div className="w-full max-h-60 overflow-hidden rounded-md my-4">
        <img
          className="w-full object-cover"
          src="https://png.pngtree.com/thumb_back/fw800/background/20240625/pngtree-road-background-new-nice-trip-hd-wallpaper-image_15923914.jpg"
          alt=""
        />
      </div>
      <div className="flex gap-6">
        <div className="flex gap-2">
          <FontAwesomeIcon icon={faHeart} className="my-auto"/>
          <p>Likes</p>
        </div>
        <div className="flex gap-2">
          <FontAwesomeIcon icon={faComment} className="my-auto"/>
          <p>Comments</p>
        </div>
      </div>
    </div>
  )
};

export default FeedComponent;