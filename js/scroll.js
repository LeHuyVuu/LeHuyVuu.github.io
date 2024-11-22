document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".scroll-fade");
  
    const elementInView = (el, offset = 100) => {
      const elementTop = el.getBoundingClientRect().top;
      return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
    };
  
    const displayScrollElement = (element) => {
      element.classList.add("active");
    };
  
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 150)) {
          displayScrollElement(el);
        }
      });
    };
  
    window.addEventListener("scroll", () => {
      handleScrollAnimation();
    });
  
    handleScrollAnimation(); // Kích hoạt kiểm tra ban đầu
  });
  


const h = document.querySelector('#h');
const b = document.body;

let base = (e) => {
    var x = e.pageX / window.innerWidth - 0.5;
    var y = e.pageY / window.innerHeight - 0.5;
    h.style.transform = `
        perspective(90vw)
        rotateX(${y * 4 + 75}deg)
        rotateZ(${-x * 12 + 45}deg)
        translateZ(-9vw)
    `;
}

b.addEventListener('pointermove', base);