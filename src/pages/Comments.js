import React from 'react';
import '../App.css';
import CommentsTable from '../components/tables/CommentsTable';
import Nav from '../components/utils/Nav';
import FormComments from "../components/comments/FormComments";

function Comments() {
    return (
        <div>
            <h1 className="home-title">Comments Dashboard</h1>
            <div>
                <Nav />
            </div>
            <div className="tables-container">
            </div>
        </div>
    );
}

export default Comments;
