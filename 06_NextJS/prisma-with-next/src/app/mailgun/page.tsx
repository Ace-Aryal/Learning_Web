import { sendSimpleMessage } from "@/lib/mailgun";

function Mailgun() {
  return (
    <div>
      <button onClick={sendSimpleMessage} type="submit">
        Call
      </button>
    </div>
  );
}

export default Mailgun;
