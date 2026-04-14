import { Link } from "react-router-dom";
import styles from "./VariablesPage.module.scss";
import { useVariables } from "../../../queries/variables/variables.queries";
import { VariableMeta } from "../../blocks/Variable/VariableMeta/VariableMeta";
import { RoutePath } from "../../../routes/root.config";

export const VariablesPage = () => {
  const {
    data: variables,
    isFetching: isVariableFetching,
    isError: isVariableError,
  } = useVariables();

  if (isVariableFetching)
    return <p className={styles.state}>Loading variables…</p>;
  if (isVariableError)
    return <p className={styles.state}>Failed to load variables.</p>;

  return (
    <section className={styles.variablePage} aria-label="Variable page">
      <h1 className={styles.title}>Vehicle Variables</h1>
      <p className={styles.count}>{variables?.Count} variables total</p>
      <ul className={styles.list} role="list">
        {variables?.Results.map((variable) => (
          <li key={variable.ID}>
            <Link
              to={`${RoutePath.Variables}/${variable.ID}`}
              className={styles.item}
            >
              <span className={styles.name}>{variable.Name}</span>
              <VariableMeta
                dataType={variable.DataType}
                groupName={variable.GroupName}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
