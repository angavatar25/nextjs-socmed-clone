import { faBell, faHome, faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavComponent = () => {
  return (
    <div className="bg-white w-full sticky bottom-0">
      <div className="flex items-center gap-5 justify-between p-5">
        <FontAwesomeIcon icon={faHome}/>
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
        <div className=" border border-black rounded-full flex items-center justify-center w-8 h-8">
          <FontAwesomeIcon icon={faPlus}/>
        </div>
        <FontAwesomeIcon icon={faBell}/>
        <div className="w-6 h-6 rounded-full bg-gray-500"/>
      </div>
    </div>
  )
};

export default NavComponent;