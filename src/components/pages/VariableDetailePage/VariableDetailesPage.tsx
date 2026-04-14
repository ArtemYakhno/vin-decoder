import { useParams } from "react-router-dom";
import {
  useVariables,
  useVariableValues,
} from "../../../queries/variables/variables.queries";
import styles from "./VariableDetailesPage.module.scss";
import { VariableMeta } from "../../blocks/Variable/VariableMeta/VariableMeta";
import { Back } from "../../ui/Back/Back";

export const VariableDetailesPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: variables,
    isFetching: isVariableFetching,
    isError: isVariableError,
  } = useVariables();
  const variable = variables?.Results.find((v) => v.ID === Number(id));

  const {
    data: values,
    isFetching: isValuesFetching,
    isError: isValuesError,
  } = useVariableValues(id || "");

  if (isVariableFetching) return <p className={styles.state}>Loading…</p>;
  if (isVariableError)
    return <p className={styles.state}>Failed to load variables.</p>;
  if (!variable) return <p className={styles.state}>Variable not found.</p>;

  return (
    <section className={styles.variableDetailsePage} aria-label="Variabe detailes page">
      <Back label="Vehicle Variables" />

      <div className={styles.header}>
        <h1 className={styles.title}>{variable.Name}</h1>
        <VariableMeta
          dataType={variable.DataType}
          groupName={variable.GroupName}
        />
      </div>

      {variable.Description && (
        <section className={styles.descriptionSection} aria-label="Variable description">
          <h4 className={styles.descriptionTitle}>Description</h4>
          <div
            className={styles.descriptionInfo}
            dangerouslySetInnerHTML={{ __html: variable.Description }}
          />
        </section>
      )}

      <section className={styles.section} aria-label="Accepted Values">
        <h2 className={styles.sectionTitle}>Accepted Values</h2>

        {isValuesFetching && <p className={styles.state}>Loading values…</p>}

        {isValuesError && (
          <p className={styles.state}>Failed to load values.</p>
        )}

        {!isValuesFetching &&
          !isValuesError &&
          values?.Results.length === 0 && (
            <p className={styles.state}>
              No accepted values for this variable.
            </p>
          )}

        {values && values.Results.length > 0 && (
          <ul className={styles.valuesList} role="list">
            {values.Results.map((v) => (
              <li key={v.Id} className={styles.valueItem}>
                <span className={styles.valueId}>{v.Id}</span>
                <span className={styles.valueName}>{v.Name}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </section>
  );
};
