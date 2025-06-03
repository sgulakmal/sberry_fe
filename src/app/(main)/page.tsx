'use client';


import { login, logout } from "@/lib/features/user/userSlice";
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import Reactions from "../components/Reactions";
import CommentComponent from "../components/Comments";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth);

  // useEffect(() => {
  //   if (!user.isLoggedIn) {
  //     router.push('/login');
  //   }
  // }, [user.isLoggedIn]);

   useEffect(() => {
    const cookies = document.cookie;
    console.log('Cookies:', cookies);
    if (!cookies.includes('auth-token')) {
           dispatch(login({ name: 'Udayanga', email: 'uday@example.com' }))
    } else {
      window.location.href = '/login';
    }
  }, []);


  return (
    <div>
      {user.isLoggedIn ? (
        <>
          <p>Welcome, {user.name} ({user.email})</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
          <div style={{ padding: '20px' }}>
            <h2>Post #1</h2>
            <p>Hi all</p>
            <Reactions postId="post2" />
            <CommentComponent postId="post2" />
          </div>
          <div style={{ padding: '20px' }}>
            <h2>Post #1</h2>
            <p>Hi all second post</p>
            <Reactions postId="post1" />
            <CommentComponent postId="post1" />
          </div>
        </>
      ) : (
        <>
          <p>You are not logged in.</p>
          <button
            onClick={() =>
              dispatch(login({ name: 'Udayanga', email: 'uday@example.com' }))
            }
          >
            Login
          </button>
        </>
      )}
    </div>
  );
}
