import { CheckSVG } from './check.svg?react';
//import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.scss';

// const iconTypes = {
//   "check": (color) => <CheckSVG className="Icon-svg" fill={color} />,
//   "delete": (color) => <DeleteSVG className="Icon-svg" fill={color} />,
// };

function TodoIcon({ type, color}) {
  return (
    <span
      className={`Icon-container Icon-container-${type}`}
      //onClick={onClick}
    >
      {/* {iconTypes[type](color)} */}
      {/* <CheckSVG/> */}
    </span>
  )
}

export { TodoIcon };
