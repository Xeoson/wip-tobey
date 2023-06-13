import { createSelector } from '@reduxjs/toolkit'
import { type AppState } from 'app/model/redux/types'
import createCollectionSchema from 'pages/Admin/lib/helpers/createCollectionSchema'

export const getSelectedCollection = (state: AppState) =>
  state.admin!.selectedCollection
export const getFormType = (state: AppState) => state.admin!.formType

export const getSelectedCollectionData = createSelector(
  getSelectedCollection,
  (coll) => createCollectionSchema(coll)
)
