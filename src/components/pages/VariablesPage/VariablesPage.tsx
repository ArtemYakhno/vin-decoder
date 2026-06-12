import { Link } from "react-router-dom";
import styles from "./VariablesPage.module.scss";
import { useVariables } from "../../../queries/variables/queries";
import { VariableMeta } from "../../blocks/Variable/VariableMeta/VariableMeta";
import { RoutePath } from "../../../routes/root.config";
import { usePagination } from "../../../utils/hooks/usePagination";
import type { TVariableItem } from "../../../schemas/variables/variables";
import { Pagination } from "../../ui/Pagination/Pagination";

export const VariablesPage = () => {
  const {
    data: variables,
    isFetching: isVariableFetching,
    isError: isVariableError,
  } = useVariables();

  const { currentItems, page, totalPages, next, prev, goTo } =
    usePagination<TVariableItem>(variables?.Results);

  if (isVariableFetching)
    return <p className={styles.state}>Loading variables…</p>;
  if (isVariableError)
    return <p className={styles.state}>Failed to load variables.</p>;

  if (currentItems.length === 0) {
    return <p className={styles.state}>No data.</p>;
  }

  return (
    <section className={styles.variablePage} aria-label="Variable page">
      <h1 className={styles.title}>Vehicle Variables</h1>
      <p className={styles.count}>{variables?.Count} variables total</p>

      <ul className={styles.list} role="list">
        {currentItems.map((variable) => (
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

      <Pagination
        page={page}
        totalPages={totalPages}
        onNext={next}
        onPrev={prev}
        onGoTo={goTo}
      />
    </section>
  );
};
