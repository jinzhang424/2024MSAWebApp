import "./OrderPage.css";
import NavigationBar from "../components/NavigationBar";
import ContactsSection from "../components/ContactsSection";

import MenuSelection from "../components/MenuSelection";
import { milkTeaItems } from "../data/milkTeaItems.json";
import { milkShakeItems } from "../data/milkShakeItems.json";
import { ItemBoxProps, ItemBoxInfo } from "../components/ItemBox";

const MilkTeaItems: ItemBoxInfo[] = milkTeaItems as ItemBoxInfo[];
const MilkShakeItems: ItemBoxInfo[] = milkShakeItems as ItemBoxInfo[];

let itemsArray: ItemBoxProps[] = [
    {items: MilkTeaItems}, 
    {items: MilkShakeItems}
];
let itemsCategoryNames: string[] = [
    "Milk Teas", 
    "Milk Shakes"
]

export default function OrderPage() {
  return (
    <div className="orderPageLayout">

      <div className="orderPageSection1">
        <NavigationBar/>
      </div>

      <div className="orderSection">
        <MenuSelection ItemBoxPropsArray={itemsArray} ItemBoxCategoryNames={itemsCategoryNames}></MenuSelection>
      </div>

      <div className="orderPageContacts">
        <ContactsSection/>
      </div>
    </div>
  )
}
