# react-responsive-utils

Responsive utilities for React

## Setup

Copy the the `lib` folder in your project, typically as a `utils/responsive` folder.

You can also configure the `breakpoints.js` file if you need other values than the default ones.

## Dependencies

You need to install the `debounce` package.

## Use

There are 2 ways to use the utilities:

### Via Styled Components

This is the typical approach to use the utilities.

```
import React from 'react'
import styled, { css } from 'styled-components'
import { desktop, tablet, mobile } from '../utils/responsive/media-queries'

const Container = styled.div`
  display: grid;
  ${desktop(css`
    grid-template-columns: 1fr 1fr 1fr;
  `)}
  ${tablet(css`
    grid-template-columns: 1fr 1fr;
  `)}
  ${mobile(css`
    grid-template-columns: 1fr;
  `)}
`
```

There are also `xxxOnly` utilities to avoid visibility-related boilerplate code:

```
// Instead of:
const DesktopContainer = styled.div`
  ${tabletAndMobile(css`
    display: none;
  `)}
`

// Do this:
const DesktopContainer = styled.div`
  ${desktopOnly}
`
```

### Via React hooks

This approach allows you to use the utilities in an imperative way.

```
import React from 'react'
import useResponsive from '../utils/responsive/use-responsive'
import largeMapSrc from './images/map-large.jpg'
import smallMapSrc from './images/map-small.jpg'

const Map = () => {
  const { desktop } = useResponsive()
  return (
    <img src={desktop ? largeMapSrc : smallMapSrc} alt="Map" />
  )
}
```

### Future work

These utilities could be provided as a stand-alone NPM package. Changing the breakpoints values should still be possible in an easy and elegant way.
