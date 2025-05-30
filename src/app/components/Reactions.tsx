import { selectReactionsByPostId } from '@/lip/features/reactions/reactionsSelectors';
import { addReaction, setInitialReaction } from '@/lip/features/reactions/reactionsSlice';
import { ReactionType } from '@/lip/features/reactions/types';
import { AppDispatch } from '@/lip/store';
import { Store } from '@/lip/type';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface ReactionsProps {
    postId: string;
}

const reactionTypes: ReactionType[] = ['Like', 'Love', 'Haha', 'Wow', 'Sad', 'Angry'];

const reactionEmojis: Record<ReactionType, string> = {
    Like: '👍',
    Love: '❤️',
    Haha: '😂',
    Wow: '😮',
    Sad: '😢',
    Angry: '😡',
};

// temp mock data
const posts = [
    {
        id: 'post1', reaction: {
            Like: 100,
            Love: 50,
            Haha: 25,
            Wow: 0,
            Sad: 6,
            Angry: 1
        }
    },
    {
        id: 'post2', reaction: {
            Like: 20,
            Love: 3,
            Haha: 0,
            Wow: 3,
            Sad: 9,
            Angry: 0
        }
    }
];

const Reactions: React.FC<ReactionsProps> = ({ postId }) => {
    const dispatch = useDispatch<AppDispatch>();
    const reactions = useSelector((state: Store) => selectReactionsByPostId(state, postId));

    // Set initial reaction only once on mount or when postId changes
    useEffect(() => {
        const initialReaction = posts.find((p) => p.id === postId)?.reaction;
        if (initialReaction) {
            dispatch(setInitialReaction({ postId, reactions: initialReaction }));
        }
    }, [dispatch, postId]);

    const handleReact = (reactionType: ReactionType) => {
        dispatch(addReaction({ postId, reactionType }));
    };

    return (
        <div style={{ marginTop: '10px' }}>
            <h4>React to this post</h4>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {reactionTypes.map((type) => (
                    <button
                        key={type}
                        onClick={() => handleReact(type)}
                        style={{
                            fontSize: '1.5rem',
                            padding: '10px',
                            borderRadius: '8px',
                            border: reactions.userReaction === type ? '2px solid blue' : '1px solid gray',
                            backgroundColor: reactions.userReaction === type ? '#e0f0ff' : 'white',
                            cursor: 'pointer',
                        }}
                    >
                        {reactionEmojis[type]} {reactions[type]}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Reactions;
