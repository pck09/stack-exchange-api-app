export interface SearchFormValues {
  keyword: string;
}

export interface SearchResultOwner {
  account_id: number;
  display_name: string;
  link: string;
  profile_image: string;
  reputation: number;
  user_id: number;
  user_type: string;
}

export interface SearchResult {
  answer_count: number;
  content_license: string;
  creation_date: number;
  is_answered: boolean;
  last_activity_date: number;
  link: string;
  owner: SearchResultOwner;
  question_id: number;
  score: number;
  tags: string[];
  title: string;
  view_count: number;
  up_vote_count: number;
  body: string;
}

export interface SearchResultsResponse {
  has_more: boolean;
  items: SearchResult[];
  quota_max: number;
  quota_remaining: number;
}
