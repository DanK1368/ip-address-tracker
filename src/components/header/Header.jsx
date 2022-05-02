import "./Header.scss";
import Form from "../form/Form";

function Header() {
  return (
    <div className="header">
      <h1 className="header__title">IP Address Tracker</h1>
      <Form />
    </div>
  );
}
export default Header;
