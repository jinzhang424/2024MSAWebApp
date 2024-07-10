import MenuSelection from "../components/MenuSelection";
import { milkTeaItems } from "../data/milkTeaItems.json";
import { milkShakeItems } from "../data/milkShakeItems.json";
import { ItemBoxProps, ItemBoxInfo } from "../components/ItemBox";

const typedMilkTeaItems: ItemBoxInfo[] = milkTeaItems;
const typedMilkShakeItems: ItemBoxInfo[] = milkShakeItems;

let itemsArray: ItemBoxProps[] = [
    {items: typedMilkTeaItems}, 
    {items: typedMilkShakeItems}
];
let itemsCategoryNames: string[] = [
    "Milk Teas", 
    "Milk Shakes"
]

export default function test() {
    
    return (
        <div className="testBody">
            <MenuSelection ItemBoxPropsArray={itemsArray} ItemBoxCategoryNames={itemsCategoryNames}></MenuSelection>
        </div>
    )
}