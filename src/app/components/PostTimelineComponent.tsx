import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TPostTimeline {
  showModal: boolean;
  content: string;
  handleCloseModal: () => void;
  handleContentOnChange: (string: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handlePostContent: () => void;
}

const PostTimelineComponent = (props: TPostTimeline) => {
  return (
    <>
      {props.showModal ? (
        <div className="bg-black flex justify-center items-center bg-opacity-85 fixed max-w-[500px] w-full z-10 min-h-screen">
          <div className="bg-white max-w-[350px] w-full p-3 rounded-md">
            <div className="flex justify-between">
              <p className="text-xl font-bold">Post something</p>
              <FontAwesomeIcon
                onClick={props.handleCloseModal}
                icon={faXmark}
                className="my-auto cursor-pointer"
              />
            </div>
            <textarea
              className="w-full border border-black rounded-md mt-4 outline-none p-2"
              value={props.content}
              onChange={props.handleContentOnChange}
              name=""
              id=""          
            />
            <button
              className="w-full leading-10 bg-blue-500 mt-4 text-white font-bold"
              onClick={props.handlePostContent}
            >
              Post
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
};

export default PostTimelineComponent;