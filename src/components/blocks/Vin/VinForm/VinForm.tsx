import type { UseFormReturn } from "react-hook-form";
import type { TVinFormValues } from "../../../../schemas/vin/vinForm.schema";
import styles from "./VinForm.module.scss";
import clsx from "clsx";

interface Props {
  form: UseFormReturn<TVinFormValues>;
  onSubmit: (values: TVinFormValues) => void;
  isLoading?: boolean;
}

export const VinForm = ({ form, onSubmit, isLoading }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
      <div className={styles.fieldGroup}>
        <div className={styles.field}>
          <label htmlFor="vin-input" className={styles.label}>
            VIN code
          </label>

          <input
            id="vin-input"
            className={clsx(`input input--height50`, styles.inputVin)}
            placeholder="e.g. 1HGBH41JXMN109186"
            autoComplete="off"
            maxLength={17}
            aria-describedby={errors.vin ? "vin-error" : undefined}
            {...register("vin")}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="year-input" className={styles.label}>
            Year
          </label>
          <input
            id="year-input"
            type="number"
            inputMode="numeric"
            className={clsx(`input input--height50`, styles.inputYear)}
            placeholder="Year (optional)"
            aria-describedby={errors.modelyear ? "year-error" : undefined}
            {...register("modelyear", {
              setValueAs: (v) =>
                v === "" || v === null ? undefined : parseInt(v, 10),
            })}
          />
        </div>
      </div>

      <button
        type="submit"
        className={clsx("button button--height50")}
        disabled={isLoading}
        aria-busy={isLoading}
      >
        {isLoading ? "Decoding…" : "Decode"}
      </button>

      {errors.vin && (
        <p id="vin-error" className={styles.fieldError} role="alert">
          {errors.vin.message}
        </p>
      )}
      {errors.modelyear && (
        <p id="year-error" className={styles.fieldError} role="alert">
          {errors.modelyear.message}
        </p>
      )}
    </form>
  );
};
