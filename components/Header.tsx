import React from "react";
import{Button } from "./ui/button";
const Header = () => {
    return (
<nav className="h-12 w-full flex justify-between items-center p-2"> 
    <div className="px-6 font-bold font-mono text-3xl">Ordana</div>
    <div className="hidden md:flex gap-2">
        <Button variant={"ghost"}>Customers</Button>
        <Button variant={"ghost"}>Products</Button>
        <Button variant={"ghost"}>FAQ</Button>
        <Button variant={"ghost"}>Pricing</Button>
        <Button variant={"ghost"}>Login</Button>
        <Button>Sign up</Button>
    </div>
    <div className="md:hidden">
        <Button variant={"secondary"}>Login</Button>
        <Button>Sign up</Button>
    </div>
</nav >
);
};
export default Header;