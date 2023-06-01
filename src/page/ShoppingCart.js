import { Shopping } from "../components/Shopping/Shopping"

const ShoppingCart = ({selectedFoods, setSelectedFoods, onChange, removeFood}) => {
    return (
        <div>
            <Shopping selectedFoods={ selectedFoods } setSelectedFoods={setSelectedFoods} onChange={onChange} removeFood={removeFood}/>
            
        </div>
    )
}

export default ShoppingCart;