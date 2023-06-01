/* eslint-disable @typescript-eslint/no-floating-promises */
import { auth } from 'app/api/firebase'
import { AppFirestore } from 'app/api/firestore/firestore'
import { useAppDispatch } from 'app/model/redux'
import { UserActions } from 'entities/user/model/slice'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'

export default () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        AppFirestore.user.get(user.uid).then((user) => {
          dispatch(UserActions.set({ user, isDataLoading: false }))
        })
      } else {
        dispatch(UserActions.set({ isDataLoading: false }))
      }
    })
  }, [])
}
