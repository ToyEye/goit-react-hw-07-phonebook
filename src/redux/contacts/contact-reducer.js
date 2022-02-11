import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './contact-action';
import * as contacts from './contactsApi';

const filter = createReducer('', {
  [actions.filterChange]: (_, { payload }) => payload,
});

// const item = createReducer([], {
//   [contacts.contactApi.endpoints.fetchContacts.matchFulfilled]: (
//     _,
//     { paylaod }
//   ) => paylaod,
// });

console.log(contacts.contactApi);

export default combineReducers({
  filter,
  // item,
});
