import { Dispatch, SetStateAction } from 'react';

export interface AnnouncementProps {
	author_name: string;
	interest: string;
	author_title: string;
	author_id: string;
	content: string;
	likes: string[];
	author_image: string;
}

export interface NavBarProps {
    showFollowingList: boolean;
	setShowFollowingList: Dispatch<SetStateAction<boolean>>;
	followingCount: number
}

export interface MiniFeedProps { 
    created_at: string;
    id: string;
    content: string;
    likes: string[];
}

export interface Feed {
	id: number;
	author_id: string;
	author_name: string;
	author_image: string;
	author_title: string;
	content: string;
	created_at: string;
	interest: string;
	likes: string[];
}

export interface InstructorProps {
	name: string;
	bio: string;
	email: string;
	image: string;
	occupation: string;
	url: string;
	id: string;
	followers: string[];
}

export interface ProfileProps {
	name: string;
	bio: string;
	email: string;
	image: string;
	occupation: string;
	url: string;
}

export interface RelatedProfileProps {
	name: string;
	image: string;
	occupation: string;
	followers: string[];
	id: string;
	userID: string;
}

export interface Following {
	id: string;
	name: string;
	occupation: string;
	image: string;
	followers: string[];
}

export interface UserData {
	id: string;
	name: string;
	email: string;
	image?: string;
}
