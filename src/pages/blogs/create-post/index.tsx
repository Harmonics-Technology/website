import Cookies from 'js-cookie';
// import { DataAccess } from 'lib/components/Utils/Api';
import CreatePost from 'lib/pages/blog/CreatePost';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import {
  PostCategoryService,
  PostCategoryView,
  PostCategoryViewListStandardResponse,
  PostService,
} from '../../../../client';

const index = ({ data }: { data: any }) => {
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
  return <CreatePost postCategoryList={data.data} />;
};

export default index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const bearer = `Bearer ${ctx.req.cookies.token}`;
  // const _dataAccess = new DataAccess(bearer);

  try {
    const data = (await PostCategoryService.list(
      {}
    )) as PostCategoryViewListStandardResponse;
    console.log({ data });
    return {
      props: {
        data,
      },
    };p
  } catch (error) {
    return {
      props: {
        data: {},
      },
    };
  }
};
