import { Pagination } from "react-bootstrap";

export default function ArticlesPagination({
  page,
  totalPages,
  onPageChanged,
}) {
  const handleChangePage = (page) => (event) => {
    const sectionEl = event.target.closest(".itschool-section");

    sectionEl.scrollIntoView({ behavior: "smooth" });

    onPageChanged(page);
  };

  const paginationItems = [];

  paginationItems.push(
    <Pagination.Item key={1} active={page === 1} onClick={handleChangePage(1)}>
      {1}
    </Pagination.Item>
  );

  if (totalPages > 1) {
    if (page > 3) {
      paginationItems.push(<Pagination.Ellipsis key="ellipsis-1" />);
    }

    for (
      let i = Math.max(page - 1, 2);
      i <= Math.min(page + 1, totalPages - 1);
      i++
    ) {
      paginationItems.push(
        <Pagination.Item
          key={i}
          active={page === i}
          onClick={handleChangePage(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    if (page < totalPages - 2) {
      paginationItems.push(<Pagination.Ellipsis key="ellipsis-2" />);
    }

    paginationItems.push(
      <Pagination.Item
        key={totalPages}
        active={page === totalPages}
        onClick={handleChangePage(totalPages)}
      >
        {totalPages}
      </Pagination.Item>
    );
  }

  return (
    <Pagination className="justify-content-center">
      <Pagination.First disabled={page === 1} onClick={handleChangePage(1)} />
      <Pagination.Prev
        disabled={page === 1}
        onClick={handleChangePage(page - 1)}
      />
      {paginationItems}
      <Pagination.Next
        disabled={page === totalPages}
        onClick={handleChangePage(page + 1)}
      />
      <Pagination.Last
        disabled={page === totalPages}
        onClick={handleChangePage(totalPages)}
      />
    </Pagination>
  );
}
