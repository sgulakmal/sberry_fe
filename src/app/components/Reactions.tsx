import { selectReactionsByPostId } from '@/lib/features/reactions/reactionsSelectors';
import { addReaction } from '@/lib/features/reactions/reactionsSlice';
import { ReactionType } from '@/lib/features/reactions/types';
import { AppDispatch } from '@/lib/store';
import { AppStore } from '@/lib/type';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface ReactionsProps {
    postId: string;
}

const reactionTypes: ReactionType[] = [ReactionType.like, ReactionType.love, ReactionType.haha, ReactionType.wow, ReactionType.sad, ReactionType.angry];


const reactionEmojis: Record<ReactionType, string> = {
    like: '👍',
    love: '❤️',
    haha: '😂',
    wow: '😮',
    sad: '😢',
    angry: '😡',
};

const Reactions: React.FC<ReactionsProps> = ({ postId }) => {
    const dispatch = useDispatch<AppDispatch>();
    const reactions = useSelector((state: AppStore) => selectReactionsByPostId(state, postId));

    // Set initial reaction only once on mount or when postId changes
    // useEffect(() => {
    //     const initialReaction = posts.find((p) => p.id === postId)?.reaction;
    //     if (initialReaction) {
    //         dispatch(setInitialReaction({ postId, reactions: initialReaction }));
    //     }
    // }, [dispatch, postId]);

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
                            border: reactions.viewerReaction === type ? '2px solid blue' : '1px solid gray',
                            backgroundColor: reactions.viewerReaction === type ? '#e0f0ff' : 'white',
                            cursor: 'pointer',
                        }}
                    >
                        {reactionEmojis[type]} { reactions[type] ? reactions[type] : 0}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Reactions;
