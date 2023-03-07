import React from 'react';

function EarthQuakeNode({title, mag, depth, date_hour, date_day}) {

    const reverseString = (str) => {
        let splitString = str?.split("-");
        let reverseArray = splitString?.reverse();
        let joinArray = reverseArray?.join("/");

        return joinArray;
    }

  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      <hr />
      <div className="infos">
        <section className="infobox1">
          <p>
            Büyüklük: <span className="size">{mag}</span>
          </p>
          <p>Derinlik: {depth} km</p>
        </section>
        <section className="infobox2">
          <p>Saat: {date_hour}</p>
          <p>Tarih: {reverseString(date_day)}</p>
        </section>
      </div>
    </div>
  )
}

export default EarthQuakeNode;