"use client";
import { motion, useTransform, useScroll, useInView } from "framer-motion";
import { useRef } from "react";
import Cardthreed from "./Card3d";

const Scroll = () => {
  return (
    <div className=" px-[5%]">
      <div>
        <h1 className="font-extrabold text-6xl text-center pt-20">My Writings</h1>
      </div>
      <div>
        <HorizontalScrollCarousel />
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map scrollYProgress to horizontal translation of cards
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Use useInView to trigger animations only when the card is in view
  const isInView = useInView(cardRef, { once: true, margin: "-20% 0px" });

  return (
    <motion.div
      ref={cardRef}
      // Apply scale and opacity only when the card is in view
      initial={{ scale: 0.4, opacity: 0.5 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="group relative h-[650px] w-dvw overflow-hidden px-20"
    >
      <div className="flex flex-row gap-5 mr-10 items-center">
        <div>
          <Cardthreed />
        </div>
        <h1 className="font-bold text-xl mr-96">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni debitis modi corrupti minima pariatur exercitationem facere nostrum blanditiis, sapiente atque ullam veniam porro fugit a aut nemo molestiae error Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur dignissimos nesciunt alias mollitia ducimus? Blanditiis ab provident vero magnam dolor eveniet, ipsum laudantium cum officia, doloribus modi, error amet doloremque.
        Perferendis hic provident perspiciatis, unde inventore ipsum odit ea dolorem vel repudiandae. Voluptatibus quisquam repellendus nemo voluptatem velit tempore odit molestiae deleniti, ab quae, sapiente nihil amet tempora eum dolores!
        Ipsa odit minima, voluptatem explicabo fuga vel aliquam voluptas dolorem libero nihil, omnis et? Architecto harum animi cupiditate necessitatibus obcaecati ipsum tempora ducimus, accusantium hic velit commodi corporis sit quidem.
        Officia fugiat magnam voluptas excepturi aperiam temporibus facilis, minus expedita dolorum facere natus eveniet repellendus at fuga assumenda sed vitae, cumque dicta ad quos praesentium inventore beatae modi molestiae! Quibusdam?
        Nemo dignissimos nesciunt error molestiae, saepe labore quia laborum, repellendus reiciendis doloribus nulla tempore itaque cupiditate adipisci. Eum voluptatem numquam facilis ipsa necessitatibus est, magni aspernatur quod repellat ratione magnam!
        </h1>
      </div>
    </motion.div>
  );
};

export default Scroll;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];
