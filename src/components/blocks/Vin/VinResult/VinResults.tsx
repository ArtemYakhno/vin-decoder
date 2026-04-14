import type { TDecodeItem } from "../../../../schemas/vin/decode";
import styles from "./VinResults.module.scss";

interface Props { items: TDecodeItem[]; }

export const VinResults = ({ items }: Props) => {
  if (!items.length) return null;

  return (
    <section aria-label="Decoded vehicle data">
      <h2 className={styles.heading}>Vehicle Data</h2>
      <dl className={styles.list}>
        {items.map(item => (
          <div key={item.VariableId} className={styles.row}>
            <dt className={styles.term}>{item.Variable}</dt>
            <dd className={styles.value}>{item.Value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};