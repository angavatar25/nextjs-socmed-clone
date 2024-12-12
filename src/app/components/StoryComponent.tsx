import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StoryComponent = () => {
  return (
    <div className="flex gap-3 overflow-scroll">
      <div>
        <div className="border rounded-full bg-transparent h-14 w-14 border-white flex items-center justify-center border-dashed">
          <div className="bg-gray-400 rounded-full h-10 w-10 flex justify-center items-center">
            <FontAwesomeIcon icon={faPlus}/>
          </div>
        </div>
        <p className="text-xs text-center">You</p>
      </div>
      {[...Array(10)].map((_num, i) => (
        <div key={`story-${i}`}>
          <div className="border rounded-full bg-transparent h-14 w-14 border-white flex items-center justify-center border-dashed">
            <div className="bg-gray-400 rounded-full h-10 w-10 border border-pink-500"/>
          </div>
          <p className="text-xs text-center">Name</p>
        </div>
      ))}
    </div>
  )
};

export default StoryComponent;