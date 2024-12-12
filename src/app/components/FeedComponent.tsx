import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TFeedProps {
  data: TFeed;
  handleCommentClick: () => void;
}

interface TFeed {
  id: number;
  userName: string;
  location?: string | null;
  postContent: string;
  totalLikes: number;
  totalComments: number;
  profilePicture: string;
}

const FeedComponent = (props: TFeedProps) => {
  return (
    <div className="bg-gray-100 p-3 mb-5 rounded-md">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="border rounded-full bg-transparent h-10 w-10 border-pink-500 flex items-center justify-center border-dashed">
            <div className="rounded-full h-8 w-8 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={props.data.profilePicture}
                alt=""
              />
            </div>
          </div>
          <div className="text-xs my-auto">
            <p className="text-[#2D4174]">{props.data.userName}</p>
            {props.data.location ? (
              <p className="text-gray-400">{props.data.location}</p>
            ) : null}
          </div>
        </div>
        <div className="border w-5 h-5 my-auto flex justify-center items-center rounded-full border-gray-400">
          <FontAwesomeIcon
            icon={faEllipsis}
            className="text-gray-400"
          />
        </div>
      </div>
      <div className="my-4">
        <p>{props.data.postContent}</p>
      </div>
      <div className="border-t border-gray-300 w-full h-1"/>
      <div className="flex gap-6 mt-4">
        <div className="flex gap-2">
          <FontAwesomeIcon icon={faHeart} className="my-auto"/>
          <p>{props.data.totalLikes}</p>
        </div>
        <div
          onClick={props.handleCommentClick}
          className="flex gap-2"
        >
          <FontAwesomeIcon icon={faComment} className="my-auto"/>
          <p>{props.data.totalComments}</p>
        </div>
      </div>
    </div>
  )
};

export default FeedComponent;