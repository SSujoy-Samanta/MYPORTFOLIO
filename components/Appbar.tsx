import { BarMenu } from "./BarMenu";
import { CrossBar } from "./CrossBar";
import { Logo } from "./Logo";

export const AppBar = () => {
  return (
    <nav className="px-6 sm:px-10 md:px-20 lg:px-40 py-3 md:py-5 fixed top-0 z-30 w-full">
      <div className="flex items-center justify-between p-3 md:p-4 rounded-2xl backdrop-blur-xl bg-opacity-20 bg-slate-900 sticky top-0 z-50">
        <Logo />
        <BarMenu />
        <CrossBar/>
      </div>
    </nav>
  );
};
