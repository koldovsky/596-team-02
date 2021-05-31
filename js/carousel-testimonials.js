const customerTestimonials = [
    `<img src="img/testimonials/blonde_woman.webp" class="first_customer_img"/>
    <h3 class="first_customer_name">Alice Peterson</h3>
    <p class="first_customer_review">"I suffer from diabetes and I need to <br />maintain my blood sugar regularly. My <br />therapist recommended one of the <br />supplements, which I bought at Good <br />Habit. After starting the course, I <br />immediately felt
    better. The supplement <br />really helps to maintain the sugar level and <br />prevents spikes."</p>
    <span class="first_customer_date">December 15, 2019</span>`,

    `<img src="img/testimonials/man_with_glasses.webp" class="second_customer_img"/>
    <h3 class="second_customer_name">Jeff Flipstone</h3>
    <p class="second_customer_review">"I have been taking vitamins from Good <br />Habit for the fifth year. I noticed that as <br />soon as I started taking these vitamins, my
    <br />immunity immediately improved. During
    <br />these 5 years, I have not had a single <br />serious illness, even colds have become
    <br />extremely rare."</p>
    <span class="second_customer_date">May 28, 2020</span>`,

    `<img src="img/testimonials/young_blonde_woman.webp" class="third_customer_img"/>
    <h3 class="third_customer_name">Jessica Smith</h3>
    <p class="third_customer_review">"I suffered from hair problems, it was <br />terribly fragile and brittle. No shampoos <br />helped, at most, they gave a temporary <br />effect. However, when I bought vitamins at <br />Good Habit, my problem was solved. Now I
    <br />have healthy and shining hair."</p>
    <span class="third_customer_date">October 18, 2020</span>`
];

let currentIdx = 0;

function showCurrentSlide() {
    const itemContainer = document.querySelector('.testimonials-carousel .carousel-container');
    itemContainer.innerHTML = customerTestimonials[currentIdx];
}

function nextSlide() {
    currentIdx++;
    if (currentIdx >= customerTestimonials.length) currentIdx = 0;
    showCurrentSlide();
}

function prevSlide() {
    currentIdx--;
    if (currentIdx <= 0) currentIdx = customerTestimonials.length - 1;
    showCurrentSlide();
}

setInterval(nextSlide, 10000);

document.querySelector('.testimonials-carousel .slide-prev').addEventListener('click', prevSlide);
document.querySelector('.testimonials-carousel .slide-next').addEventListener('click', nextSlide);

showCurrentSlide();