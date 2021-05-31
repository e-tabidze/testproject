import React from "react";
import classes from "./styles.module.scss";
import banana from "../../Assets/Images/banana.png";
import building from "../../Assets/Images/building.png";
import { Play } from "../../Assets/Icons";
import ActiveP from "../../Assets/Icons/ActiveP";

const HomePage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container_content}>
        <div className={classes.container_navbar}>
          <div className={classes.container_courses}>Courses</div>
          <div className={classes.container_items}>
            <div>
              <div className={classes.container_popular}>Popular</div>
              <div>
                <ActiveP />
              </div>
            </div>
            <div className={classes.container_favorite}>Favorite</div>
            <div className={classes.container_favorite}>New</div>
          </div>
        </div>

        <div className={classes.container_section}>
          <div className={classes.container_texts}>
            <div className={classes.container_first}>
              <div className={classes.container_illustration}>Illustration</div>
              <div className={classes.container_illustration}>134 min</div>
            </div>
            <div className={classes.container_second}>
              <div className={classes.container_lessons}>24 lessons</div>
              <div className={classes.container_icon}>
                <Play width="100%" />
              </div>
            </div>
          </div>
          <img className={classes.container_bgimage} src={banana} />
        </div>

        <div className={classes.container_section}>
          <div className={classes.container_texts}>
            <div className={classes.container_first}>
              <div className={classes.container_illustration}>
                Graphic design
              </div>
              <div className={classes.container_illustration}>236 min</div>
            </div>
            <div className={classes.container_second}>
              <div className={classes.container_lessons}>30 lessons</div>
              <div className={classes.container_icon}>
                <Play width="100%" />
              </div>
            </div>
          </div>
          <img className={classes.container_bgimage} src={building} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
