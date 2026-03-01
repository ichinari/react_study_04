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
    const controller = new AbortController();

    const fetchUser = async () => {
      setIsLoading(true);
      setUser(null);

      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error("Failed to fetch user");
        }

        const data: User = await res.json();

        setUser(data);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          console.warn("error:", error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();

    return () => {
      controller.abort();
    };
  }, [id]);
  return { isLoading, user };
};
