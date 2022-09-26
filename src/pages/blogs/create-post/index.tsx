import Cookies from 'js-cookie';
// import { DataAccess } from 'lib/components/Utils/Api';
import CreatePost from 'lib/pages/blog/CreatePost';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import {
  PostCategoryService,
  PostCategoryViewListStandardResponse,
} from '../../../../client';

const index = ({ category }: any) => {
  console.log({ category });
  // //Redirect user to login and back here when login is successful
  // const router = useRouter();
  // const isUser = Cookies.get('userIn');
  // useEffect(() => {
  //   if (isUser !== 'true') {
  //     router.push({
  //       pathname: '/blogs/login',
  //       query: { from: router.pathname },
  //     });
  //     return;
  //   }
  // });
  return <CreatePost postCategoryList={category} />;
};

export default index;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = (await PostCategoryService.list(
      {}
    )) as PostCategoryViewListStandardResponse;
    console.log({ data });
    return {
      props: {
        category: data.data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: [],
      },
    };
  }
};
