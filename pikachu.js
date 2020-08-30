!function () {
  let duration = 20
  function wirteCode(prefix, code, fn)
  {
    let n = 0
    let container = document.querySelector('.code')
    let styleTag = document.querySelector('#styleTag')
    let id
    id = setTimeout(function run(){
      n += 1
      container.innerHTML = code.substring(0, n)
      container.scrollTop = container.scrollHeight
      styleTag.innerHTML = code.substring(0, n)
      if(n< code.length)
      {
        id = setTimeout(run,duration)
      }
      else{
        fn&&fn.call()
      }
    }, duration)  //setInterval这里duration是无法改变的，只读一次  那么可以通过setTimeout实现
  }

  let result = `
  .preview{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FEE433;
  }
  .wrapper{
  width: 100%;
  height: 209px;
  position: relative;
  }
  .wrapper > .nose{
  position: absolute;
  border: 14px solid black;
  border-radius: 50%;
  border-color: black transparent transparent;
  left: 50%;
  top: 30px;
  margin-left: -14px;
  }
  .wrapper > .eye{
  width: 64px;
  height: 64px;
  position: absolute;
  border-radius: 50%;
  border: 2px solid #000;
  background: #2e2e2e;
  }
  .wrapper > .left.eye{
  right: 50%;
  margin-right: 85px;
  }
  .wrapper > .right.eye{
  left: 50%;
  margin-left: 85px;
  }
  .wrapper > .eye::before{
  content: '';
  display: block;
  width: 30px;
  height: 30px;
  position: absolute;
  border-radius: 50%;
  background: white;
  top: 0px;
  left: 10px;
  border: 2px solid #000;
  }
  .wrapper > .face{
  width: 68px;
  height: 68px;
  background: #fc0d1c;
  border-radius: 50%;
  border: 2px solid #000;
  position: absolute;
  top: 85px;
  }
  .wrapper > .face.right{
  left: 50%;
  margin-left: 115px;
  }
  .wrapper > .face.left{
  right: 50%;
  margin-right: 115px;
  }
  .wrapper > .upperLip{
  height: 20px;
  width: 64px;
  border: 3px solid #000;
  border-top: none;
  top: 53px;
  position: absolute;
  background: #FEE433;
  z-index: 1;
  }
  .wrapper > .upperLip.left{
  right: 50%;
  border-bottom-left-radius: 40px 25px;
  transform: rotate(-20deg);
  border-right: none;
  }
  .wrapper > .upperLip.right{
  left: 50%;
  border-bottom-right-radius: 40px 25px;
  transform: rotate(20deg);
  border-left: none;
  }
  .wrapper > .loweLip-wrapper{
  overflow: hidden;
  bottom: 38px;
  left: 50%;
  margin-left: -150px;
  position: absolute;
  height: 110px;
  width: 300px;
  }
  .wrapper > .loweLip-wrapper > .lowerLip{
  width: 300px;
  height: 4000px;
  background: #990513;
  border-radius: 150px/2000px;
  border: 2px solid black;
  bottom: 0;
  position: absolute;
  overflow: hidden;
  }
  .wrapper > .loweLip-wrapper > .lowerLip::after{
  content: '';
  position: absolute;
  bottom: -10px;
  width: 100px;
  height: 100px;
  left: 50%;
  margin-left: -50px;
  border-radius: 50px;
  background: #FC4A62;
  }
  `
  wirteCode('',result)
  $('.actions').on('click','button',function (e) {
    let $button = $(e.currentTarget)
    let speed = $button.attr('data-speed')
    console.log(speed)
    $button.addClass('active').siblings('.active').removeClass('active')
    switch (speed) {
      case 'slow':
        duration = 100
        break
      case 'normal':
        duration = 50
        break
      case 'fast':
        duration = 10
        break
    }
  })
}.call()