declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}

interface Window {
  gtag?: (...args: any[]) => void
}
