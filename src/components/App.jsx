import React, { Component } from 'react';
import SelectButton from './SelectButton';
import Hands from "./Hands";
import Result from "./Result";

const handList = ["✊", "✌", "✋"];
let result;
let win = 0;
let draw = 0;
let lose = 0;
let total = "";  //〇勝〇敗〇分

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      player: [],
      dealer: []
    };
    this.game = this.game.bind(this);
  }

  game(i) {
    let dealerState = this.state.dealer;
    let playerState = this.state.player;

    // 相手の手
    let random = Math.floor(Math.random() * (3)); //0,1,2をランダムに選ぶ
    dealerState.push(handList[random]);
    this.setState(dealerState);
    console.log(dealerState);

    // 自分の手
    playerState.push(handList[i]);
    this.setState(playerState);
    console.log(playerState);

    // 勝敗の表示     0⇀グー 1⇀チョキ 2⇀パー
    let dHand = handList.indexOf(dealerState[dealerState.length - 1]);
    let pHand = handList.indexOf(playerState[playerState.length - 1]);
    if (dHand != pHand) {
      if (dHand === 0 && pHand === 2 || dHand === 1 && pHand === 0 || dHand === 2 && pHand === 1) {
        result = "勝ち";
        win++;
      } else {
        result = "負け";
        lose++;
      }
    } else {
      result = "引き分け";
      draw++;
    }
    total = win + "勝" + lose + "敗" + draw + "分";
  }

  render() {
    return (
      <div>
        <h1 style={{ fontSize: 60 }}>JANKEN</h1>
        <Hands Hand={this.state.dealer[this.state.dealer.length - 1]} />
        <Hands Hand={this.state.player[this.state.player.length - 1]} />
        <Result result={result} total={total} />
        <SelectButton game={() => this.game(0)} value={handList[0]} />
        <SelectButton game={() => this.game(1)} value={handList[1]} />
        <SelectButton game={() => this.game(2)} value={handList[2]} />
      </div>
    );
  }
}
