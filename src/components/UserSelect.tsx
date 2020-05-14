import React from "react";
import AsyncSelect, { AsyncProps } from "react-select/async";
import { getUsers } from "../lib/quiz";
import { CommonProps } from "react-select";

function noOptions({inputValue} : {inputValue: string}) {
    if(inputValue.length > 0)
        return "Kein Benutzer gefunden."
    else
        return "Bitte Benutzernamen eingeben..."
}

export default function<T>(props) {
    return <AsyncSelect<T> {...props} loadOptions={getUsers} noOptionsMessage={noOptions}/>
}