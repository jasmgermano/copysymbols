import { useParams } from "react-router-dom";
import { useContext } from "react";
import ButtonsToCopy from "./components/buttonsToCopy";
import Menu from "./components/menu";
import { DataContext } from "./context/dataContext";
import Footer from "./components/footer";

const Category = () => {
  const { category } = useParams(); // Pega a categoria da URL
  const data = useContext(DataContext);
  return (
    <div className="app">
      <Menu />
      <ButtonsToCopy
        showAll={true}
        category={category}
        categoryData={data[category]}
      />
      <Footer />
    </div>
  );
};

export default Category;
