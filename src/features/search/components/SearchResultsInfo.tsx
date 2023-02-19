import { Typography } from "antd";
import React from "react";

interface SearchResultsInfoProps {
  keyword: string;
  resultsCount: number;
}

const SearchResultsInfo: React.FC<SearchResultsInfoProps> = ({
  keyword,
  resultsCount,
}) => {
  return (
    <div>
      <Typography.Title level={2}>Results for "{keyword}"</Typography.Title>
      <Typography.Text strong>{resultsCount} results</Typography.Text>
    </div>
  );
};

export default SearchResultsInfo;
