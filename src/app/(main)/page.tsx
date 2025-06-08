'use client';


import { login, logout } from "@/lib/features/user/userSlice";
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import HeaderSearch from "../components/HeaderSearch";
import Posts from "../components/Posts";
import AnnouncementBanner from "../components/Announcements";
import Wall from "../components/Wall";

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
    if (cookies.includes('auth-token')) {
      dispatch(login({ name: 'Udayanga', email: 'uday@example.com' }))
    } else {
      window.location.href = '/login';
    }
  }, []);


  return (
    <div>
      {user.isLoggedIn ? (
        <>

          <Wall />

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
