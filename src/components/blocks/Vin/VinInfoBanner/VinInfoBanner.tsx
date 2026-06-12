import styles from "./VinInfoBanner.module.scss";

interface Props {
  message: string;
}

export const VinInfoBanner = ({ message }: Props) => {
  return (
    <div className={styles.banner}>
      <p className={styles.info}>{message}</p>
    </div>
  );
};
