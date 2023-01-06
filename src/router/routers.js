import { Navigate } from "react-router-dom";
import Main from "../components/Main/Main";
import Projects from "../components/Projects/Projects";
import Contacts from "../components/Contacts/Contacts";
import Photos from "../components/Photos/Photos";

export const privateRoutes = [
    { id: 1, path: '/main', element: <Main /> },
    { id: 2, path: '/projects', element: <Projects /> },
    { id: 3, path: '/contacts', element: <Contacts /> },
    { id: 4, path: '/photos', element: <Photos /> },
    { id: 5, path: '/', element: <Navigate to="/main" /> },
]

export const publicRoutes = [
    // { id: 1, path: '/*', element: <Navigate to="/login" /> },
    // { id: 2, path: '/login', element: <Login /> },
]