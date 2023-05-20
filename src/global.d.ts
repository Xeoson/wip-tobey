// declare module '*.scss'
declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}
declare module '*.svg'
declare module "*.webp";
declare module "*.png";
