const gradients = document.querySelectorAll(".gradient-image-accordion");
const itensImages = document.querySelectorAll(".item-all-images");

itensImages.forEach((item) => {
    console.log(item);
    item.addEventListener('click', function() {
    
        itensImages.forEach(img => {img.classList.remove('active');
            img.querySelector('.gradient-image-accordion').classList.remove('active');
            item.querySelector('.text-dad-all-images').classList.remove('active');
            img.querySelector('.text-dad-all-images p').classList.remove('active');
        });

        item.classList.add('active');
        item.querySelector('.gradient-image-accordion').classList.add('active');
        item.querySelector('.text-dad-all-images').classList.add('active');
        item.querySelector('.text-dad-all-images p').classList.add('active');
    });
});