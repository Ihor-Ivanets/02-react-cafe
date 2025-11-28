import css from "./CafeInfo.module.css";
import { useState } from "react";

function CareInfo() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.description}>
        Please rate our service by selecting one of the options below.
      </p>
    </div>
  );
}

export default CareInfo;
