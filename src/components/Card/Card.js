import React from "react";
import EquilibriumImg from "../../images/image-equilibrium.jpg";
import classes from "./Card.module.scss";
import EthereumImg from "../../images/icon-ethereum.svg";
import ClockIcon from "../../images/icon-clock.svg";
import AvatarImg from "../../images/image-avatar.png";
import EyeIcon from "../../images/icon-view.svg";

const Card = () => {
  return (
    <div className={classes.card}>
      <div className={classes.card__img__group}>
        <img
          src={EquilibriumImg}
          alt="Square in equilibrium"
          className={classes.card__img}
        />
        <div className={classes.filter}>
          <img src={EyeIcon} alt="Eye Icon" className={classes.filter__icon} />
        </div>
      </div>
      <h2>
        <button className={classes.card__title}>Equilibrium #3429</button>
      </h2>
      <p className={classes.card__description}>
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className={classes.card__row}>
        <div className={classes.card__crypto}>
          <img
            src={EthereumImg}
            alt="Logo of Ethereum"
            className={classes.card__icon}
          />{" "}
          <span>0.041 ETH</span>
        </div>
        <div className={classes.card__time}>
          <img
            src={ClockIcon}
            alt="Icon of a Clock"
            className={classes.card__icon}
          />{" "}
          <span>3 days left</span>
        </div>
      </div>
      <hr />
      <div className={classes.card__avatar__row}>
        <img
          src={AvatarImg}
          alt="Avatar of Jules Wyvern"
          className={classes.card__avatar}
        />{" "}
        <span>
          Creation of <button>Jules Wyvern</button>
        </span>
      </div>
    </div>
  );
};

export default Card;
