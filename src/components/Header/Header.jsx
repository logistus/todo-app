import icon_moon from "../../assets/icon-moon.svg"
import icon_sun from "../../assets/icon-sun.svg"
import "./header.css"
import { Helmet } from 'react-helmet'

import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '../../app/themeSlice'

function Header() {
  const theme = useSelector((state) => {
    return state.theme
  })
  const dispatch = useDispatch()

  return (
    <header>
      <Helmet>
        <body className={theme}></body>
      </Helmet>
      <div className="title">TODO</div>
      {theme === 'light' ?
        <a href="#" onClick={() => dispatch(setTheme({ theme: 'dark' }))} title="Change Theme"><img src={icon_moon} alt="Moon" aria-label="Switch to dark theme" /></a> :
        <a href="#" onClick={() => dispatch(setTheme({ theme: 'light' }))} title="Change Theme"><img src={icon_sun} alt="Moon" aria-label="Switch to light theme" /></a>
      }
    </header >
  )
}

export default Header