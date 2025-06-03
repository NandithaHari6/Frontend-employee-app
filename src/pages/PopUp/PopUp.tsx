import Button from "../../components/button/Button";
import "./popup.css";
function PopUp({
  showPopUp,
  closePopUp,
  confirmDelete,
  children,
}: {
  showPopUp: boolean;
  closePopUp: (event) => void;
  confirmDelete?:(event)=>void;
  children: React.ReactNode;
}) {
  if (!showPopUp) {
    return null;
  }
  return (
    <div className="popup-main">
      <div className="popup-window">
        <div className="PopUp">
          {children}
          <div className="btns">
            <Button className="primary-btn" title="Confirm" onClick={confirmDelete} />
            <Button
              className="secondary-btn"
              title="Cancel"
              onClick={closePopUp}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
