export function getUsers(){
    return fetch('https://dummyjson.com/users').then(res => res.json())
}
