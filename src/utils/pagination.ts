export const pagination = (
  currentPage: number,
  totalItems: number,
  itemsPerPage: number
) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - currentPage) < 2) {
      pages.push({ item: i, is_interactive: true });
    } else if (pages[pages.length - 1].item !== "...") {
      pages.push({ item: "...", is_interactive: false });
    }
  }

  return pages.map((page, i) => {
    return { ...page, is_active: currentPage === Number(page.item), id: i };
  });
};
