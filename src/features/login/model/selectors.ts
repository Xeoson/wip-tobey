import createSliceSelectors from "@/shared/lib/helpers/createSliceSelectors";

console.log('create sleectors login');
export const { useFormType, useIsLoading, useFormError } = createSliceSelectors(
  'login',
  'formError',
  'formType',
  'isLoading'
)
