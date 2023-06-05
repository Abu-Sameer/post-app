import { useDispatch } from 'react-redux';
import { reactionsAdded } from '../AllSlices/PostSlice';

const reactionEmoji = {
  thumbsUp: '😜',
  wow: '😁',
  heart: '⚽️',
  rocket: '🐕',
  coffee: '🎮',
};

export default function ReactionButton({ post }) {
  const dispatch = useDispatch();
  return (
    <div>
      {Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
          <button
            key={name}
            type="button"
            className="btn btn-outline-light border-0 mx-1 px-1"
            onClick={() =>
              dispatch(reactionsAdded({ postId: post.id, reaction: name }))
            }
          >
            {emoji} {post.reactions[name]}
          </button>
        );
      })}
    </div>
  );
}
