import * as PIXI from 'pixi.js'
import * as d3 from 'd3'

const data = [1, 3, 5]

init()

function init() {
  const app = new PIXI.Application({ width: 400, height: 400 })
  document.getElementById('app').appendChild(app.view)

  const canvas = d3.select(app.view)
}

