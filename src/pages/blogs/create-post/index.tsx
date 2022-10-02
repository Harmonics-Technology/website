import Cookies from 'js-cookie';
import { withPageAuthRequired } from 'lib/components/Utils/withAuthPage';
// import { DataAccess } from 'lib/components/Utils/Api';
import CreatePost from 'lib/pages/blog/CreatePost';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import {
  PostCategoryService,
  PostCategoryView,
  PostCategoryViewListStandardResponse,
} from '../../../../client';

const index = ({ data }: { data: PostCategoryView[] }) => {
  return <CreatePost postCategoryList={data} />;
};

export default index;

export const getServerSideProps: GetServerSideProps = withPageAuthRequired(
  async () => {
    try {
      const category = (await PostCategoryService.list({})).data;
      console.log({ category });
      return {
        props: {
          data: category,
        },
      };
    } catch (error) {
      return {
        props: {
          data: [],
        },
      };
    }
  }
);
