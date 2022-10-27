import React, { useEffect, useState } from "react";
import { urlFor, client } from "../../client";

const Socials = () => {
  const [socials, setsocials] = useState([]);

  useEffect(() => {
    const query = '*[_type == "contacts"]';

    client.fetch(query).then((data) => {
      setsocials(data);
    });
  }, []);

  return (
    <section className="socials">
      <article className="socialbx">
        <h3>Socials</h3>
        <p>connect with me via various socials handles</p>
        <div className="icon_bx">
          {socials &&
            socials.map((social) => (
              <a href={social.url} className="icon" key={social.platform}>
                <img src={urlFor(social.icon)} alt={social.platform} />
              </a>
            ))}
        </div>
      </article>
    </section>
  );
};

export default Socials;
