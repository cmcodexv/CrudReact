import React from "react";
import { Table, Tag, Space } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Website",
    dataIndex: "website",
    key: "website",
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>Invite</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const Data = ({ users }) => {
  //data
  const dataSource = users.map((user) => {
    var data = {
      key: user.id,
      name: user.name,
      phone: user.phone,
      website: user.website,
      email: user.email,
    };
    return data;
  });

  return <Table dataSource={dataSource} columns={columns} />;
};

export default Data;
