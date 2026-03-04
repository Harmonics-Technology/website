import Cookies from 'js-cookie';
import EditPost from 'lib/pages/blog/EditPost';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
  OpenAPI,
  PostService,
  PostViewStandardResponse,
} from '../../../../client';

const editPost = () => {
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
  return <EditPost postCategoryList={[]} />;
};

export default editPost;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.id;
  const token = ctx.req.cookies['token'];

  try {
    OpenAPI.TOKEN = token as string;
    const response = (await PostService.getPost({
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    })) as PostViewStandardResponse;

    console.log(response);
    return {
      props: {
        response,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};
