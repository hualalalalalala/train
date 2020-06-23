import React from 'react';
import Player from "@/page/Battle/Player"
import style from "@/page/Battle/battle.less"

export default class Battle extends React.Component {
  render() {
    const { startBattle,getPlayerFromUrl } = this.props;
    return (
      <div className={style.battle}>
        <div className={style.instrutions}>
          <h2>Instrutions</h2>
          <ul>
            <li>
              <h3>Enter Two Users</h3>
              <div><i className="fa fa-user icons" style={{ color: "#e06c75" }} /></div>
            </li>
            <li>
              <h3>Battle</h3>
              <div><i className="fa fa-hand-o-right icons" style={{ color: "#ec981d" }} /></div>
            </li>
            <li>
              <h3>See The Winner</h3>
              <div><i className="fa fa-trophy icons" style={{ color: "#e06c75" }} /></div>
            </li>
          </ul>
        </div>
        <Player startBattle={startBattle} getPlayerFromUrl={getPlayerFromUrl} />
      </div>
    );
  }
}
