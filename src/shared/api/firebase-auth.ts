import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	type Auth,
	type NextOrObserver,
	type User,
} from 'firebase/auth'

export class FirebaseAuth {
  constructor(public auth: Auth) {}

  async signUpWithEmail(email: string, password: string) {
    try {
      const res = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      )
      return res.user
    } catch (error: any) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          throw new Error('User already exist')
        default:
          console.error('error.message', error.message)
          throw new Error('Something went wrong')
      }
    }
  }

  async signInWithEmail(email: string, password: string) {
    try {
      const res = await signInWithEmailAndPassword(this.auth, email, password)
      return res.user
    } catch (error: any) {
      switch (error.code) {
        case 'auth/user-not-found':
          throw new Error('User with this email not found')
        default:
          console.error('error.message', error.message)
          throw new Error('Something went wrong')
      }
    }
  }

  async signOut() {
    try {
      await signOut(this.auth)
    } catch (error: any) {
      console.error('error.message', error.message)
      throw new Error('Something went wrong')
    }
  }

  async authChanged(callback: NextOrObserver<User>) {
    return onAuthStateChanged(this.auth, callback)
  }
}
