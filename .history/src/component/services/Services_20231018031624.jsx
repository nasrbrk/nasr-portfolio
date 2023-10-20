import './services.scss'
import {motion } from "framer-motion";
export default function Services() {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
            I focus on crafting <br /> meaningful digital <br /> experiences
        </p>
      </motion.div>
          <motion.div className="titleContainer">
              <div className="title">
                  <img src="/people.webg" alt="" />
                  <h1><b>Unique</b>ideas</h1>
              </div>
              <div className="title">
                  <h1><b>For Your</b>Business.</h1>
                  <button>What I Do?</button>
              </div>
      </motion.div>
          <motion.div className="listContainer">
              <div className="box">
                  <h2>title</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nulla saepe totam aliquam exercitationem molestiae asperiores doloremque ad non enim eveniet fuga quaerat dolore eos unde sit, tempora numquam itaque soluta sed consequuntur explicabo? Blanditiis!</p>
                  <button></button>
              </div>
      </motion.div>
    </motion.div>
  );
}
