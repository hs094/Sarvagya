import FollowingProfile from "./FollowingProfile";

export default function FollowingList({ following }: { following: Following[] }) {
  return (
    <div className="space-y-4">
      {following.length > 0 ? (
        following.map((follow) => (
          <FollowingProfile 
            key={follow.id} 
            following={follow} 
            userID={follow.userID} 
          />
        ))
      ) : (
        <p className="text-gray-500 text-center py-8">
          You are not following any instructors yet.
        </p>
      )}
    </div>
  );
}