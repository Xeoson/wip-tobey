/* eslint-disable @typescript-eslint/no-floating-promises */
import { type Dispatch } from '@reduxjs/toolkit'
import { AppFirestore } from 'app/api/firestore/firestore'
import { UserActions } from 'entities/user/model/slice'
import { AppAuth } from 'features/login/api/auth'
import { useEffect } from 'react'

export default (dispatch: Dispatch) => {
  useEffect(() => {
    AppAuth.authChanged((user) => {
      if (user) {
        AppFirestore.user.get(user.uid).then((user) => {
          console.log('user data', user)
          dispatch(UserActions.set({ user, isDataLoading: false }))
        })
      } else {
        dispatch(UserActions.set({ isDataLoading: false }))
      }
    })
  }, [])
}
