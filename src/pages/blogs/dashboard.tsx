import Cookies from 'js-cookie';
import { withPageAuthRequired } from 'lib/components/Utils/withAuthPage';
import MyBlog from 'lib/pages/blog/MyBlog';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  OpenAPI,
  PostModel,
  PostService,
  PostViewStandardResponse,
} from '../../../client';

function blog({ data }: { data: PostModel[] }) {
  //Redirect user to login and back here when login is successful
  const router = useRouter();
  const isUser = Cookies.get('userIn');
  useEffect(() => {
    if (isUser !== 'true') {
      router.push({
        pathname: '/blogs/login',
        query: { from: router.pathname },
      });
      return;
    }
  });

  return <MyBlog data={data} />;
}

export default blog;

export const getServerSideProps: GetServerSideProps = withPageAuthRequired(
  async (ctx: any) => {
    const token = ctx.req.cookies['token'];

    try {
      const data = (await PostService.getPosts({}))
        .data as PostViewStandardResponse;
      return {
        props: {
          data,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        props: {},
      };
    }
  }
);
