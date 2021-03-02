import { useState, useEffect } from 'react'
import breakpoints from './breakpoints'

const useResponsive = () => {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isDesktopOrTablet, setIsDesktopOrTablet] = useState(false)
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false)
  const [screenWidth, setScreenWidth] = useState(0)
  const updateValues = () => {
    const w = window.innerWidth
    setIsDesktop(w >= breakpoints.desktop)
    setIsTablet(w >= breakpoints.tablet && w <= breakpoints.desktop - 1)
    setIsMobile(w <= breakpoints.tablet - 1)
    setIsDesktopOrTablet(w >= breakpoints.tablet)
    setIsTabletOrMobile(w <= breakpoints.desktop - 1)
    setScreenWidth(w)
  }
  const handleResize = () => {
    updateValues()
  }
  useEffect(() => {
    updateValues()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return {
    isDesktop,
    isTablet,
    isMobile,
    isDesktopOrTablet,
    isTabletOrMobile,
    screenWidth,
  }
}

export default useResponsive
