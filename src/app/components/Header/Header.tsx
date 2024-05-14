import { Button } from "@/src/_components/ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between px-5 pt-6">
      <Image src="/logo.png" alt="FSW Foods" height={30} width={100} />
      <Button
        size="icon"
        variant="outline"
        className="h-[30px] w-[30px] border-none bg-transparent"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
