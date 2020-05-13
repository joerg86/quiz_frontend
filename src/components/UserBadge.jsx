import React from "react";
import Avatar from "react-avatar";

export default function UserBadge({user}) {
    return (
        <>
            <Avatar name={user.firstName + " " + user.lastName} size="24" round/>
            <span> </span>{user.firstName} {user.lastName}
        </>
    )
}