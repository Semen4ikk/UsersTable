import {useMemo} from "react";

export function paginationItems(filteredAndSortedUsers,currentPage, pageSize ){
    return  useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize;
        return filteredAndSortedUsers.slice(startIndex, startIndex + pageSize);
    }, [filteredAndSortedUsers, currentPage]);

}