import { BarMenu } from "./BarMenu";
import { CrossBar } from "./CrossBar";
import { Logo } from "./Logo";

export const AppBar = () => {
  return (
    <div className="px-6 sm:px-10 md:px-20 lg:px-40 py-3 md:py-5">
      <div className="flex items-center justify-between p-3 md:p-4 rounded-lg bg-gradient-to-r from-sky-800 via-blue-800 to-fuchsia-800 sticky top-0 z-50">
        <Logo />
        <BarMenu />
        <CrossBar/>
      </div>
    </div>
  );
};
