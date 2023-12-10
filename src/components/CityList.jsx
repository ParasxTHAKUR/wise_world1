import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

export default function CityList() {
  const { cityList, isLoading } = useCities();
  if (isLoading) {
    return <Spinner />;
  }
  if (!cityList.length) {
    return <Message message="Add your first city by clicking on Map" />;
  }
  return (
    <ul className={styles.cityList}>
      {cityList.map((each) => (
        <CityItem key={each.id} city={each} />
      ))}
    </ul>
  );
}
