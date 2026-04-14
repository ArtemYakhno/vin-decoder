import styles from "./VinErrorBanner.module.scss";

interface Props {
  hasErrors: boolean;
  errorText: string | null;
  additionalErrorText: string | null;
}

export const VinErrorBanner = ({ hasErrors, errorText, additionalErrorText }: Props) => {
  if (!hasErrors || !errorText) return null;

  const errorList = errorText.split(";").map(e => e.trim()).filter(Boolean);

  return (
    <div className={styles.banner} role="alert" aria-label="VIN decode errors">
      <p className={styles.heading}>Could not fully decode this VIN</p>
      {additionalErrorText && (
        <p className={styles.additional}>{additionalErrorText}</p>
      )}
      <ul className={styles.list} role="list">
        {errorList.map((e, i) => (
          <li key={i} className={styles.item}>{e}</li>
        ))}
      </ul>
    </div>
  );
};