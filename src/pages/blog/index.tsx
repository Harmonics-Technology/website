import { withPageAuthRequired } from 'lib/components/Utils/withAuthPage';
import { GetServerSideProps } from 'next';
import { PostService } from '../../../client';
import Thought from '../../lib/pages/home/Thought';

export default function Thoughts({ data }: any) {
  return <Thought data={data} />;
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired(
  async () => {
    try {
      const data = (await PostService.getPosts({})).data;
      return {
        props: {
          data,
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
