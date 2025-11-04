import { ArrowLeftIcon } from "lucide-react";
import AccountSection from "../components/settings/Account";

export default function SettingPage() {
  return (
    <main className="fixed inset-0 bg-white z-50 flex flex-col p-3">
      <header className="flex items-center justify-between w-full relative">
        <a href="/" className="absolute left-0">
          <ArrowLeftIcon className="w-6 h-6" />
        </a>
        <h1 className="text-lg font-semibold mx-auto">Settings</h1>
      </header>

      <section className="p-5">
        <AccountSection />
      </section>
    </main>
  );
}
