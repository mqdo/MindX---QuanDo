import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [position, setPosition] = useState(0);

  const [isScrolling, setScrolling] = useState(false);

  const [isShowing, setShowing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(true);
      if (window.scrollY < position) {
        setShowing(true);
      } else {
        setShowing(false);
      }
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position, isShowing, isScrolling]);

  useEffect(() => {
    const checkScroll = () => {
      if (isScrolling) {
        setScrolling(false);
      }
    };
    setInterval(checkScroll, 5000);
    return () => {
      clearInterval(checkScroll);
    };
  }, [isScrolling]);

  return (
    <div className="App">
      <section className="context">
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          odio soluta aut corrupti nemo at saepe sunt eum deleniti. Sunt
          cupiditate repellendus necessitatibus distinctio, tempora
          reprehenderit enim doloribus voluptatem inventore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          totam magni optio atque porro architecto neque veniam distinctio ad
          beatae veritatis sint molestiae voluptate nam incidunt fugiat
          necessitatibus ea, minus nihil repellat? Ex, accusamus facilis. Earum
          nostrum culpa quibusdam, voluptates iure magni atque sapiente quam
          saepe nemo molestiae dicta sequi doloremque temporibus suscipit
          officiis aspernatur quasi quos. Excepturi earum ex sapiente corporis
          nesciunt corrupti perferendis, ea neque dignissimos reiciendis alias
          saepe minus maiores voluptate doloremque atque, incidunt ducimus
          optio. A inventore dolorum, fuga quos delectus ab. Non eligendi,
          inventore eius atque blanditiis praesentium reiciendis dolorum fugit
          provident. Eum, reiciendis incidunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
          reprehenderit sequi quos, magni voluptatum odit accusamus voluptatibus
          laborum illum, ratione officia asperiores dolorum alias rem mollitia
          repudiandae. Esse beatae culpa, facilis velit placeat vitae, suscipit,
          enim exercitationem aut eaque quisquam minus. Optio, recusandae
          laboriosam, dolores deserunt corrupti ea ut earum vitae laborum
          consequuntur accusantium expedita aliquam itaque! Mollitia, numquam
          at? Quas reprehenderit laudantium ipsum aspernatur inventore odit!
          Officiis consequuntur at beatae vero, vel non perferendis. Porro quis
          quisquam a neque molestiae excepturi fugiat aperiam beatae, nobis sunt
          possimus laborum deleniti ad blanditiis itaque distinctio? Suscipit
          officiis perferendis vero atque, cumque optio. Libero sed totam non,
          eaque facere ut amet eveniet in nostrum. Quos error fugiat illo modi
          facilis omnis necessitatibus est expedita id ipsam cupiditate,
          corrupti delectus, illum perspiciatis eligendi debitis laborum
          pariatur! Inventore quia ducimus, reiciendis cupiditate sapiente
          aliquid omnis quae repudiandae eum quas incidunt earum, nihil sint non
          vero illum numquam aut neque velit voluptate consequuntur placeat?
          Facere ducimus ab repudiandae deleniti eligendi, non magnam nesciunt
          omnis quos error quis atque et reiciendis accusamus nihil ea ullam.
          Aliquid id voluptate quos porro sint natus quibusdam ex officia eius
          suscipit, consectetur beatae ea. Consequatur nihil sequi assumenda
          quibusdam beatae.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cumque
          quae consectetur vero enim fugit ipsam totam nostrum id vitae aperiam
          dolorem eos nemo, voluptas error non delectus porro natus facere
          tenetur quis, excepturi officia. Exercitationem quasi officiis quis
          ea, illo blanditiis culpa ab dolor, cumque mollitia corporis
          asperiores perferendis incidunt unde. Iusto voluptatum, fugiat nulla
          odio possimus enim nobis. Commodi perferendis atque modi incidunt hic
          voluptatem culpa possimus voluptatum ipsam temporibus porro eveniet
          expedita aliquam molestiae sit, veritatis ipsa.
        </p>
      </section>
      <button
        type="button"
        className={
          position !== 0 && isShowing && isScrolling
            ? "scroll-up showing"
            : "scroll-up"
        }
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        🔝
      </button>
    </div>
  );
}

export default App;
