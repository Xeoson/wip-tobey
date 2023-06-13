/* eslint-disable @typescript-eslint/restrict-template-expressions */
export const createClassNames =
  (classes: Record<string, string>) =>
  <T extends Record<string, any>>(styles: T) => {
    const res = Object.entries(styles)
      .map(([cn, style]) => {
        // return classes[`${cn}_${style}`]
        return `${classes[cn]} ${classes[style]}`
      })
      .join(' ')

    return classes.main + ' ' + res
  }
