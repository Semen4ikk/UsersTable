import {useEffect, useState} from "react";
import {getUsers} from "../api.js";

export function useUsers(){
    const [users, setUsers] = useState([]);

    useEffect(() => {

            getUsers().then(json => setUsers(json));
    }, []);
    return users;
}