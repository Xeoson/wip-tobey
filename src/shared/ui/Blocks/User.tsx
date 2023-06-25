import { type IUser } from '@/app/api/firestore/types/models'
import cn from '@/shared/lib/helpers/classNames'
import defaultAvatarUrl from '@/shared/lib/assets/avatar.png'
import { type DP } from '../../lib/types'
import Image, { type ISource } from './Image'
import s from './User.module.scss'

interface UserProps extends Pick<DP, 'children' | 'onClick'> {
  user: Partial<IUser>
  size?: 'sm' | 'md'
}

const avatarSources: ISource[] = [{ transform: ['w_300'] }]

const User = ({ user, size = 'md', children, ...props }: UserProps) => {
  return (
    <div className={cn(s.main, s[size])}>
      <div className={s.avatar}>
        {user.avatar ? (
          <Image publicPath={user.avatar} sources={avatarSources} />
        ) : (
          <img src={defaultAvatarUrl} />
        )}
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
