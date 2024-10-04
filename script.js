const dropdown=document.querySelector(".dropdown")
const dropDownMenu=document.querySelector(".dropdown-menu")
function handleDropDown() {
    dropdown.addEventListener("click", (event) => {
                
        if (dropDownMenu.style.display === "block") {
            dropDownMenu.style = "display:none;";
        } else {
            dropDownMenu.style = "display:block;";
        }
        
    });
}
handleDropDown()

$(document).ready(function(){
    $('.testimonial-slider').slick({
      slidesToShow: 4,    
      slidesToScroll: 1,  
      dots: true,         
      infinite: true,     
      speed: 300,         
      autoplay: false,     
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });

  var swiper = new Swiper('.testimonial-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-arrow-next',
      prevEl: '.swiper-arrow-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
  });
