canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

ctx.beginPath()
ctx.strokeStyle="red"
ctx.lineWidth=2
ctx.arc(556,145,31,0,2*Math.PI)
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle="green"
ctx.lineWidth=2
ctx.arc(516,175,31,0,2*Math.PI)
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle="black"
ctx.lineWidth=2
ctx.arc(476,145,31,0,2*Math.PI)
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle="gold"
ctx.lineWidth=2
ctx.arc(436,175,31,0,2*Math.PI)
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle="blue"
ctx.lineWidth=2
ctx.arc(396,145,31,0,2*Math.PI)
ctx.stroke()