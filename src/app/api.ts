import { SearchResults } from "../features/search/models";

const request = (url: string) =>
  fetch(url).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }

    throw response;
  });

export const fetchSearchResults = (keyword: string): Promise<SearchResults> =>
  request(
    `https://api.stackexchange.com/2.3/search?site=stackoverflow&order=desc&sort=activity&filter=!6Wfm_gRpwM_nz&intitle=${keyword}`
  );

export const fetchUser = (id: string): Promise<SearchResults> =>
  request(
    `https://api.stackexchange.com/2.3/users/${id}?site=stackoverflow&order=desc&sort=reputation&filter=default`
  );
