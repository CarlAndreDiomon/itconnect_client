import {
  BellIcon,
  HomeIcon,
  MessagesSquareIcon,
  Settings2Icon,
  UserCircleIcon,
  Users2Icon,
} from "lucide-react";
import SearchBar from "../../ui/SearchBar";

export default function MobileNavbar() {
  return (
    <main>
      <header className="w-screen md:px-16 h-full flex flex-col gap-3 p-4">
        <nav className=" flex justify-between ">
          <h1 className="font-bold text-3xl"> IT Connects </h1>

          <ul className=" flex gap-3 items-center">
            <li>
              <SearchBar />
            </li>
            <li>
              <a href="/settings">
                <Settings2Icon />
              </a>
            </li>
          </ul>
        </nav>

        <nav>
          <ul className="flex justify-between">
            <li>
              <a href="/">
                <HomeIcon />
              </a>
            </li>
            <li>
              <a href="/messages">
                <MessagesSquareIcon />
              </a>
            </li>
            <li>
              <a href="/friends">
                <Users2Icon />
              </a>
            </li>
            <li>
              <a href="/profile">
                <UserCircleIcon />
              </a>
            </li>
            <li>
              <a href="/notification">
                <BellIcon />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
}
