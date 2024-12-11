import { ChangeEvent, FC } from "react";
import styles from "./productsFilters.module.css";
import { useDispatch } from "react-redux";
import {
  filterBy,
  FilterOptions,
  sortBy,
  SortOptions,
} from "../../store/reducers/product/ProductSlice";

interface Props {
  search: string;
  changeSearch: (search: string) => void;
}

export const ProductsFilters: FC<Props> = ({ search, changeSearch }) => {
  const dispatch = useDispatch();

  function handleChangeFilter(e: ChangeEvent<HTMLSelectElement>) {
    dispatch(filterBy(e.target.value as FilterOptions));
  }

  function handleChangeSort(e: ChangeEvent<HTMLSelectElement>): void {
    dispatch(sortBy(e.target.value as SortOptions));
  }

  return (
    <div className={styles.filters}>
      <div className={styles.filterItem}>
        <span>Тип:</span>
        <div className={styles.inputItem}>
          <select
            className={styles.select}
            id="filter-select"
            defaultValue={0}
            onChange={handleChangeFilter}
          >
            <option value={0} disabled={true}>
              Выберите тип
            </option>
            <option value={FilterOptions.ALL}>Все</option>
            <option value={FilterOptions.SAVED}>Сохраненные</option>
            <option value={FilterOptions.NOT_SAVED}>Не сохраненные</option>
          </select>
        </div>
      </div>

      <div className={styles.filterItem}>
        <span>Сортировать:</span>
        <div className={styles.inputItem}>
          <select
            className={styles.select}
            id="sort-select"
            defaultValue={0}
            onChange={handleChangeSort}
          >
            <option value={0} disabled={true}>
              Сортировка
            </option>
            <option value="ASC">Сначала дешевле</option>
            <option value="DESC">Сначала дороже</option>
          </select>
        </div>
      </div>

      <div className={styles.filterItem}>
        <span>Поиск:</span>
        <input
          className={styles.search}
          name="search"
          type="text"
          placeholder="Название"
          value={search}
          onChange={(e) => changeSearch(e.target.value)}
          id="search"
        ></input>
      </div>
    </div>
  );
};
