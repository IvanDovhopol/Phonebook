import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectFilters = state => state.filter.query;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts?.data?.results.filter(({ name, phone, email }) => {
      return (
        name.toLowerCase().includes(normalizedFilter) ||
        email.toLowerCase().includes(normalizedFilter) ||
        phone.toLowerCase().includes(normalizedFilter)
      );
    });
  }
);
