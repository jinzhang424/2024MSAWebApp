import ItemBox from "../components/ItemBox";
import { milkTeaItems } from "../data/milkTeaItems.json"

export default function test() {
    
    return (
        <div className="testBody">
            <ItemBox items={milkTeaItems} />
        </div>
    )
}