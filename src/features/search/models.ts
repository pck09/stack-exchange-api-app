export interface SearchFormValues {
  keyword: string;
}

export interface SearchResultItemOwner {
  account_id: number;
  display_name: string;
  link: string;
  profile_image: string;
  reputation: number;
  user_id: number;
  user_type: string;
}

export interface SearchResultItem {
  answer_count: number;
  content_license: string;
  creation_date: number;
  is_answered: boolean;
  last_activity_date: number;
  link: string;
  owner: SearchResultItemOwner;
  question_id: number;
  score: number;
  tags: string[];
  title: string;
  view_count: number;
  up_vote_count: number;
  body: string;
}

export interface SearchResults {
  has_more: boolean;
  items: SearchResultItem[];
  quota_max: number;
  quota_remaining: number;
}
