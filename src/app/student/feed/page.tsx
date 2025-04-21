"use client";
import { useEffect, useState } from "react";
import { createClient } from "../../../../utils/supabase/client";
import { useRouter } from "next/navigation";
import { NotionLayout } from "@/components/common/NotionLayout";
import { NotionHeading, NotionCard, NotionBlock } from "@/components/common/NotionBlock";
import FeedComponent from "./(components)/FeedComponent";
import FollowingList from "./(components)/FollowingList";
import { useToast } from "@/hooks/use-toast";

export default function Feed() {
	const [user, setUser] = useState<any>(null);
	const [feeds, setFeeds] = useState<Feed[]>([]);
	const [following, setFollowing] = useState<Following[]>([]);
	const [showFollowingList, setShowFollowingList] = useState(false);
	const router = useRouter();
	const supabase = createClient();
	const { toast } = useToast();

	// Fetch user data and feeds logic...

	return (
		<NotionLayout user={user} title="Student Dashboard">
			<div className="max-w-3xl mx-auto">
				<div className="flex items-center justify-between mb-6">
					<NotionHeading>
						{showFollowingList ? "Following List" : "Activity Feed"}
					</NotionHeading>
					
					<button
						onClick={() => setShowFollowingList(!showFollowingList)}
						className="text-sm text-blue-600 hover:underline"
					>
						{showFollowingList ? "View Feed" : `Following (${following.length})`}
					</button>
				</div>
				
				{showFollowingList ? (
					<FollowingList following={following} />
				) : (
					<div className="space-y-4">
						{feeds.length > 0 ? (
							feeds.map((feed) => (
								<NotionCard key={feed.id}>
									<FeedComponent feed={feed} userID={user?.id} />
								</NotionCard>
							))
						) : (
							<NotionBlock>
								<p className="text-gray-500 text-center py-8">
									No announcements yet. Follow instructors to see their updates.
								</p>
							</NotionBlock>
						)}
					</div>
				)}
			</div>
		</NotionLayout>
	);
}
