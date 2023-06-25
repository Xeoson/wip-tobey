/* eslint-disable curly */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
export const createClassNames =
  (classes: Record<string, string>) =>
  <T extends Record<string, any>>(styles?: T, ...additional: any[]) => {
    if (!styles) return classes.main + ' ' + additional.filter(Boolean).join(' ')
    const res = Object.entries(styles)
      .map(([cn, style]) => {
        return classes[`${cn}_${style}`] || `${cn}_${style}`
      })
      .join(' ')

    return classes.main + ' ' + res + ' ' + additional.filter(Boolean).join(' ')
  }
