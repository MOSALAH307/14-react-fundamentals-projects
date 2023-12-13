const Categories = ({ categories, toggleItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => (
        <button
          type="button"
          key={category}
          className="btn"
          onClick={() => toggleItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
