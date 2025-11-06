import React from "react";
import Section1 from "./Components/Section1/Section1";

const App = () => {
  const card = [
    {
      img: "https://images.unsplash.com/photo-1658211208906-429cd4aa0e5b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8M2QlMjByZW5kZXJ8ZW58MHwxfDB8fHww&auto=format&fit=crop&q=60&w=900",
      intro:
        "The golden sun dipped behind the hills, painting the sky in shades of orange, pink, and violet serenity",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1656067638332-1d189bf81079?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8M2QlMjByZW5kZXJ8ZW58MHwxfDB8fHww&auto=format&fit=crop&q=60&w=900",
      intro:
        "Gentle winds whispered through tall pines, carrying the earthy scent of rain and the quiet hum of life.",
      tag: "UnderServed",
    },
    {
      img: "https://images.unsplash.com/photo-1642059893618-22daf30e92a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fDNkJTIwcmVuZGVyfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      intro:
        "Mountains stood silent under drifting clouds, their snow-capped peaks glowing faintly beneath the pale silver light of dawn.",
      tag: "UnSatisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1630857453903-0386bfb0d990?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fDNkJTIwcmVuZGVyfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      intro:
        "A calm river mirrored the twilight sky, rippling softly as fireflies began their luminous evening dance along the banks.",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1643729428219-cfa662d0991b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fDNkJTIwcmVuZGVyfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      intro:
        "The forest awoke to birdsong, leaves rustling softly as sunlight filtered through the emerald canopy above.",
      tag: "UnderSatisty",
    },
    {
      img: "https://images.unsplash.com/photo-1618176729090-253077a8f948?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fDNkJTIwcmVuZGVyfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      intro:
        "A cool mist lingered over the valley, wrapping the earth in quiet stillness before the day began.",
      tag: "UnServed",
    },
  ];
  return (
    <div>
      <Section1 card={card} />
    </div>
  );
};

export default App;
