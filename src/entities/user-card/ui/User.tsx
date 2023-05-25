import { defaultAvatarUrl } from '../../../app/lib/const'
import { type IUser } from '../../../app/model/firestore/types'
import { type DP } from '../../../shared/lib/types'
import s from './User.module.scss'

interface UserProps extends Pick<DP, 'children'> {
  user: Partial<IUser>
  size?: 'sm' | 'md'
}

const User = ({ user, size = 'md', children, ...props }: UserProps) => {
  return (
    <div className={`${s.main} ${s[size]}`}>
      <div className={s.avatar}>
        <img src={user.avatar ?? defaultAvatarUrl} />
      </div>
      {user.name && (
        <div className={s.details}>
          <div className={s.name}>
            <span>{user.name}</span>
            {user.surname && <span>{user.surname}</span>}
          </div>
          {user.email && <div className={s.email}>{user.email}</div>}
        </div>
      )}
      {children}
    </div>
  )
}

export default User
