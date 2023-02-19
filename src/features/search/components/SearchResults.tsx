import { List } from "antd";
import React from "react";
import { SearchResult } from "../models";
import SearchResultsRow from "./SearchResultsRow";

interface SearchResultsProps {
  results: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={results}
      renderItem={(item) => <SearchResultsRow key={item.title} data={item} />}
    />
  );
};

export default SearchResults;
