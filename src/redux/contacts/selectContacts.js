import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.items;
export const selectFilterValue = state => state.contacts.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filter) => {
    return contacts?.filter(contact =>
      contact.name?.toLowerCase().includes(filter?.toLocaleLowerCase())
    );
  }
);
