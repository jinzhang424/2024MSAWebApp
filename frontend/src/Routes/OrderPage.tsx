import "./OrderPage.css";
import NavigationBar from "../components/NavigationBar";
import logo from "../data/images/logo.svg"
import ContactsSection from "../components/ContactsSection"

export default function OrderPage() {
  return (
    <div className="orderPageLayout">

      <div className="orderPageSection1">
        <NavigationBar/>
      </div>

      <div className="orderSection">
      </div>

      <div className="orderPageContacts">
        <ContactsSection/>
      </div>
    </div>
  )
}
