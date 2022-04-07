import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const SearchForm = (props) => {
  const { query, setQuery, meal, setMeal, searchRecipe } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements.recipe.value);
    setQuery(e.target.elements.recipe.value);
    searchRecipe();
  };

  const handleMealChange = (e) => {
    // console.log(meal);
    setMeal(e.target.value);
  };

  const handleRecipeChange = (e) => {
    console.log(query);
    setQuery(e.target.value);
  };

  return (
    <div>
      <Form className="row justify-content-center" onSubmit={handleSubmit}>
        <br />
        <FormGroup className="col-auto mb-2 me-sm-2 mb-sm-0">
          <Label className="visually-hidden me-sm-2" for="recipe">
            Recipe
          </Label>

          <Input
            id="recipe"
            name="recipe"
            type="text"
            className="form-control"
            placeholder="type any recipe"
            onChange={handleRecipeChange}
          />
        </FormGroup>
        <br />
        <FormGroup className="col-auto mb-2 me-sm-2 mb-sm-0">
          <Label className="visually-hidden me-sm-2" for="exampleSelect">
            Select
          </Label>
          <Input
            id="exampleSelect"
            name="select"
            type="select"
            onChange={handleMealChange}
            value={meal}
          >
            <option value="">Meal Type</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
            <option value="teatime">Teatime</option>
          </Input>
        </FormGroup>
        <br />
        <div className="col-auto mb-2 me-sm-2 mb-sm-0">
          <Button>Search</Button>
        </div>
      </Form>
    </div>
  );
};

export default SearchForm;
