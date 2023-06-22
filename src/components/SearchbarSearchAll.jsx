import { useContext, useEffect, useRef } from "react";
import { SearchTermAllProductsContext } from "../context/Context";

const SearchbarSearchAll = () => {
  const { searchInputAllProducts, setsearchInputAllProducts } = useContext(
    SearchTermAllProductsContext
  );

  // Erstelle eine Ref-Referenz für das Eingabefeld, damit der useEffect gestartet werden kann
  const inputRef = useRef(null);

  // Der Fokus des Eingabefeld wird gesetzt wird, wenn die Komponente geladen wird. Dies geschieht immer nach dem die Page geladen wurde
  useEffect(() => {
    // Fokussiere das Eingabefeld, da das Eingabefeld die Referenz ist
    inputRef.current.focus();
  }, []);

  // Funktion, die aufgerufen wird, wenn sich der Wert im Eingabefeld ändert
  const inputVal = (e) => {
    // Setze den neuen Wert in den globalen State
    setsearchInputAllProducts(e.target.value);
  };
  return (
    <>
      <section className="searchbar-allproducts-container">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          onChange={inputVal}
        />
      </section>
      <section className="area-buttons-container"></section>
    </>
  );
};

export default SearchbarSearchAll;