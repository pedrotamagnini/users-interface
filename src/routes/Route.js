import Home from "../pages/Home";
import Welcome from "../pages/Welcome";
import About from "../pages/About";
import {Route as ReactRoute, Routes} from "react-router";
import Users from '../pages/Users'
import PostsPage from '../pages/PostsPage'
import Comments from '../pages/Comments'

const Route = () => {
    return (
        <Routes>
            <ReactRoute path={"/"} element={<Welcome/>}/>
            <ReactRoute path={"/home"} element={<Home/>}/>
            <ReactRoute path={"/users"} element={<Users/>}/>
            <ReactRoute path={"/posts-page"} element={<PostsPage/>}/>
            <ReactRoute path={"/comments"} element={<Comments/>}/>
            <ReactRoute path={"/about"} element={<About/>}/>
        </Routes>
    )
}

export default Route;
