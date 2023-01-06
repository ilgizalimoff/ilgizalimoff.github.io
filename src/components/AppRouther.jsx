import React from 'react'
import { Route, Routes } from 'react-router'
import { privateRoutes } from '../router/routers'

export default function AppRouther() {
    return (
        <Routes>
            {privateRoutes.map(route =>
                <Route key={route.id} path={route.path} element={route.element} />)
            }
        </Routes>

    )
}
