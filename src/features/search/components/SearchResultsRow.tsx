import { Avatar, Card, Col, List, Row, Space, Tag, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/dateUtils";
import { formatNumber } from "../../../utils/numberUtils";
import { SearchResult } from "../models";
import styles from "./SearchResultsRow.module.scss";

interface SearchResultsRowProps {
  data: SearchResult;
}

const SearchResultsRow: React.FC<SearchResultsRowProps> = ({ data }) => {
  return (
    <List.Item>
      <Card>
        <Row wrap={false} gutter={16}>
          <Col flex="0 0 120px">
            <div>{formatNumber(data.up_vote_count)} votes</div>
            <div>{formatNumber(data.answer_count)} answers</div>
            <div>{formatNumber(data.view_count)} views</div>
          </Col>
          <Col flex="auto">
            <Space direction="vertical" className={styles.space}>
              <Typography.Link
                href={data.link}
                ellipsis
                className={styles.title}
                target="_blank"
                title={data.title}
              >
                {data.title}
              </Typography.Link>
              <Typography.Paragraph ellipsis={{ rows: 2 }}>
                <div dangerouslySetInnerHTML={{ __html: data.body }}></div>
              </Typography.Paragraph>
              <Space size={[0, 8]} wrap>
                {data.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Space>
              <Row justify="end" align="middle">
                <Space size={[4, 0]}>
                  <Space>
                    <Avatar src={data.owner.profile_image} />
                    <Link to={`/profile/${data.owner.user_id}`}>
                      {data.owner.display_name}
                    </Link>
                  </Space>
                  <span>asked {formatDate(data.creation_date)}</span>
                </Space>
              </Row>
            </Space>
          </Col>
        </Row>
      </Card>
    </List.Item>
  );
};

export default SearchResultsRow;
