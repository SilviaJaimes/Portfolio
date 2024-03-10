import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

export default function NavbarMenuPrin() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Home"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    const itemsMenu = [
        {
            description: "Home",
            href: "#home",
        },
        {
            description: "About me",
            href: "#about",
        },
        {
            description: "Projects",
            href: "#project",
        },
        {
            description: "Services",
            href: "#service",
        }
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-zinc-950">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden text-white"
                />
                <NavbarBrand>
                    <NavbarItem>
                        <Link className="title text-3xl text-violet-400">
                            Silvia
                        </Link>
                    </NavbarItem>
                </NavbarBrand>
            </NavbarContent>

            <NavbarMenu>
                {itemsMenu.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={"foreground"}
                            className="w-full"
                            to={item.href}
                            size="lg"
                        >
                            {item.description}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}