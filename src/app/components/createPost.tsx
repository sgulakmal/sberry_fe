// app/feed/CreatePost.tsx
'use client';
import { addPost } from '@/lib/features/Feed/feedSlice';
import { AppDispatch } from '@/lib/store';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


export default function CreatePost() {
  const [content, setContent] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handlePost = () => {
    if (content.trim()) {
      dispatch(addPost({ user: 'You', content }));
      setContent('');
    }
  };

  return (
    <div className="border p-4 mb-4 bg-white rounded shadow">
         <h2 className="text-xl font-semibold mb-4">News Feed</h2>
      <textarea
        className="w-full border p-2 rounded mb-2"
        rows={3}
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handlePost}
      >
        Post
      </button>
    </div>
  );
}
