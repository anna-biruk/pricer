import { useState, useEffect,  useCallback } from "react";

const useInfiniteScroll = ({ loaderRef }, dependencies = []) => {
  const [page, setPage] = useState(1);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    setPage(1)
    // eslint-disable-next-line
  }, dependencies)

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loaderRef.current) observer.observe(loaderRef.current);
  }, [handleObserver, loaderRef]);

  return { page };
};

export default useInfiniteScroll;
