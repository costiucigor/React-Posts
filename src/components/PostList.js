import React, { useState } from 'react';
import PostItem from './PostItem';
import './PostList.css';

const PostList = ({ posts, onEdit, onDelete }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="post-list-container">
            <input
                type="text"
                placeholder="Search posts by title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
            />

            <div className="post-list">
                {filteredPosts.map(post => (
                    <PostItem key={post.id} post={post} onEdit={onEdit} onDelete={onDelete} />
                ))}
            </div>
        </div>
    );
};

export default PostList;
