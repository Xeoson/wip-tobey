// type VariantsType = Record<string, string | number | boolean | undefined | null>

const cn = (...args: Array<string | boolean | number | undefined>) =>
  args.filter(Boolean).join(' ')

// const cn = <T extends Array<string | boolean>>(
//   ...args: [...T] | [...T, VariantsType]
// ) => {
//   const lastItem = args.pop() as VariantsType | string
//   if (lastItem instanceof Object) {
//     const lastItemArr = Object.keys(lastItem).filter((key) => lastItem[key])
//     return args.filter(Boolean).concat(lastItemArr).join(' ')
//   } else {
//     return args.filter(Boolean).concat(lastItem).join(' ')
//   }
// }

export default cn
