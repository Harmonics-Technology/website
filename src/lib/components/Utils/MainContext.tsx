import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext<any | null>({});
export const UserProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const users = Cookies.get('user') as unknown as string;
    if (users !== undefined) {
      setUser(JSON.parse(users));
    } 
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};
