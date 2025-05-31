import React, { useEffect, useState } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Store } from '@/lip/type';
// import {
//   addComment,
//   likeComment,
//   updateReplyInput,
//   addReply,
// } from "@/lip/features/comments/commentsSlice";
import { commentSelector } from '@/lip/features/comments/commentsSelector';
import { addComment, addReply, likeComment, updateReplyInput } from '@/lip/features/comments/commentsSlice';
import { AppDispatch, RootState } from '@/lip/store';


interface CommentsProps {
    postId: string;
}
const com = [
    {
        id: 'post1', comment: [{
            id: Date.now(),
             postId:'post1',
        text: 'love',
        likes: 0,
        replies: [],
        replyInput: "",
        }]
    },
    {
        id: 'post2', comment: [{
           id: Date.now(),
            postId:'post2',
        text: 'le',
        likes: 0,
        replies: [],
        replyInput: "",
        }]
    }
];

const CommentComponent: React.FC<CommentsProps> = ({ postId }) => {

 const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

  const [newComment, setNewComment] = useState("");
    const dispatch = useDispatch<AppDispatch>();
   //const comments = useSelector((state: Store) => commentSelector(state, postId));
  const comments = useAppSelector(commentSelector(postId));
console.log('ssss',comments);

    // Set initial reaction only once on mount or when postId changes
    // useEffect(() => {
    //     const initialComment = com.find((p) => p.id === postId)?.comment;
    //     if (initialComment) {
    //         dispatch(setInitialComments({ postId, comments: initialComment }));
    //     }
    // }, [dispatch, postId]);
      // Set initial reaction only once on mount or when postId changes
    //   useEffect(() => {
    //       const initialReaction = posts.find((p) => p.id === postId)?.reaction;
    //       if (initialReaction) {
    //           dispatch(setInitialComments({ postId, reactions: initialReaction }));
    //       }
    //   }, [dispatch, postId]);


  
  return (
 <div className="max-w-xl mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>

      <div className="mb-4">
        <textarea
          className="w-full p-2 border rounded"
          rows={3}
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="mt-2 px-4 py-1 bg-blue-500 text-white rounded"
          onClick={() => {
            if (newComment.trim()) {
              dispatch(addComment({postId ,text: newComment}));
              setNewComment("");
            }
          }}
        >
          Post
        </button>
      </div>

      {comments?.map((comment) => (
        <div key={comment.id} className="mb-4 border-t pt-2">
          <p>{comment.text}</p>
          <div className="text-sm text-gray-600 flex gap-4 mt-1">
            <button onClick={() => dispatch(likeComment({postId, id: comment.id}))}>
              Like ({comment.likes})
            </button>
            <button>Reply</button>
          </div>

          <div className="ml-4 mt-2">
            {comment.replies.map((reply) => (
              <div key={reply.id} className="text-sm text-gray-800 mb-1">
                ↪ {reply.text}
              </div>
            ))}

            <input
              type="text"
              placeholder="Write a reply..."
              className="w-full border px-2 py-1 rounded text-sm mt-2"
              value={comment.replyInput || ""}
              onChange={(e) =>
                dispatch(
                  updateReplyInput({ id: comment.id, value: e.target.value })
                )
              }
            />
            <button
              className="mt-1 px-3 py-1 bg-gray-200 rounded text-sm"
              onClick={() => dispatch(addReply({ id: comment.id }))}
            >
              Reply
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default CommentComponent;