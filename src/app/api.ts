import { Profile, ProfileResponse } from "../features/profile/models";
import { SearchResultsResponse } from "../features/search/models";

const request = (url: string) =>
  fetch(url).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }

    throw response;
  });

export const fetchSearchResults = (
  keyword: string
): Promise<SearchResultsResponse> =>
  request(
    `https://api.stackexchange.com/2.3/search?site=stackoverflow&order=desc&sort=activity&filter=!6Wfm_gRpwM_nz&intitle=${keyword}`
  );

export const fetchUser = (id: string): Promise<Profile> =>
  request(
    `https://api.stackexchange.com/2.3/users/${id}?site=stackoverflow&order=desc&sort=reputation&filter=default`
  ).then((reponse: ProfileResponse) => reponse.items?.[0]);
