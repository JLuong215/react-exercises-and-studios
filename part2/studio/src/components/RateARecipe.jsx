let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function rightNumber(props){
  const number = props.rating > 1 && props.rating < 5;
  number ? true : false;
  return rightNumber;
}  
function RateARecipe(props) {
    function GiveRating() {
      return <h3>{stars[props.rating - 1]}</h3>;
    } 
    return GiveRating(stars);
    }


export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
