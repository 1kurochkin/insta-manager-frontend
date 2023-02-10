type ListPropsTypes = {
  data: Array<{ username: string; full_name: string }>;
};

function List({ data }: ListPropsTypes) {
  const onClickHandler = (username: string) => {
    window.open(
      `https://www.instagram.com/${username}/`,
      "_blank",
      "noreferrer"
    );
  };
  return (
    <ul className="flex flex-col w-full pt-10">
      {data.map(({ username, full_name }) => (
        <li
          onClick={() => onClickHandler(username)}
          className="mb-4 flex flex-wrap items-center justify-between hover:border-solid hover:border-secondary hover:text-secondary border border-dashed cursor-pointer text-2xl text-bold p-5 rounded-md"
        >
          <div className="sm:flex sm:flex-wrap text-bold text-lg md:text-base">
            <span className="text-secondary md:hidden">Username: </span>
            <span className="sm:basis-full">{username}</span>
            <span className="sm:hidden">{" | "}</span>
            <span className="text-secondary md:hidden">Full name: </span>
            <span className="sm:hidden">{full_name}</span>
          </div>
          <span className="text-xl text-secondary">{">>"}</span>
        </li>
      ))}
    </ul>
  );
}

export default List;
