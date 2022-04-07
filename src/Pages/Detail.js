import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

function Detail() {
  const location = useLocation();
  const recipe = location.state.recipe;
  const totalNutrientsList = ['ENERC_KCAL'];
  const digestList = ['FAT', 'CHOCDF', 'PROCNT', 'CHOLE', 'CA'];
  console.log(recipe);

  return (
    <div>
      <div className="text-center" style={{ margin: '20px 0' }}>
        <h1>{recipe.label}</h1>
      </div>
      <CardGroup>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Nutrients</CardTitle>
            {totalNutrientsList.map((item, index) => (
              <CardText key={index}>
                {`${recipe.totalNutrients[item].label} : ${Math.round(
                  recipe.totalNutrients[item].quantity
                )} ${recipe.totalNutrients[item].unit} `}
              </CardText>
            ))}
            {recipe?.digest
              .filter((item) => digestList.includes(item.tag))
              .map((item, index) => (
                <CardText key={index}>
                  {`${item.label} : ${Math.round(item.total)} ${item.unit} `}
                </CardText>
              ))}
          </CardBody>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={recipe.image} top width="100%" />
        </Card>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Ingredients</CardTitle>
            {recipe?.ingredients.map((item, index) => (
              <CardText key={index}>{item.text}</CardText>
            ))}
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Detail;
