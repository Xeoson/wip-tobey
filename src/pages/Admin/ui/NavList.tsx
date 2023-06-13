/* eslint-disable react/prop-types */
import { type ICollections } from 'app/api/firestore/types'
import { useAppDispatch } from 'app/model/redux'
import { memo, useCallback } from 'react'
import { AiOutlineFileAdd } from 'react-icons/ai'
import Button, { type ButtonStyles } from 'shared/kit/ui/Button/Button'
import Icon, { type IconStyles } from 'shared/kit/ui/Icon/Icon'
import Text, { type TextStyles } from 'shared/kit/ui/Text/Text'
import ColumnButtonList from 'shared/ui/Blocks/ColumnButtonList'
import { adminCollections } from '../lib/const'
import { type IAdminCollection, type IAdminCollections } from '../lib/types'
import { AdminActions } from '../model/slice'

const selectBtnStyles: ButtonStyles = {
  theme: 'none',
  w: 'full',
  py: 'md',
  align: 'center',
}
const addBtnStyles: ButtonStyles = {
  theme: 'none',
  ml: 'auto',
}
const iconStyles: IconStyles = {
  theme: 'secondary',
  p: 'xs',
}
const textStyles: TextStyles = {
  fontSize: 'md',
}

const adminCollectionsArray = Object.entries(adminCollections) as Array<
  [keyof IAdminCollections, IAdminCollection<any>]
>

interface NavListProps {}

const NavList = (props: NavListProps) => {
  const dispatch = useAppDispatch()

  const cb = {
    onSelect: useCallback((coll: keyof ICollections) => {
      dispatch(
        AdminActions.set({ formType: undefined, selectedCollection: coll })
      )
    }, []),
    onAdd: useCallback(
      (e: React.MouseEvent<HTMLButtonElement>, coll: keyof ICollections) => {
        e.stopPropagation()
        dispatch(
          AdminActions.set({
            formType: 'create',
            selectedCollection: coll,
          })
        )
      },
      []
    ),
  }

  return (
    <ColumnButtonList
      key="title"
      title="collections"
      items={adminCollectionsArray}
    >
      {([coll, data]) => (
        <Button onClick={() => cb.onSelect(coll)} styles={selectBtnStyles}>
          <Text styles={textStyles}>{coll}</Text>
          {data.adding && (
            <Button
              onClick={(e: any) => cb.onAdd(e, coll)}
              styles={addBtnStyles}
            >
              <Icon styles={iconStyles} Icon={AiOutlineFileAdd} />
            </Button>
          )}
        </Button>
      )}
    </ColumnButtonList>
  )
}

export default memo(NavList)
