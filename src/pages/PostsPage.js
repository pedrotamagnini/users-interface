import React from 'react';
import '../App.css';
import PostsTable from '../components/tables/PostsTable';
import Nav from '../components/utils/Nav';
import FormPosts from "../components/posts/FormPosts";

function PostsPage() {
    return (
        <div>
            <h1 className="home-title">Posts Dashboard</h1>
            <div>
                <Nav />
            </div>
            <div className="tables-container">
                <PostsTable />
                <FormPosts />
            </div>
        </div>
    );
}

export default PostsPage;
