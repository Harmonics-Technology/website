import { withPageAuthRequired } from 'lib/components/Utils/withAuthPage';
import Mypost from 'lib/pages/blog/Mypost';
import { GetServerSideProps } from 'next';
import React from 'react';
import { PostService, PostViewStandardResponse } from '../../../client';

type Props = {
  data: any;
};

const index = ({ data }: Props) => {
  return <Mypost data={data} />;
};

export default index;

export const getServerSideProps: GetServerSideProps = withPageAuthRequired(
  async (ctx: any) => {
    const { id } = ctx.query;

    try {
      const data = await PostService.getPost({ id: id as string });

      return {
        props: {
          data: data?.data,
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
