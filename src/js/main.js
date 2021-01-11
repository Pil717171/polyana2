  // slider
  function initSlider () {
  var mySwiper = new Swiper('.swiper-container', {
    // cssMode: true,
    // mousewheel: true,
    loop: true,
    autoplay: true,
    speed: 600,
    keyboard: true,
    breakpoints: {
      991: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    }
  })

}
  // map
  function zoomCenterCalculated () {
    if(document.body.clientWidth > 768) {
      return {
        center: [ 23.831875433137625, 53.68126321102553],
        zoom: 14
      }
    } else {
      return {
        center: [23.83091713937516, 53.665299429424074],
        zoom: 12
      }
    }
  }

  function initMap () {
    var optionsObj = zoomCenterCalculated()
    mapboxgl.accessToken = 'pk.eyJ1IjoicGlsNzE3MTcxIiwiYSI6ImNrMHl6ZHRzZDA5NjIzbnBlbXFjNG1ieDAifQ.PlTvgO1WM00hT6-OMxJsWA';
    console.log(optionsObj)
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: optionsObj.center,
      zoom: optionsObj.zoom
    });
    var myMarker = document.createElement('div')
    myMarker.className = 'marker'

    var marker = new mapboxgl.Marker(myMarker)
      .setLngLat([23.831097576159063, 53.682273120859275])
      .addTo(map);
    map.addControl(new mapboxgl.NavigationControl());
    map.on('load', function () {
      // coordinates delivery http://apps.headwallphotonics.com/
      map.addSource('maine', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'geometry': {
            'type': 'Polygon',
            'coordinates': [
              [
                [ 23.785738320221466, 53.65528028792717],
                [ 23.792518944611114, 53.6524316467722],
                [ 23.80110201345877, 53.65009154754424],
                [ 23.80934175955252, 53.6472425557913],
                [ 23.818954796661895, 53.645817987730105],
                [ 23.826164574493927, 53.64591974418755],
                [ 23.833202690949005, 53.646428522791894],
                [ 23.834747643341583, 53.64764956639833],
                [ 23.8377946327825, 53.648018416367684],
                [ 23.842901558746856, 53.64889601194487],
                [ 23.845948548187774, 53.64935388064758],
                [ 23.851677746643585, 53.651083561988855],
                [ 23.85594584029557, 53.654075659210285],
                [ 23.858325658801068, 53.65767791627526],
                [ 23.860385595324505, 53.663170868231944],
                [ 23.860643087389935, 53.668510551905555],
                [ 23.860900579455365, 53.673391956330875],
                [ 23.86277784787416, 53.67926566124662],
                [ 23.862949509251113, 53.68150247068347],
                [ 23.860632080662246, 53.68409498752515],
                [ 23.855482239353652, 53.68719563140656],
                [ 23.85204901181459, 53.68983862297808],
                [ 23.85230650388002, 53.69182075778488],
                [ 23.855911392796035, 53.694006080305705],
                [ 23.85905223765795, 53.70103782494911],
                [ 23.85905223765795, 53.70520417365856],
                [ 23.861112174181386, 53.70845567142129],
                [ 23.859395560411855, 53.711402124244444],
                [ 23.8592238990349, 53.71444996174938],
                [ 23.856133994249745, 53.71536426994206],
                [ 23.850469168810292, 53.71566903492337],
                [ 23.841714438585683, 53.71597379769663],
                [ 23.839654502062245, 53.7201386676342 ],
                [ 23.83107143321459, 53.72105285217623],
                [ 23.826608237413808, 53.721865443975574],
                [ 23.822660025743886, 53.722322519962866],
                [ 23.81905513682787, 53.72196701684652],
                [ 23.814420279650136, 53.72156072389078],
                [ 23.81283241191332, 53.71919906836959],
                [ 23.811201628832265, 53.7166087130489],
                [ 23.80931335368578, 53.7177261407922],
                [ 23.807510909227773, 53.71508490010274],
                [ 23.80605178752367, 53.71549125561928],
                [ 23.80459266581957, 53.71437376850296],
                [ 23.801760253099843, 53.70924310574171],
                [ 23.798155364183827, 53.708989096280796],
                [ 23.796267089037343, 53.708582677953636,],
                [ 23.79506545939867, 53.7067537468992],
                [ 23.800937683456603, 53.69455538968921],
                [ 23.8011272134543, 53.688149923077326],
                [ 23.80259526946877, 53.68474349953087],
                [ 23.80818319853012, 53.68235349670558],
                [ 23.807458104833277, 53.68026245668258],
                [ 23.805703042874672, 53.67705283451615],
                [ 23.79807304591063, 53.675107273376426],
                [ 23.784186342998208, 53.66348633079541],
                [ 23.781818820962393, 53.656921815951954]
              ]
            ]
          }
        }
      });
      map.addLayer({
        'id': 'maine',
        'type': 'fill',
        'source': 'maine',
        'layout': {},
        'paint': {
          'fill-color': '#5aacb8',
          'fill-opacity': 0.2,
          'fill-outline-color': '#5AACB8'
        }
      });
    });
  }
  // menu
  function fixedMenu () {
    let menu = document.querySelector('.menu')
    let fixedMenu = document.querySelector('.header-fixed')
    let menuHeight = menu.clientHeight
    let menuPosition = menu.getBoundingClientRect().top + pageYOffset + menuHeight
    let isMenuOpen = false
    if(menu) {
      document.addEventListener('scroll', (e) => {
        if((pageYOffset >= menuPosition) && !isMenuOpen) {
          fixedMenu.classList.add('open')
          isMenuOpen = true
        } else if ((pageYOffset < menuPosition) && isMenuOpen){
          isMenuOpen = false
          fixedMenu.classList.remove('open')
        }
      })
    }
  }
  //cart
  function cartVisible () {
    let openButtons = Array.prototype.slice.call(document.querySelectorAll('.header-fixed-cart'))
    let cart = document.querySelector('.cart')
    let authBlock = document.querySelector('.auth')
    let cartCloseButton = document.querySelector('.cart-close')
    openButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.stopPropagation()
        authBlock.classList.remove('visible')
        cart.classList.toggle('visible')
      })
    })
    cartCloseButton.addEventListener('click', (e) => {
      e.stopPropagation()
      cart.classList.remove('visible')
    })
  }
  function setProduct () {
    let productsArray = Array.prototype.slice.call(document.querySelectorAll('.dishes-card'))
    productsArray.forEach((product) => {
      let cartButton = product.querySelector('.dishes-card-button')
      cartButton.addEventListener('click', (e) => {
        addToCart(product)
      })
    })


  }
  function addToCart (product) {
    let cart = []
    if(localStorage.getItem('cart') !== null) {
      cart = JSON.parse(localStorage.getItem('cart'))
    } else {
      localStorage.setItem('cart', JSON.stringify(cart))
      cart = JSON.parse(localStorage.getItem('cart'))
    }
    let productData = {
      id: product.dataset.id,
      src: product.dataset.src,
      title: product.dataset.title,
      price: product.dataset.price,
      count: 1
    }

    cart.push(productData)
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  // Phone mask
  function addMask (selector) {
  console.log(selector)
  $(selector).mask("+375 (99) 999-99-99")
}
  // auth block
  function authVisible () {
    let openButton = document.querySelector('.header-menu-sign')
    let authBlock = document.querySelector('.auth')
    let cartBlock = document.querySelector('.cart')
    let closeButton = document.querySelector('.auth-close')
    openButton.addEventListener('click', (e) => {
      e.stopPropagation()
      cartBlock.classList.remove('visible')
      authBlock.classList.toggle('visible')
    })
    closeButton.addEventListener('click', (e) => {
      e.stopPropagation()
      authBlock.classList.remove('visible')
    })
  }

  function loginRegistrationChanging () {
    let loginBlock = document.querySelector('.login')
    let regBlock = document.querySelector('.reg')
    let loginTrigger = document.querySelector('.reg-cancel')
    let regTrigger = document.querySelector('.login-registration')
    let nextStepButton = document.querySelector('.reg-next')
    let prevStepButton = document.querySelector('.reg-back')
    let firstStepBlock = document.querySelector('.reg-first')
    let secondStepBlock = document.querySelector('.reg-second')

    loginTrigger.addEventListener('click', (e) => {
      e.stopPropagation()
      loginBlock.classList.add('active')
      regBlock.classList.remove('active')

    })
    regTrigger.addEventListener('click', (e) => {
      e.stopPropagation()
      loginBlock.classList.remove('active')
      regBlock.classList.add('active')
      firstStepBlock.classList.add('active')
    })
    nextStepButton.addEventListener('click', (e) => {
      e.stopPropagation()
      firstStepBlock.classList.remove('active')
      secondStepBlock.classList.add('active')
    })
    prevStepButton.addEventListener('click', (e) => {
      e.stopPropagation()
      firstStepBlock.classList.add('active')
      secondStepBlock.classList.remove('active')
    })

  }

  // changed Header (different size main and other pages)
  function changeHeaderSize (isOrders) {
    let headerTop = document.querySelector('.header-top')
    headerTop.classList.add('changed')
    if(isOrders) {
      headerTop.classList.add('bottom-hidden')
    }
  }

  function changePrivateData(selector) {
    let selectorBlock = document.querySelector(selector)
    let changeButton = selectorBlock.querySelector('.change-button');
    let staticBlock = selectorBlock.querySelector('.private-block-static');
    let dynamicBlock = selectorBlock.querySelector('.private-block-dynamic');
    let submitButton = selectorBlock.querySelector('button');
    let correctButton = selectorBlock.querySelector('.correct-button')
  
    changeButton.addEventListener('click', (e) => {
      e.stopPropagation();
      staticBlock.classList.remove('active');
      dynamicBlock.classList.add('active');
    });
    submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      staticBlock.classList.add('active');
      dynamicBlock.classList.remove('active');
    });
    if(correctButton) {
      correctButton.addEventListener('click', (e) => {
        e.preventDefault()
        staticBlock.classList.remove('active');
        dynamicBlock.classList.add('active');
      })
    }
  }

  function changeButtonShowing () {
    let isValid = false
    let firstFieldValid = false
    let secondFieldValid = false
    // for example
    let newPasswordField = document.querySelector('#private-new-password')
    let repeatPasswordField = document.querySelector('#private-new-password-repeat')
    newPasswordField.addEventListener('input', (e) => {
      firstFieldValid = !!e.target.value; 
      (!!firstFieldValid && !!secondFieldValid) ? (isValid = true) : (isValid = false)
      changedValidation(isValid)
    })
    repeatPasswordField.addEventListener('input', (e) => {
      secondFieldValid = !!e.target.value;
      (!!firstFieldValid && !!secondFieldValid) ? (isValid = true) : (isValid = false)
      changedValidation(isValid)
    })
    function changedValidation (isValid) {
      let button = document.querySelector('.password .button')
      if(isValid) {
        button.classList.add('open')
      } else {
        button.classList.remove('open')
      }
    }
  }

  function jobSpoilers () {
    let spoilers = document.querySelectorAll('.job-item')
    spoilers.forEach((spoiler) => {
      let spoilerButton = spoiler.querySelector('.job-item-top')
      spoilerButton.addEventListener('click', (e) => {
        e.stopPropagation()
        let spoilerText = spoiler.querySelector('.job-item-bottom')
        let spoilerIcon = spoiler.querySelector('img')
        spoilerText.classList.toggle('open')
        spoilerIcon.classList.toggle('open')
      })
    })
  }

  function mobileMenuOpen () {
    let headerMobile = document.querySelector('.header-mobile')
    let hamburgerButton = document.querySelector('.header-mobile-hamburger')
    let headerMobileMenu = document.querySelector('.header-mobile-menu')
    let mainPage = document.querySelector('.slider')
    let body = document.body
    hamburgerButton.addEventListener('click', (e) => {
      let headerMobileGrey = document.querySelector('.header-mobile.grey')
      headerMobile.classList.toggle('open')
      headerMobileMenu.classList.toggle('open')
      body.classList.toggle('body-hidden')
      if(headerMobileGrey && mainPage) {
        headerMobileGrey.classList.remove('grey')
      } else {
        headerMobileChanged()
      }
    })
  }

  function notMainMobileHeader () {
    let headerMobile = document.querySelector('.header-mobile')
    headerMobile.classList.add('grey')
  }

  function headerMobileChanged () {
    let headerMobile = document.querySelector('.header-mobile')
    let menuMobile = document.querySelector('.menu-mobile')

    let headerBottom = headerMobile.getBoundingClientRect().bottom
    let menuTop = menuMobile.getBoundingClientRect().top

    if(menuTop <= headerBottom) {
      (headerMobile.classList.add('grey'),
      menuMobile.classList.add('sticky'))
    } else {
      (headerMobile.classList.remove('grey'),
      menuMobile.classList.remove('sticky'))
    }
  }

document.addEventListener('DOMContentLoaded', () => {
  let privatePage = document.querySelector('.private')
  let orderPage = document.querySelector('.orders')
  let promoPage = document.querySelector('.promo')
  let jobPage = document.querySelector('.job')

  if(privatePage) {
    changeHeaderSize()
    cartVisible()
    addMask("#private-phone")
    changePrivateData('.name')
    changePrivateData('.address')
    changeButtonShowing ()
  } else if(orderPage) {
    changeHeaderSize(true)
    changePrivateData('.name')
    changePrivateData('.address')
  } else if (promoPage) {
    changeHeaderSize()
    cartVisible()
  } else if (jobPage) {
    changeHeaderSize()
    cartVisible()
    jobSpoilers()
    mobileMenuOpen()
    notMainMobileHeader()
  }
  else {
    initSlider()
    fixedMenu()
    initMap()
    setProduct()
    cartVisible();
    addMask("#phone-reg")
    authVisible()
    loginRegistrationChanging()
    mobileMenuOpen()
    window.addEventListener('scroll', headerMobileChanged )
  }
})





