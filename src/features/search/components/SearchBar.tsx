import { Form, Input } from "antd";
import React from "react";
import { SearchFormValues } from "../models";

const { Search: SearchInput } = Input;

interface SearchBarProps {
  onSearch: (values: SearchFormValues) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [form] = Form.useForm<SearchFormValues>();

  return (
    <Form<SearchFormValues> form={form} onFinish={onSearch}>
      <Form.Item
        name="keyword"
        rules={[{ required: true, message: "Please enter a keyword" }]}
      >
        <SearchInput
          placeholder="Keyword"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={() => form.submit()}
        />
      </Form.Item>
    </Form>
  );
};

export default SearchBar;
