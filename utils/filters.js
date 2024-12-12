export function applyFilters(data, filters) {
  return data.filter(item => {
    // Status Filter
    if (filters.status && filters.status !== 'all') {
      if (item.status !== filters.status) return false;
    }

    // Location Filter
    if (filters.location && filters.location !== 'all') {
      if (item.address?.state?.toLowerCase() !== filters.location.toLowerCase()) return false;
    }

    // Search Filter
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      const searchFields = [
        item.firstName,
        item.lastName,
        item.email,
        item.phoneNumber,
        item.companyName,
        item.address?.suburb,
        item.skills
      ].filter(Boolean);

      const matchesSearch = searchFields.some(field =>
        field.toString().toLowerCase().includes(searchLower)
      );

      if (!matchesSearch) return false;
    }

    return true;
  });
}