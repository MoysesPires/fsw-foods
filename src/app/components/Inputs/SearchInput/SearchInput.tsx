import { Button } from "@/src/_components/ui/button";
import { Input } from "@/src/_components/ui/input";
import { SearchIcon } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="flex gap-2">
      <Input placeholder="Buscar restaurantes" className="border-none" />
      <Button size="icon">
        <SearchIcon size={20} />
      </Button>
    </div>
  );
};

export default SearchInput;
