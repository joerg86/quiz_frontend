import React from "react";
import Avatar from "react-avatar";
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from "react-relay";

function UserBadge({user}) {
    return (
        <>
            <Avatar name={user.firstName + " " + user.lastName} size="1.5em" round/>
            <span> </span>{user.firstName} {user.lastName}
        </>
    )
}

export default createFragmentContainer(
    UserBadge,
    {
        user: graphql`
            fragment UserBadge_user on UserNode {
                firstName
                lastName
            }
        `
    }
)