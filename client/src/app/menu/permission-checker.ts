/**
 * 
 * @param arr 
 * @param permissions 
 * @returns Boolean dependant on permissions of user
 */
export function checkPermission(arr, permissions) {
    let check = false;
    const x = arr.forEach((element) => {
        if (permissions.indexOf(element) !== -1) {
            check = true;
        }
    });
    return (check ? true : false);
}
