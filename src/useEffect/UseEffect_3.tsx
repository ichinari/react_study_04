// NOTE: custom hookを使ってユーザ情報を取得する
import { useFetchUser } from "./hooks/useFetchUser";

const USER_ID = Math.floor(Math.random() * 10) + 1;

function UseEffect_3() {
  const { isLoading, user } = useFetchUser(USER_ID);

  return (
    <div className="flex flex-col items-center gap-5">
      {/* ローディング中 or ユーザ情報枠（存在なし or 存在あり） */}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {user ? (
            <>
              <h1 className="text-2xl font-bold">User Infos</h1>
              <p>
                <strong className="font-bold">Name：</strong>
                {user.name}
              </p>
              <p>
                <strong className="font-bold">username：</strong>
                {user.username}
              </p>
              <p>
                <strong className="font-bold">Email：</strong>
                {user.email}
              </p>
              <p>
                <strong className="font-bold">Location：</strong>
                {user.address.city}
              </p>
            </>
          ) : (
            <p>Not Found User Info</p>
          )}
        </div>
      )}
    </div>
  );
}

export default UseEffect_3;
