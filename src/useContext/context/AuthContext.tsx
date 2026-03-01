import { createContext, useCallback, useContext, useMemo, useState } from "react";

interface UserInfo {
  id: number;
  username: string;
  email: string;
}

const AuthContext = createContext<{
  user: UserInfo | null;
  login: (userInfo: UserInfo) => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
});

const USER_NAME = "test";
const USER_EMAIL = "test@example.com";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserInfo | null>(null);

  // NOTE: memo化
  const login = useCallback((userInfo: UserInfo) => {
    // NOTE: 学習用なのでハードコーディングの値と比較させている
    if (userInfo.username === USER_NAME && userInfo.email === USER_EMAIL) {
      setUser(userInfo);
    } else {
      console.error("Invalid username or email");
    }
  }, []); // NOTE: 依存配列を空にすることで、初回のみ実行される。依存配列を設定することで、依存配列が変化した時に再実行される。

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const contextValue = useMemo(() => {
    return { user, login, logout };
  }, [user, login, logout]);

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
