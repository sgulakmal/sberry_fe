import React from 'react'
import CreatePost from './createPost'
import Reactions from './Reactions'
import CommentComponent from './Comments'

export default function Posts() {
  return (
    <>
                <h2>Post #1</h2>
            <p>Hi all second post</p>
   <CreatePost />
               <Reactions postId="post1" />
                    <CommentComponent postId="post2"/>
               </>

  )
}
