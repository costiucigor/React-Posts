import React, { useState, useEffect } from 'react';
import './PostForm.css';

const PostForm = ({ onSubmit, onUpdate, editingPost }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        if (editingPost) {
            setTitle(editingPost.title);
            setBody(editingPost.body);
        }
    }, [editingPost]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const postData = { title, body };

        if (editingPost) {
            const updatedPost = { ...editingPost, title, body };
            console.log('Updating post:', updatedPost);
            onUpdate(updatedPost);
        } else {
            console.log('Adding new post:', postData);
            onSubmit(postData);
        }

        setTitle('');
        setBody('');
    };

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="post-input"
            />
            <textarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
                className="post-textarea"
            ></textarea>
            <button type="submit" className="post-button">
                {editingPost ? 'Update' : 'Add'} Post
            </button>
        </form>
    );
};

export default PostForm;
