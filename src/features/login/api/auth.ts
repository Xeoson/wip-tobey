import { auth } from 'app/api/firebase'
import FirebaseAuth from 'shared/api/firebase-auth'

export const AppAuth = new FirebaseAuth(auth)
