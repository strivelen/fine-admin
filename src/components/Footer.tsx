import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      className="site-footer"
      copyright={`${currentYear} 此项目出品人：strivelen`}
      links={[
        {
          key: 'Fine Admin',
          title: 'Fine Admin',
          href: 'https://strivelen.github.io/fine-admin/',
          blankTarget: true
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/strivelen/fine-admin',
          blankTarget: true
        },
        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design',
          blankTarget: true
        }
      ]}
    />
  );
};

export default Footer;
