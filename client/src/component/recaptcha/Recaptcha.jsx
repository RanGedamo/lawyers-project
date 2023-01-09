import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Recaptcha() {
  const onChange = (value) => {
    console.log("Captcha value:", value);
  };
  return (
    <ReCAPTCHA
      sitekey="6LfswNwjAAAAAJyhNdBTVRESbBvQydKci0gLratG"
      onChange={onChange}
    />
  );
}
