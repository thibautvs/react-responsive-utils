import breakpoints from './breakpoints'

const desktop = (rules) => `
  @media screen and (min-width: ${breakpoints.desktop}px) {
    ${rules}
  }
`

/* prettier-ignore */
const tablet = (rules) => `
  @media screen and (min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop - 1}px) {
    ${rules}
  }
`

const mobile = (rules) => `
  @media screen and (max-width: ${breakpoints.tablet - 1}px) {
    ${rules}
  }
`

const desktopAndTablet = (rules) => `
  @media screen and (min-width: ${breakpoints.tablet}px) {
    ${rules}
  }
`

const tabletAndMobile = (rules) => `
  @media screen and (max-width: ${breakpoints.desktop - 1}px) {
    ${rules}
  }
`

const displayNone = 'display: none;'

const desktopOnly = tabletAndMobile(displayNone)

const tabletOnly = `${desktop(displayNone)}${mobile(displayNone)}`

const mobileOnly = desktopAndTablet(displayNone)

const desktopAndTabletOnly = mobile(displayNone)

const tabletAndMobileOnly = desktop(displayNone)

export {
  desktop,
  tablet,
  mobile,
  desktopAndTablet,
  tabletAndMobile,
  desktopOnly,
  tabletOnly,
  mobileOnly,
  desktopAndTabletOnly,
  tabletAndMobileOnly,
}
