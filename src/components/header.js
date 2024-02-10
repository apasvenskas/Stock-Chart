import React from "react";
import Search from "./search";
import Icon from "./dayNightIcon";

const Header = ({name}) => {
    return (
    <>
        <div className="4:px-32">
            <h1 className="text-2xl">{name}</h1>
            <Search />
        </div>
        <Icon />
    </>
    )
}

export default Header