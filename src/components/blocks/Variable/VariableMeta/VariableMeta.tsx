import styles from "./VariableMeta.module.scss";

type Props = {
  dataType: string;
  groupName: string | null;
};

export const VariableMeta = ({ dataType, groupName }: Props) => (
  <div className={styles.meta}>
    <span className={styles.badge}>{dataType}</span>
    {groupName && <span className={styles.group}>{groupName}</span>}
  </div>
);
