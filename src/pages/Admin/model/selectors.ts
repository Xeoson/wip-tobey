import { createSelector } from '@reduxjs/toolkit'
import createCollectionSchema from 'pages/Admin/lib/helpers/createCollectionSchema'
import createSliceSelectors from 'shared/lib/helpers/createSliceSelectors'

export const {
  useFormType,
  useSelectedCollection,
  getSelectedCollection,
  useSelectedSearchField,
} = createSliceSelectors(
  'admin',
  'formType',
  'selectedCollection',
  'selectedSearchField'
)

export const getSelectedCollectionData = createSelector(
  getSelectedCollection,
  (coll) => createCollectionSchema(coll)
)
