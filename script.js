document.getElementById("menu").style.zIndex = "0";

Vue.config.devtools = true;

Vue.component('card', {
  template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="card"
        :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  props: ['dataImage'],
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null }),

  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -35;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)` };

    },
    cardBgTransform() {
      const tX = this.mousePX * -40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)` };

    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})` };

    } },

  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    } } });



const app = new Vue({
  el: '#app' });

const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')


hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})

var open = false;

function Drop(n) {
	var i;
	if (open == false) {
		for (i = n; i < 5; i++) {
			Drp(i)
		}
		open = true
	} else if (open == true) {
		for (i = n; i < 5; i++) {
			Cls(i)
		}
		open = false
	}
}

function Drp(n) {
	var elem = document.getElementsByClassName("menu-con")[n];
	var pos = -1 * window.innerHeight - n * 100;
	var id = setInterval(frame, 5);

	function frame() {
		if (pos >= -10) {
			clearInterval(id);
			elem.style.top = 0 + 'px';
		} else {
			pos += 10;
			elem.style.top = pos + 'px';
		}
	}
}

function Cls(n) {
	var elems = document.getElementsByClassName("menu-con")[n];
	var poss = 0;
	var ids = setInterval(frames, 5);

	function frames() {
		if (poss <= -1 * window.innerHeight) {
			clearInterval(ids);
			elems.style.top = -1 * window.innerHeight + 'px';
		} else {
			poss += -7 - n * 2;
			elems.style.top = poss + 'px';
		}
	}
}

function indice(n){ 
  if(open==true){
document.getElementById("menu").style.zIndex = "1";
}
    if(open==false){
setTimeout(function(){document.getElementById("menu").style.zIndex = "0"; },600);
}
  }
