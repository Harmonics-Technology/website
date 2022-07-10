import { GetServerSideProps } from 'next';

type Props = {
  id: string;
};
const editPost = ({ id }: Props) => {
  return <div>editPost {id}</div>;
};

export default editPost;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.id;

  try {
    return {
      props: {
        id,
      },
    };
  } catch (error) {
    return {
      props: {
        id,
      },
    };
  }
};
