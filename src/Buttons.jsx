import { data } from './data';

function Buttons({ setClothes }) {

    const filteredClothes = (searchTerm) => {
    const newClothes = data.filter(item =>
    item.searchTerm.toLowerCase().includes(searchTerm.toLowerCase())
  );
    setClothes(newClothes);
};

    return(<div className="cont">
        <button onClick={() => filteredClothes("dress")} className="change">Dresses</button>
        <button onClick={() => filteredClothes("pants")} className="change">Pants</button>
        <button onClick={() => filteredClothes("skirt")} className="change">Skirts</button>
        <button onClick={() => filteredClothes("shoes")} className="change">Shoes</button>
        <button onClick={() => filteredClothes("shirt")} className="change">Shirts</button>
    </div>)
}

export default Buttons;