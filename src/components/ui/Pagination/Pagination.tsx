import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./Pagination.module.scss";

type Props = {
  page: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (p: number) => void;
};

const SIBLINGS = 1;

const getPageRange = (page: number, total: number): (number | "...")[] => {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const left = Math.max(2, page - SIBLINGS);
  const right = Math.min(total - 1, page + SIBLINGS);
  const pages: (number | "...")[] = [1];

  if (left > 2) pages.push("...");
  for (let i = left; i <= right; i++) pages.push(i);
  if (right < total - 1) pages.push("...");
  pages.push(total);

  return pages;
};

export const Pagination = ({
  page,
  totalPages,
  onNext,
  onPrev,
  onGoTo,
}: Props) => {
  if (totalPages <= 1) return null;

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <button
        className={styles.arrow}
        onClick={onPrev}
        disabled={page === 1}
        aria-label="Previous page"
      >
        <ArrowLeft size={16} />
      </button>

      {getPageRange(page, totalPages).map((p, i) =>
        p === "..." ? (
          <span key={`ellipsis-${i}`} className={styles.ellipsis}>
            …
          </span>
        ) : (
          <button
            key={p}
            className={`${styles.pageBtn} ${p === page ? styles.active : ""}`}
            onClick={() => onGoTo(p)}
            aria-current={p === page ? "page" : undefined}
          >
            {p}
          </button>
        ),
      )}

      <button
        className={styles.arrow}
        onClick={onNext}
        disabled={page === totalPages}
        aria-label="Next page"
      >
        <ArrowRight size={16} />
      </button>
    </nav>
  );
};
