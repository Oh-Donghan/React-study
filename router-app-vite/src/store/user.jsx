import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

UserStore.propTypes = {
  children: PropTypes.node.isRequired,
};

export const UserContext = createContext();

const initialUser = {
  name: 'dong_oh',
  job: 'FE-developer',
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'changeJob':
      // state의 job에 해당하는 데이터를 action.text
      return { ...state, job: action.text };

    default:
      break;
  }
};

export default function UserStore(props) {
  const [user, dispatch] = useReducer(userReducer, initialUser);
  console.log(user);

  return (
    <UserContext.Provider value={{user, dispatch}}>
      {props.children}
    </UserContext.Provider>
  );
}
