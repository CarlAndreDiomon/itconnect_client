import {
  BellIcon,
  HomeIcon,
  MessagesSquareIcon,
  Settings2Icon,
  UserCircleIcon,
  Users2Icon,
} from "lucide-react";
import SearchBar from "../../ui/SearchBar";

export default function DesktopNavbar() {
  return (
    <main>
      <header className="w-64 h-full p-2 flex justify-center  border-r-2 border-gray-200">
        <nav className="grid mb-20">
          <h1 className="font-bold text-3xl text-center"> IT Connects </h1>
          <ul className=" grid gap-10 ">
            <li>
              <SearchBar />
            </li>
            <li>
              <a href="/profile" className="flex items-center gap-14 ">
                <UserCircleIcon />
                <h1 className="font-bold text-md">Profile</h1>
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center gap-14 ">
                <HomeIcon />
                <h1 className="font-bold text-md">Home</h1>
              </a>
            </li>
            <li>
              <a href="/messages" className="flex items-center gap-14 ">
                <MessagesSquareIcon />
                <h1 className="font-bold text-md">Messages</h1>
              </a>
            </li>
            <li>
              <a href="/friends" className="flex  items-center gap-14 ">
                <Users2Icon size={35} />
                <h1 className="font-bold text-md w-full">Friend Request</h1>
              </a>
            </li>
            <li>
              <a href="/notification" className="flex items-center gap-14 ">
                <BellIcon />
                <h1 className="font-bold text-md">Notification</h1>
              </a>
            </li>
            <li>
              <a href="/settings" className="flex items-center gap-14 ">
                <Settings2Icon />
                <h1 className="font-bold text-md">Settings</h1>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
}
