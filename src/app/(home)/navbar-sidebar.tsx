import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";

interface NavbarItemProps {
    href: string,
    children: React.ReactNode;
}

interface NavbarSidebarProps {
    items: NavbarItemProps[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({
    items,
    open,
    onOpenChange
}: NavbarSidebarProps) => {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                side="left"
                className="p-0 transition-none">
                    <SheetHeader className="p-4 border-b">
                        <SheetTitle>
                            Menu
                        </SheetTitle>
                    </SheetHeader>
                    <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                        {items.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="w-full text-left p-4 hover:bg-black hover:text-white text-base font-medium flex items-center"
                                onClick={() => onOpenChange(false)}
                            >
                               {item.children}
                            </Link>
                        ))}
                        <div className="border-t">
                            <Link href="/sign-in" 
                            className="w-full text-left p-4 hover:bg-black hover:text-white text-base font-medium flex items-center"
                            onClick={() => onOpenChange(false)}
                            >
                            Log in
                            </Link>
                            <Link href="/sign-up"
                            className="w-full text-left p-4 hover:bg-black hover:text-white text-base font-medium flex items-center"
                            onClick={() => onOpenChange(false)}
                            >
                            Start selling
                            </Link>
                        </div>
                    </ScrollArea> 
            </SheetContent>
        </Sheet>
    )
}