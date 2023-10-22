import React from "react";
import { Card, Space } from "antd";

const PublicCard = ({
  children,
  title,
  hoverable,
  className,
}: {
  children: React.ReactNode;
  title: string;
  hoverable?: boolean;
  className?: string;
  navigateTo?: string;
}) => (
  <Space direction="vertical" size={16}>
    <Card hoverable={hoverable} title={title} className={className}>
      {children}
    </Card>
  </Space>
);

export default PublicCard;
