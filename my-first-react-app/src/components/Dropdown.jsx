import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


export default function Dropdown({ name, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
   setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="dropdown" onClick={toggleDropdown}>
        <span>{name}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {
        isOpen && <div>{children}</div>
      }
    </>
  );
}