import { useRef } from "react";
import List from "./components/list.component";
import { useLazyGetUnfollowedQuery } from "./store/reducers/api/api.reducer";
import "./styles/app.css";

function App() {
  const [getUnfollowed, { data, isFetching, error: fetchError }] =
    useLazyGetUnfollowedQuery();
  const inputUsernameRef = useRef<HTMLInputElement>(null);

  const {
    unfollowed_list = [],
    user_info,
  } = data || {};
  const { unfollowed_count = "", followings_count = "", followers_count = "" } =
    user_info || {};

  const onClickGetButtonHandler = async () => {
    const { value } = inputUsernameRef.current || {};
    if (value) {
      getUnfollowed(value);
    } else {
        alert("Please put an username!")
    }
  };

  return (
    <div className="bg-background color text-primary min-h-screen flex justify-center text-xl py-10">
      <div className="flex flex-col md:w-10/12 w-11/12">
        <div className="w-full flex flex-col border-b-2 border-double pb-10">
          <div className="mb-10">
            <h1 className="text-secondary text-3xl font-bold text-center mt-5">
              Unfollowed
            </h1>
            <p className="text-center">
              Here is you can get list of people that you are following to, but
              they dont follow back
            </p>
          </div>
          <div className="flex flex-wrap justify-between w-full">
            <input
              ref={inputUsernameRef}
              className="sm:basis-full hover:border-secondary active:border-secondary basis-8/12 bg-inherit text-primary rounded-md p-2 border-2 border-dashed border-white"
              placeholder="Username e.g jhon11"
            />
            <button
              onClick={onClickGetButtonHandler}
              className="hover:text-secondary sm:w-full sm:ml-0 sm:mt-5 ml-5 sm:py-2 grow px-10 border-2 rounded-md border-secondary border-dashed"
            >
              Get
            </button>
          </div>
        </div>
        <div className="w-full">
          {isFetching ? (
            <div className="animate-pulse text-secondary text-3xl font-bold text-center mt-10">
              0 1 0 1 0 1 1 1 0
            </div>
          ) : fetchError ? (
            <div className="animate-pulse text-red-500 text-xl font-bold text-center mt-10">
              Something went wrong! Please, try it later.
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <div className=" text-center w-full py-5 mb-2 flex flex-wrap sm:justify-center justify-between border-b-2 border-double sm:text-xl">
                <span className="text-secondary sm:basis-full">Followers: {followers_count}</span>
                <span className="text-secondary sm:basis-full">Followings: {followings_count}</span>
                <span className="text-secondary sm:basis-full">Unfollowed: {unfollowed_count}</span>
              </div>
              <List data={unfollowed_list || []} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
