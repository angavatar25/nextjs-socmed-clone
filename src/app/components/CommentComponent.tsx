import { faPaperPlane, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentsDummies from "../dummies/CommentsDummies";

interface TComments {
  showComments: boolean;
  commentVal?: string;
  comments: TComment[];
  onChangeComment?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnterComment: (e: any) => void;
  handlePostComment?: () => void;
  handleCloseComment?: () => void;
}

interface TComment {
  id: number;
  profilePic: string;
  profileName: string;
  comment: string;
};

const CommentComponent = (props: TComments) => {
  return (
    <>
      {props.showComments ? (
        <div className="bg-black flex justify-center items-center bg-opacity-85 fixed max-w-[500px] w-full z-10 min-h-screen">
          <div className="bg-white max-w-[400px] w-full p-3 rounded-md">
            <div className="flex justify-between">
              <p className="text-xl font-semibold">Comments</p>
              <FontAwesomeIcon
                onClick={props.handleCloseComment}
                icon={faXmark}
                className="my-auto cursor-pointer"
              />
            </div>
            <div className="mt-5">
              {props.comments.map((comment, idx) => (
                <div key={`comment-${comment.id}`}>
                  <div>
                    <div className="flex gap-2 my-3">
                      <div className="rounded-full h-8 w-8 overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          src={comment.profilePic}
                          alt=""
                        />
                      </div>
                      <p className="font-semibold my-auto">{comment.profileName}</p>
                    </div>
                    <p className="text-sm">{comment.comment}</p>
                  </div>
                  {(props.comments.length - 1) !== idx && (
                    <div className="border-b border-gray-200 w-full h-[0.5px] mt-3"/>
                  )}
                </div>  
              ))}
            </div>
            <div className="flex justify-between mt-4 gap-2">
              <input
                className="border max-w-[330px] pl-3 w-full leading-8 rounded-md border-gray-300 outline-none focus:border-blue-500"
                placeholder="Insert your comment"
                type="text"
                onChange={props.onChangeComment}
                onKeyDown={props.onEnterComment}
                value={props.commentVal}
                name=""
                id=""
              />
              <button
                onClick={props.onEnterComment}
                className="bg-blue-500 w-9 h-9 rounded-full text-white"
              >
                <FontAwesomeIcon icon={faPaperPlane}/>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
};

export default CommentComponent;