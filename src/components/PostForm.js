import React, { useState, useEffect } from 'react';
import './PostForm.css';

const PostForm = ({ onSubmit, onUpdate, editingPost }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (editingPost) {
            setTitle(editingPost.title);
            setDescription(editingPost.description);
        }
    }, [editingPost]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingPost) {
            onUpdate({ ...editingPost, title, description });
        } else {
            onSubmit({ title, description });
        }
        setTitle('');
        setDescription('');
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
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
