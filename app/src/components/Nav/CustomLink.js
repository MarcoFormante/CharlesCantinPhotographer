import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const CustomLink = ({ to, children , onClick }) => {
    const resolvedPath = useResolvedPath(to);
    let isActive = useMatch({ path: resolvedPath.pathname, end: true });
   
    return (
        <Link to={to} className={`header-nav__list__item__link ${isActive ? "active" : ""}`} onClick={onClick}>{children}</Link>
    )
}
  
export default CustomLink