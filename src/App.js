import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://shop.pumamoldova.md/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const addPost = async (post) => {
    try {
      await axios.post('https://shop.pumamoldova.md/api/posts/add', post);
      fetchPosts();
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  const updatePost = async (post) => {
    try {
      await axios.post(`https://shop.pumamoldova.md/api/posts/update/${post.id}`, post);
      fetchPosts();
      setEditingPost(null);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.get(`https://shop.pumamoldova.md/api/posts/delete/${id}`);
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
      <div className="App">
        <PostForm onSubmit={addPost} onUpdate={updatePost} editingPost={editingPost} />
        <PostList posts={posts} onEdit={setEditingPost} onDelete={deletePost} />
      </div>
  );
};

export default App;
