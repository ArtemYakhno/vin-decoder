import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  vinFormSchema,
  type TVinFormValues,
} from "../../../schemas/vin/vinForm";
import { VinForm } from "../../blocks/Vin/VinForm/VinForm";
import { VinHistory } from "../../blocks/Vin/VinHistory/VinHistory";
import { useDecodeVin } from "../../../queries/vin/queries";
import { normalizeVinData } from "../../../utils/normalizers/normalizeVinData";
import { VinResults } from "../../blocks/Vin/VinResult/VinResults";
import { VinErrorBanner } from "../../blocks/Vin/VinErrorBanner/VinErrorBanner";
import styles from "./HomePage.module.scss";
import {
  useVinHistoryStore,
  type IHistoryItem,
} from "../../../stores/vinHistory";
import { VinInfoBanner } from "../../blocks/Vin/VinInfoBanner/VinInfoBanner";

export const HomePage = () => {
  const [vin, setVin] = useState("");
  const [year, setYear] = useState<number | undefined>();
  const addToHistory = useVinHistoryStore((s) => s.addToHistory);

  const form = useForm<TVinFormValues>({
    resolver: zodResolver(vinFormSchema),
  });

  const { data, isFetching, isError } = useDecodeVin(vin, year);

  const normalized = data ? normalizeVinData(data.Results) : null;

  const applyVin = (vin: string, modelyear?: number) => {
    setVin(vin);
    setYear(modelyear);
    addToHistory({ vin, modelyear });
  };

  const handleFormSubmit = ({ vin, modelyear }: TVinFormValues) => {
    applyVin(vin.toUpperCase(), modelyear);
  };

  const handleHistorySelect = ({ vin, modelyear }: IHistoryItem) => {
    form.setValue("vin", vin);
    form.setValue("modelyear", modelyear);
    applyVin(vin, modelyear);
  };

  return (
    <section className={styles.homePage} aria-label="VIN decoder">
      <h1 className={styles.title}>Decode your vin code right now!</h1>

      <VinForm form={form} onSubmit={handleFormSubmit} isLoading={isFetching} />

      <VinHistory onSelect={handleHistorySelect} />

      {isError && (
        <p className={styles.apiMessage} role="alert">
          Failed to fetch data. Please check your connection and try again.
        </p>
      )}

      {normalized && !isError && data && (
        <section className={styles.resultsSection} aria-label="Decode results">
          {<VinInfoBanner message={data.Message} />}
          <VinErrorBanner
            hasErrors={normalized.hasErrors}
            errorText={normalized.errorText}
            additionalErrorText={normalized.additionalErrorText}
          />
          <VinResults items={normalized.normalizedData} />
        </section>
      )}
    </section>
  );
};
