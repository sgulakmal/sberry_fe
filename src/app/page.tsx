'use client';


import { login, logout } from "@/lip/features/user/userSlice";
import { RootState } from "@/lip/store";
import { useDispatch, useSelector } from "react-redux";
import Reactions from "./components/Reactions";

export default function Home() {

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth);

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
          </div>
          <div style={{ padding: '20px' }}>
            <h2>Post #1</h2>
            <p>Hi all second post</p>
            <Reactions postId="post1" />
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
