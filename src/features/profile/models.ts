export interface ProfileBadgeCounts {
  bronze: number;
  gold: number;
  silver: number;
}

export interface Profile {
  account_id: number;
  badge_counts: ProfileBadgeCounts;
  creation_date: number;
  display_name: string;
  is_employee: boolean;
  last_access_date: number;
  last_modified_date: number;
  link: string;
  profile_image: string;
  reputation: number;
  reputation_change_day: number;
  reputation_change_month: number;
  reputation_change_quarter: number;
  reputation_change_week: number;
  reputation_change_year: number;
  user_id: number;
  user_type: string;
  website_url: string;
}

export interface ProfileResponse {
  has_more: boolean;
  items: Profile[];
  quota_max: number;
  quota_remaining: number;
}
