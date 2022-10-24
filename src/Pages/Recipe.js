import SearchForm from '../Components/SearchForm';
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardDeck,
} from 'reactstrap';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime'];
const APP_ID = 'fa255c54';
const APP_KEY = '864a82802664a50366c68f2ca424dad1';

const Recipe = ({ isAuth }) => {
  const [query, setQuery] = useState('');
  const [meal, setMeal] = useState(mealTypes[0]);
  const [searchResult, setSearchResult] = useState([]);

  const navigate = useNavigate();

  if (!isAuth) navigate('/login');

  const searchRecipe = async () => {
    console.log(query);
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
    const response = await axios.get(url);
    console.log(response.data);
    setSearchResult(response.data);
  };
  return (
    <Container>
      <br />
      <SearchForm
        query={query}
        setQuery={setQuery}
        meal={meal}
        setMeal={setMeal}
        searchRecipe={searchRecipe}
      />
      <br />
      <CardDeck style={{ display: 'flex', flexWrap: 'wrap' }}>
        {searchResult?.hits?.map((item, index) => (
          <Card key={index} style={{ width: '15rem' }} className="p-3 m-1">
            <CardImg
              alt="Card image cap"
              src={item.recipe.image}
              top
              width="100%"
            />
            <CardBody>
              <div className="text-center">
                <CardTitle tag="h5">{item.recipe.label}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {item.recipe.dishType}- {item.recipe.cuisineType}
                </CardSubtitle>
              </div>
            </CardBody>
            <div className="text-center">
              <Button
                className="align-items-end"
                style={{ marginTop: '5px' }}
                onClick={() => {
                  navigate('/detail', { state: { recipe: item.recipe } });
                }}
              >
                Details
              </Button>
            </div>
          </Card>
        ))}
      </CardDeck>
    </Container>
  );
};

export default Recipe;
