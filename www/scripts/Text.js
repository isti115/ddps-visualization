import PIXI from '../libraries/PIXI.js'

import Component from './Component.js'

export default class Text extends Component {
  constructor (position, { text = '', fontSize = 25 } = {}) {
    super(position, { text, fontSize })

    this.pixiGraphics.interactive = true
    this.pixiGraphics.buttonMode = true

    this.text = new PIXI.Text(
      this.properties.text,
      {
        fontFamily: 'Arial',
        fontSize: this.properties.fontSize,
        fill: 0xff1010,
        align: 'center'
      }
    )

    this.text.position.set(0, -this.properties.fontSize / 2)

    this.pixiGraphics.addChild(this.text)
  }

  draw () {
    this.pixiGraphics.removeChild(this.text)

    this.text = new PIXI.Text(
      this.properties.text,
      {
        fontFamily: 'Arial',
        fontSize: this.properties.fontSize,
        fill: 0xff1010,
        align: 'center'
      }
    )

    this.text.position.set(0, -this.properties.fontSize / 2)

    this.pixiGraphics.addChild(this.text)
  }
}
