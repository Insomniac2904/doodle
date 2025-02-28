import { List } from "./list";
import { NewButton } from "./newButton";

const Sidebar = () => {
  return (
    <div>
      <aside className='fixed z-[1] left-[0] bg-blue-950 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white'>
        <List />
        <NewButton />
      </aside>
    </div>
  );
};

export default Sidebar;
