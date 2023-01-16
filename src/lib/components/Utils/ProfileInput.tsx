import React from 'react';
import { FormControl, Input } from '@chakra-ui/react';

const ProfileInput = ({ value }: { value: string }) => {
  return (
    <>
      <FormControl w="100%">
        <Input w="100%" value={value} disabled />
      </FormControl>
    </>
  );
};

export default ProfileInput;
