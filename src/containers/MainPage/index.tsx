import React, { useEffect, useState } from "react";
import MainContent from "../../components/MainContent";

const MainPage: React.FC = () => {
  const [contentVisibility, setContentVisibility] = useState(false);
  const [wasOpen, setWasOpen] = useState(false);

  useEffect(() => {
    console.log("main page container mount");
  }, []);

  return (
    <>
      {contentVisibility && <MainContent setWasOpen={setWasOpen} />}
      <button
        disabled={!contentVisibility && wasOpen}
        type="button"
        onClick={() => setContentVisibility((prev) => !prev)}>
        {contentVisibility ? "Скрыть текст" : "Показать текст"}
      </button>
    </>
  );
};

export default MainPage;
