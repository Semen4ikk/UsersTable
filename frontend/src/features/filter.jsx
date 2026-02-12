import {useMemo} from "react";
export function filterItems(users, sortConfig, filterQuery) {
    return useMemo(() => {
        let filtered = Array.isArray(users) ? users : [];

        if (filterQuery.trim() !== '') {
            const query = filterQuery.toLowerCase();
            filtered = filtered.filter(user => {
                const fullName = `${user.firstName} ${user.lastName} ${user.maidenName}`.toLowerCase();
                const gender = user.gender.toLowerCase();
                const phone = user.phone.toLowerCase();
                const email = user.email.toLowerCase();
                const city = user.address?.city?.toLowerCase() || '';
                const country = user.address?.country?.toLowerCase() || '';

                return (
                    fullName.includes(query) ||
                    gender.includes(query) ||
                    phone.includes(query) ||
                    email.includes(query) ||
                    city.includes(query) ||
                    country.includes(query)
                );
            });
        }
        if (sortConfig.key) {
            filtered.sort((a, b) => {
                let aValue = a[sortConfig.key];
                let bValue = b[sortConfig.key];
                if (typeof aValue === 'string') aValue = aValue.toLowerCase();
                if (typeof bValue === 'string') bValue = bValue.toLowerCase();
                if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
                if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return filtered;
    }, [users, filterQuery, sortConfig]);
}
