import React from 'react';
import './PostItem.css';

const PostItem = ({ post, onEdit, onDelete }) => {
    return (
        <div className="post-item">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-description">{post.description}</p>
            <div className="post-actions">
                <button className="post-button edit-button" onClick={() => onEdit(post)}>Edit</button>
                <button className="post-button delete-button" onClick={() => onDelete(post.id)}>Delete</button>
            </div>
        </div>
    );
};

export default PostItem;
