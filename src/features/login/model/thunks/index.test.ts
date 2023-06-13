import { IUser } from 'app/api/firestore/types'
import { MainActions } from 'app/model/redux/main/slice'
import { UserActions } from 'entities/user/model/slice'
import { TestThunk } from 'shared/lib/jest/testThunk'
import { SignUpFields, signIn, signOut, signUp } from '.'
import { ILoginState, LoginReducer } from '../slice'
import browserRoutes from 'app/lib/browserRoutes'

describe('main', () => {
  test('signUp seccess', async () => {
    const enterFormData: SignUpFields = {
      email: '999123@123.123',
      password: '1234',
    }
    const thunk = new TestThunk(signUp)
    const mockSignUpWithEmail =
      thunk.extra.auth.signUpWithEmail.mockResolvedValue({
        email: '999123@123.123',
        uid: '321',
      } as any)

    const return_mockSetUser = {
      id: '321',
      email: '999123@123.123',
    } as IUser
    const mockSetUser =
      thunk.extra.firestore.collection.set.mockResolvedValue(return_mockSetUser)

    await thunk.call(enterFormData)

    expect(mockSetUser).toBeCalled()
    expect(mockSignUpWithEmail).toBeCalled()
    expect(thunk.dispatch).toBeCalledWith(
      UserActions.set({ user: return_mockSetUser })
    )
    expect(thunk.dispatch).toBeCalledWith(
      MainActions.set({ openedModal: undefined })
    )
  })

  test('signUp error:emailExist', async () => {
    const enterFormData: SignUpFields = {
      email: '999123@123.123',
      password: '1234',
    }
    const thunk = new TestThunk(signUp)

    const return_mockSignUpWithEmail = {
      message: 'User already exist',
    } as any
    const mockSignUpWithEmail =
      thunk.extra.auth.signUpWithEmail.mockRejectedValue(
        return_mockSignUpWithEmail
      )

    const res = await thunk.call(enterFormData)

    expect(thunk.extra.firestore.collection.set).not.toBeCalled()
    expect(mockSignUpWithEmail).toBeCalled()
    expect(res.meta.requestStatus).toBe('rejected')
    expect(res.error).toEqual(return_mockSignUpWithEmail)
    expect(
      LoginReducer({ formError: '', isLoading: true } as ILoginState, res)
    ).toEqual({ isLoading: false, formError: 'User already exist' })
  })

  test('signIn success', async () => {
    const enterFormData: SignUpFields = {
      email: '999123@123.123',
      password: '1234',
    }
    const thunk = new TestThunk(signIn)
    const mockSignInWithEmail =
      thunk.extra.auth.signInWithEmail.mockResolvedValue({
        email: '999123@123.123',
        uid: '321',
      } as any)

    const return_mockSetUser = {
      id: '321',
      email: '999123@123.123',
    } as IUser
    const mockGetUser =
      thunk.extra.firestore.collection.get.mockResolvedValue(return_mockSetUser)

    await thunk.call(enterFormData)

    expect(mockGetUser).toBeCalled()
    expect(mockSignInWithEmail).toBeCalled()
    expect(thunk.dispatch).toBeCalledWith(
      UserActions.set({ user: return_mockSetUser })
    )
    expect(thunk.dispatch).toBeCalledWith(
      MainActions.set({ openedModal: undefined })
    )
  })

  test('signOut success', async () => {
    const thunk = new TestThunk(signOut)

		const mockReplace = jest.fn()
		Object.defineProperty(window, 'location', {value: {replace: mockReplace}})

    await thunk.call()

		expect(mockReplace).toBeCalledWith(browserRoutes.home)
  })
})
