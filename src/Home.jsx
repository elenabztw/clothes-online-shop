import { useEffect, useState } from "react";
import { data } from './data';
import Clothes from "./Clothes";
import Buttons from "./Buttons";

function Home() {

    const [clothes, setClothes] = useState(data);
    const [text, setText] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const filtered = data.filter((item) =>
        item.searchTerm.toLowerCase().includes(search.toLowerCase())
        );
        setClothes(filtered);
    }, [search]);

    const handleText = (e) => {
        setText(e.target.value);
        setSearch(e.target.value)
    }

    const finalSearch = (e) => {
        e.preventDefault();
        setSearch(text);
    }

    return(
        <div>
            <form onSubmit={finalSearch}>
                <input onChange={handleText}
                placeholder="Search a category ..."
                type="text"
                value={text}/>
            </form>
            <Buttons setClothes={setClothes}/>
            <Clothes clothes={clothes}/>
            
        </div>
    )
}

export default Home;