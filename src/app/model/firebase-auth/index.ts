import { auth } from 'app/api/firebase'
import { type Auth } from 'firebase/auth'

class FirebaseAuth {
  constructor(public auth: Auth) {}
}

export default new FirebaseAuth(auth)
