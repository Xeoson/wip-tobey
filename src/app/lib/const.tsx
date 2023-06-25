import { createMatchMedia } from '@/shared/lib/hooks/useMatchMedia'

export const hexColorRegex = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/

// export const defaultAvatarUrl =
//   'https://res.cloudinary.com/ds3ctqoro/image/upload/v1681982298/blank_avatar_egolkc.png'

export const [MatchTabletProvider, useMatchTablet] =
  createMatchMedia(`(min-width: 768px)`)
export const [MatchHoverProvider, useMatchHover] =
  createMatchMedia(`(hover: hover)`)
