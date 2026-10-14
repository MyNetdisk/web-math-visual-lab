<template>
  <DemoWrapper
    title="Canvas 坐标系翻转"
    description="数学坐标系Y轴向上，浏览器Canvas默认Y轴向下；本Demo演示坐标转换，绘制直线与坐标点。"
    :source-code="sourceCode"
    @reset="initCanvas"
  >
    <template #canvas>
      <canvas ref="canvasRef" width="600" height="400"></canvas>
    </template>
  </DemoWrapper>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import DemoWrapper from '../../../components/DemoWrapper.vue'

const canvasRef = ref<HTMLCanvasElement|null>(null)
let ctx:CanvasRenderingContext2D|null = null

// 坐标转换函数：数学y → canvasY
const mathY2CanvasY = (mathY:number, canvasH:number) => canvasH - mathY

const initCanvas = () => {
  if(!canvasRef.value) return
  const canvas = canvasRef.value
  ctx = canvas.getContext('2d')
  if(!ctx) return
  const w = canvas.width
  const h = canvas.height
  ctx.clearRect(0,0,w,h)

  // 绘制坐标轴
  ctx.strokeStyle="#666"
  ctx.beginPath()
  // X轴
  ctx.moveTo(0, mathY2CanvasY(200, h))
  ctx.lineTo(w, mathY2CanvasY(200, h))
  // Y轴
  ctx.moveTo(300, 0)
  ctx.lineTo(300, h)
  ctx.stroke()

  // 绘制点 (100,100) 数学坐标
  const px = 300 + 100
  const py = mathY2CanvasY(200 + 100, h)
  ctx.fillStyle="#38bdf8"
  ctx.beginPath()
  ctx.arc(px, py,5,0,Math.PI*2)
  ctx.fill()
}

onMounted(()=>{
  initCanvas()
})

const sourceCode = `
// 核心坐标转换
const mathY2CanvasY = (mathY:number, canvasH:number) => canvasH - mathY
`
</script>
