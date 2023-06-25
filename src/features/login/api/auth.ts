import { auth } from '@/app/lib/config/firebase'
import FirebaseAuth from '@/shared/api/firebase-auth'

export const AppAuth = new FirebaseAuth(auth)
