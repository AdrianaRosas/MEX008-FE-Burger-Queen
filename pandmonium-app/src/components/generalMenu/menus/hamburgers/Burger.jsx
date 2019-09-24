import React from 'react';
import '../FoodStyle.scss';
import hamburger from '../../img/hamburger.png';
import BurgerName from '../food'

//con props


function Burger() { //componente principal
  return (
    <div className= "container-food">
      <BurgerName name="Gula"icon= {hamburger} />
      <BurgerName name="Malicia" icon={hamburger}/>
      <BurgerName name="Soberbia" icon={hamburger}/>
      <BurgerName name="Alma en pena" icon={hamburger}/>
      <BurgerName name="Encarnación" icon={hamburger}/>
      <BurgerName name="Banana limbo" icon={hamburger}/>

    </div>
  );
}
export default Burger;