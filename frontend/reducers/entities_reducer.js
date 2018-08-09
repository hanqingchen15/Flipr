import { combineReducer } from 'redux';

import usersReducer from './users_reducer';

const entitiesReducer = combineReducer({
  users: usersReducer
});

export default entitiesReducer;
