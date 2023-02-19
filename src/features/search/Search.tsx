import { Col, Row, Space, Typography } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { fetchSearchResults } from "../../app/api";
import useApiRequest from "../../hooks/useApi";
import SearchBar from "./components/SearchBar";
import SearchResultsInfo from "./components/SearchResultsInfo";
import SearchResultsLoading from "./components/SearchResultsLoading";
import { SearchFormValues } from "./models";
import styles from "./Search.module.scss";
import SearchResults from "./components/SearchResults";

const { Title } = Typography;

const Search: React.FC = () => {
  const { callRequest, isLoading, data } = useApiRequest({
    request: fetchSearchResults,
  });
  const [keyword, setKeyword] = useState<string>("");

  const handleSearch = useCallback((values: SearchFormValues) => {
    setKeyword(values.keyword);
  }, []);

  useEffect(() => {
    if (keyword !== "") {
      callRequest(keyword);
    }
  }, [callRequest, keyword]);

  return (
    <>
      <Title>Search for topics</Title>
      <Row>
        <Col xl={12} span={24}>
          <SearchBar onSearch={handleSearch} />
        </Col>
      </Row>

      {isLoading && <SearchResultsLoading />}
      {data && (
        <Space direction="vertical" size="large" className={styles.space}>
          <SearchResultsInfo
            keyword={keyword}
            resultsCount={data.items.length}
          />
          <SearchResults results={data.items} />
        </Space>
      )}
    </>
  );
};

export default Search;
