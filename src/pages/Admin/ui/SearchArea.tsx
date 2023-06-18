import { useAppSelector } from 'app/model/redux'
import SearchInput from 'features/search/ui/SearchInput'
import { useCallback, useEffect } from 'react'
import Button from 'shared/kit/ui/Button/Button'
import Flex from 'shared/kit/ui/Flex/Flex'
import debounce from 'shared/lib/helpers/debounce'
import { endpoints } from '../api/queries'
import {
  getSelectedCollectionData,
  useSelectedCollection,
  useSelectedSearchField,
} from '../model/selectors'
import { useAdminActions } from '../model/slice'

interface SearchAreaProps {}

const SearchArea = (props: SearchAreaProps) => {
  const { searchFields } = useAppSelector(getSelectedCollectionData)
  const selectedField = useSelectedSearchField()
  const selectedCollection = useSelectedCollection()

  const { set: setAdmin } = useAdminActions()
  const { refetch: refetchCollections } =
    endpoints.collectionDocs.useQuerySubscription(selectedCollection)

  useEffect(() => {
    setAdmin({ selectedSearchField: searchFields[0] })
  }, [selectedCollection])

  const cb = {
    onSearch: useCallback((value: string) => {
      setAdmin({ searchTerm: value, formType: undefined })
      refetchCollections()
    }, []),
    onSetSearchField: (field: string) => {
      setAdmin({ selectedSearchField: field })
    },
  }

  const onSearchDebounce = useCallback(debounce(cb.onSearch, 500), [])

  return (
    <Flex direction="column" gapY="sm">
      <SearchInput
        disabled={!selectedField}
        placeholder="Search by field"
        onValueChange={onSearchDebounce}
        onSearch={cb.onSearch}
      />
      <Flex gapX="xs">
        {searchFields.map((el) => (
          <Button
            styles={{
              theme: selectedField === el ? 'secondary' : 'primary',
              p: 'sm',
            }}
            onClick={() => cb.onSetSearchField(el)}
            key={el}
          >
            {el}
          </Button>
        ))}
      </Flex>
    </Flex>
  )
}

export default SearchArea
