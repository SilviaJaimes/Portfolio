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
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Dropdown className="bg-zinc-900">
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white text-large"
                                endContent={<ion-icon name="chevron-down-outline"></ion-icon>}
                                radius="sm"
                                variant="light"
                            >
                                {selectedValue}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Single selection example"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedKeys}
                            onSelectionChange={setSelectedKeys}
                        >
                            {itemsMenu.map((item) => (
                                <DropdownItem key={item.description}>
                                    <Link href={item.href} className="text-white hover:text-black">
                                        {item.description}
                                    </Link>
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#contact" className="text-white text-large">
                        Contact
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {itemsMenu.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={"foreground"}
                            className="w-full"
                            href={item.href}
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