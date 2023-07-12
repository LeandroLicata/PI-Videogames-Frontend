import { useState } from "react";

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [order, setOrder] = useState("");

  return {
    currentPage,
    setCurrentPage,
    startIndex,
    endIndex,
    order,
    setOrder,
    itemsPerPage,
  };
};

export default usePagination;
