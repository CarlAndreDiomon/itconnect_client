import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";
import { useState } from "react";
import { ArrowLeftIcon } from "lucide-react";

export default function AccountSection() {
  const [isAccountSectionOpen, setIsAccountSectionOpen] = useState(false);
  return (
    <main className="">
      {!isAccountSectionOpen && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsAccountSectionOpen(true);
          }}
          className={`${
            isAccountSectionOpen ? "hidden" : "flex"
          } rounded-full hover:bg-gray-100 items-center gap-14`}
        >
          Accounts
        </button>
      )}

      {isAccountSectionOpen && (
        <section className="fixed inset-0 bg-white z-50 flex flex-col p-3">
          <header className="flex items-center justify-between w-full relative">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsAccountSectionOpen(false);
              }}
              className="absolute left-0"
            >
              <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-semibold mx-auto">Accounts</h1>
          </header>
          <ul className="p-5 gap-2 grid">
            <li>
              <EditProfile />
            </li>
            <li>
              <ChangePassword />
            </li>
            <li>
              <DeleteAccount />
            </li>
          </ul>
        </section>
      )}
    </main>
  );
}
