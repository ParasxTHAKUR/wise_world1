import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

export default function countryList() {
  const { isLoading, cityList } = useCities();
  const countries = cityList.reduce((arr, city) => {
    if (!arr.map((each) => each.country).includes(city.country))
      return [...arr, city];
    else return arr;
  }, []);
  if (isLoading) {
    return <Spinner />;
  }
  if (!cityList.length) {
    return <Message message="Add your first country by clicking on Map" />;
  }
  return (
    <ul className={styles.countryList}>
      {countries.map((each) => (
        <CountryItem key={each.id} country={each} />
      ))}
    </ul>
  );
}
