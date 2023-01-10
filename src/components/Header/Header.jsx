import React from 'react';
import classes from './Header.module.css';
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { constNavLinks } from '../../constants/constants';

export default function Header() {
    const location = useLocation();
    const dispatch = useDispatch()
    const disp = useSelector(state => state.burgerReducer.display)
    const links = constNavLinks

    const setActiveClass = (activeItem) => {
        dispatch({ type: 'SET_ACTIVE', payload: activeItem })
        localStorage.setItem('activeItem', `${activeItem}`)
    }
    console.log(location);
    const visibleMenu = (disp) => {
        dispatch({ type: 'SET_VISIBLE', payload: disp })
    }

    const hideMenu = (disp) => {
        dispatch({ type: 'SET_VISIBLE_FALSE', payload: disp })
    }

    return (
        <div className={classes.header}>

            <div className={classes.header_container}>

                {<Link to={links[0].link}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M31.3 21.35q1.15 0 1.925-.8.775-.8.775-1.9 0-1.15-.775-1.925-.775-.775-1.925-.775-1.1 0-1.9.775-.8.775-.8 1.925 0 1.1.8 1.9.8.8 1.9.8Zm-14.6 0q1.15 0 1.925-.8.775-.8.775-1.9 0-1.15-.775-1.925-.775-.775-1.925-.775-1.1 0-1.9.775-.8.775-.8 1.925 0 1.1.8 1.9.8.8 1.9.8Zm7.3 13.6q3.3 0 6.075-1.775Q32.85 31.4 34.1 28.35H13.9q1.3 3.05 4.05 4.825Q20.7 34.95 24 34.95ZM24 44q-4.15 0-7.8-1.575-3.65-1.575-6.35-4.275-2.7-2.7-4.275-6.35Q4 28.15 4 24t1.575-7.8Q7.15 12.55 9.85 9.85q2.7-2.7 6.35-4.275Q19.85 4 24 4t7.8 1.575q3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24t-1.575 7.8q-1.575 3.65-4.275 6.35-2.7 2.7-6.35 4.275Q28.15 44 24 44Zm0-20Zm0 17q7.1 0 12.05-4.95Q41 31.1 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.1 0-12.05 4.95Q7 16.9 7 24q0 7.1 4.95 12.05Q16.9 41 24 41Z" /></svg>
                </Link>}

                <nav className={classes.nav} >
                    {links.map((link, index) =>
                        <li key={link.id}>
                            <NavLink
                                className={location.pathname == link.link
                                    || location.pathname.includes(link.link)
                                    ? classes.active
                                    : ''}
                                onClick={() => setActiveClass(index)}
                                to={link.link}
                            >
                                {link.value}
                            </NavLink>
                        </li>
                    )}
                </nav>

                <div onClick={() => visibleMenu(disp)}
                    className={classes.menu_burger}>
                    <span />
                </div>

                <div style={{ display: disp }}
                    className={classes.menu}>
                    <div className={classes.menu_content}>
                        {links.map(link =>
                            <Link key={link.id} to={link.link}>
                                <li onClick={() => hideMenu(disp)}>
                                    {link.value}
                                </li>
                            </Link>
                        )}
                    </div>
                </div>

            </div>

        </div >
    );
}