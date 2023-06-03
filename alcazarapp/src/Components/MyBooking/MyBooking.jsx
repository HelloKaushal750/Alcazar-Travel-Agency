import "./CSS/MyBooking.css";
import LeftBooking from "./LeftBooking";
import MiddleBooking from "./MiddleBooking";
import RightBooking from "./RightBooking";

function MyBooking() {
  return (
    <div className="booking_main_container">
      {/* Left */}
      <LeftBooking />

      {/* Middle */}
      <MiddleBooking />

      {/* Right */}
      <RightBooking />
    </div>
  );
}

export default MyBooking;
