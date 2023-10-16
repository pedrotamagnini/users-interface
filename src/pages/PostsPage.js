import React from 'react';
import '../App.css';
import PostsTable from '../components/tables/PostsTable';
import Nav from '../components/utils/Nav';

function PostsPage() {
    return (
        <div>
            <h1 className="home-title">Posts Dashboard</h1>
            <div>
                <Nav />
            </div>
            <div className="tables-container">
                <PostsTable />
            </div>
        </div>
    );
}

export default PostsPage;
