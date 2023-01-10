import { Navigate } from "react-router-dom";
import Main from "../components/Main/Main";
import Projects from "../components/Projects/Projects";
import Contacts from "../components/Contacts/Contacts";
import Posts from "../components/Posts/Posts";
import Test from "../TEST/Test";
import PostIdItem from "../components/Posts/PotsIdItem/PostIdItem";

export const privateRoutes = [
    { id: 1, path: '/main', element: <Main /> },
    { id: 2, path: '/projects', element: <Projects /> },
    { id: 3, path: '/contacts', element: <Contacts /> },
    { id: 4, path: '/posts/:id', element: <PostIdItem /> },
    { id: 5, path: '/posts', element: <Posts /> },
    { id: 6, path: '/', element: <Navigate to="/main" /> },
    { id: 7, path: '/*', element: <Test /> },
]

export const publicRoutes = [
    // { id: 1, path: '/*', element: <Navigate to="/login" /> },
    // { id: 2, path: '/login', element: <Login /> },
]