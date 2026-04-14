import { useVinHistoryStore, type IHistoryItem } from "../../../../stores/vinHistory.store";
import styles from "./VinHistory.module.scss";

interface Props {
  onSelect: (item: IHistoryItem) => void;
}

export const VinHistory = ({ onSelect }: Props) => {
  const history = useVinHistoryStore((s) => s.history);

  if (history.length === 0) return null;

  return (
    <section className={styles.history} aria-label="Recent searches">
      <p className={styles.title}>Recent</p>
      <ul className={styles.list} role="list">
        {history.map((item) => (
          <li key={item.vin}>
            <button
              type="button"
              className={styles.item}
              onClick={() => onSelect(item)}
            >
              <span className={styles.vin}>{item.vin}</span>
              {item.modelyear && (
                <span className={styles.year}> / {item.modelyear}</span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};