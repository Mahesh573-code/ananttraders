function scrollToProducts() {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
}

function orderNow(product) {
  let phone = "919422169611"; // replace with your WhatsApp number
  let message = `Hello Anant Traders, I want to order ${product}`;
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
// Smooth scroll
function scrollToProducts() {
  document.getElementById("products").scrollIntoView({behavior:"smooth"});
}

// WhatsApp order
function orderNow(product){
  let url = `https://wa.me/919422169611?text=${encodeURIComponent("I want to order "+product)}`;
  window.open(url);
}

// Filter
function filterItems(cat){
  document.querySelectorAll('.card').forEach(c=>{
    c.style.display = (cat==='all'||c.classList.contains(cat))?'block':'none';
  });
}

// Scroll animation
window.addEventListener('scroll',()=>{
  document.querySelectorAll('.animate').forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-100){
      el.classList.add('show');
    }
  });
});

// Counter
document.querySelectorAll('[data-count]').forEach(el=>{
  let target=+el.dataset.count, i=0;
  let interval=setInterval(()=>{
    el.innerText=i++;
    if(i>target) clearInterval(interval);
  },20);
});

// Lightbox
function openLightbox(img){
  document.getElementById('lightbox').style.display='flex';
  document.getElementById('lightbox-img').src=img.src;
}
function closeLightbox(){
  document.getElementById('lightbox').style.display='none';
}

// Dark mode
function toggleDark(){
  document.body.classList.toggle('dark');
}
function toggleMenu() {
  document.querySelector("nav").classList.toggle("show");
}
const slider = document.getElementById("productSlider");

function slideLeft() {
  slider.scrollBy({ left: -300, behavior: "smooth" });
}

function slideRight() {
  slider.scrollBy({ left: 300, behavior: "smooth" });
}
