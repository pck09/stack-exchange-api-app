import { List, Skeleton } from "antd";
import React from "react";

const listData = [...new Array(6)].map((item, index) => index);

const SearchResultsLoading = () => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={listData}
      renderItem={(item) => (
        <List.Item key={item}>
          <Skeleton />
        </List.Item>
      )}
    />
  );
};

export default SearchResultsLoading;
