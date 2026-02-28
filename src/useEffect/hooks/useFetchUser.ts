import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
}

export const useFetchUser = (id: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    let isMounted = true; // マウントされているかどうかを判断するためのフラグ
    const fetchUser = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!res.ok) {
          throw new Error("Failed to fetch user");
        }

        const data: User = await res.json();

        if (isMounted) {
          setUser(data);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) console.warn("error:", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchUser();

    return () => {
      isMounted = false;
    };
  }, []);
  return { isLoading, user };
};
