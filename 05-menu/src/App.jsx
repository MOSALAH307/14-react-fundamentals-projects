import { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import Title from "./Title";
import menu from "./data";

// const categories = new Set(menu.map((item) => item.category));
const fullCategories = ["all", ...new Set(menu.map((item) => item.category))];
// console.log(fullCategories);

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(fullCategories);

  const toggleItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const filteredItems = menu.filter((item) => item.category === category);
    setMenuItems(filteredItems);
    // console.log(category);
  };
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} toggleItems={toggleItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
