import ProductName from "../ui/Card/ProductName";
import ProductImage from "../ui/Card/ProductImage";
import CardActionContainer from "./CardActionContainer";
const Card = ({ product }) => {
  return (
    <>
      <ProductName>{product.name}</ProductName>
      <ProductImage src={product.imageURL} description={product.description} />
      <CardActionContainer
        product={product}
        price={product.price}
        name={product.name}
      />
    </>
  );
};

export default Card;
