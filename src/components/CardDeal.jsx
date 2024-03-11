import { card, ph_3 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better Mobile deal <br className="sm:block hidden" /> with BreakdealsMobile.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With BreakdealsMoble you can trust on Quality and Genuine product
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={ph_3} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
