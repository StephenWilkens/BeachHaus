import Script from "next/script";

export default async function Playground() {
  return (
    <div>
      <Script src="https://www.google.com/recaptcha/api.js" />
      <Script src="https://api.tripleseat.com/v1/leads/ts_script.js?lead_form_id=20813&amp;public_key=5cb2656b95d6432fb8b400a5e9a8e48623824589" />
    </div>
  );
}
