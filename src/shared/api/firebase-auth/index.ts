import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  type Auth,
} from 'firebase/auth'

const DEFAULT_ERR_MESS = 'Something went wrong'

const authErrorMessages: Record<string, string> = {
  'auth/email-already-in-use': 'User already exist',
  'auth/user-not-found': 'User with this email not found',
  'auth/wrong-password': 'Uncorrect email or password',
}

export default class FirebaseAuth {
  constructor(public auth: Auth) {}

  private async withErrorHandle<T>(func: () => Promise<T>) {
    try {
      return await func()
    } catch (error: any) {
      console.error('error', error)
      const errMess = authErrorMessages[error.code]
      throw new Error(errMess ?? DEFAULT_ERR_MESS)
    }
  }

  async signUpWithEmail(email: string, password: string) {
    return await this.withErrorHandle(async () => {
      const res = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      )
      return res.user
    })
  }

  async signInWithEmail(email: string, password: string) {
    return await this.withErrorHandle(async () => {
      const res = await signInWithEmailAndPassword(this.auth, email, password)
      return res.user
    })
  }

  async signOut() {
    await this.withErrorHandle(async () => {
      await signOut(this.auth)
    })
  }
}
