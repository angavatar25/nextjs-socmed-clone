import { faBell, faHome, faMagnifyingGlass, faMessage, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TNav {
  handleShowPost: () => void;
}

const NavComponent = (props: TNav) => {
  return (
    <div className="bg-white/70 w-full sticky bottom-0 inset-0 backdrop-blur-md">
      <div className="flex items-center gap-5 justify-between p-5">
        <FontAwesomeIcon icon={faHome}/>
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
        <FontAwesomeIcon icon={faMessage}/>
        <FontAwesomeIcon icon={faUser}/>
      </div>
      <button
        onClick={props.handleShowPost}
        className="fixed -top-12 bg-blue-500 w-10 h-10 rounded-full text-white right-2 shadow-md"
      >
        <FontAwesomeIcon icon={faPlus}/>
      </button>
    </div>
  )
};

export default NavComponent;