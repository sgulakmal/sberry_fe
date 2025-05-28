'use client';


import { login, logout } from "@/lip/features/user/userSlice";
import { RootState } from "@/lip/store";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth);

  return (
    <div>
      {user.isLoggedIn ? (
        <>
          <p>Welcome, {user.name} ({user.email})</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
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
