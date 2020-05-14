import React from "react";

export function logout() {
    localStorage.removeItem("jwt")
}