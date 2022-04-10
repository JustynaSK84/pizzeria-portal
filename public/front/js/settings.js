
export const select = {
  templateOf: {
    menuProduct: '#template-menu-product',
    cartProduct: '#template-cart-product', // CODE ADDED
    bookingWidget: '#template-booking-widget',
    homeWidget: '#template-home-widget',
  },
  containerOf: {
    menu: '#product-list',
    cart: '#cart',
    pages: '#pages',
    booking: '.booking-wrapper',
    home: '.home-wrapper',
  },
  all: {
    menuProducts: '#product-list > .product',
    menuProductsActive: '#product-list > .product.active',
    formInputs: 'input, select',
  },
  menuProduct: {
    clickable: '.product__header',
    form: '.product__order',
    priceElem: '.product__total-price .price',
    imageWrapper: '.product__images',
    amountWidget: '.widget-amount',
    cartButton: '[href="#add-to-cart"]',
  },
  widgets: {
    amount: {
      input: 'input.amount', // CODE CHANGED
      linkDecrease: 'a[href="#less"]',
      linkIncrease: 'a[href="#more"]',
    },
    datePicker: {
      wrapper: '.date-picker',
      input: `input[name="date"]`,
    },

    hourPicker: {
      wrapper: '.hour-picker',
      input: 'input[type="range"]',
      output: '.output',
    },
    carousel: '.carousel',
  },
  home: {
    order: '.order-online',
    book: '.book-table',
  },

  // CODE ADDED START
  cart: {
    productList: '.cart__order-summary',
    toggleTrigger: '.cart__summary',
    totalNumber: `.cart__total-number`,
    totalPrice: '.cart__total-price strong, .cart__order-total .cart__order-price-sum strong',
    subtotalPrice: '.cart__order-subtotal .cart__order-price-sum strong',
    deliveryFee: '.cart__order-delivery .cart__order-price-sum strong',
    form: '.cart__order',
    formSubmit: '.cart__order [type="submit"]',
    phone: '[name="phone"]',
    address: '[name="address"]',
  },
  cartProduct: {
    amountWidget: '.widget-amount',
    price: '.cart__product-price',
    edit: '[href="#edit"]',
    remove: '[href="#remove"]',
  },

  booking: {
    peopleAmount: '.people-amount',
    hoursAmount: '.hours-amount',
    tables: '.floor-plan .table',
    floorPlan: '.floor-plan',
    form: '.booking-form',
    submit: '.booking-form [type="submit"]',
    phone: '.booking-form [name="phone"]',
    address: '.booking-form [name="address"]',
    starters: '.booking-form [name="starter"]',
  },
  nav: {
    links: '.main-nav a',
  },
  // CODE ADDED END
};

export const classNames = {
  menuProduct: {
    wrapperActive: 'active',
    imageVisible: 'active',
  },
  // CODE ADDED START
  cart: {
    wrapperActive: 'active',
  },

  booking: {
    loading: 'loading',
    table: 'table',
    tableBooked: 'booked',
    tableSelected: 'selected',
  },
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
  // CODE ADDED END
};

export const settings = {
  amountWidget: {
    defaultValue: 1,
    defaultMin: 0,
    defaultMax: 10,
  },
  // CODE ADDED START
  cart: {
    defaultDeliveryFee: 20,
  },
  hours: {
    open: 12,
    close: 24,
  },

  datePicker: {
    maxDaysInFuture: 14,
  },
  booking: {
    tableIdAttribute: 'data-table',
  },
  // CODE ADDED END

  // PARAMETERS NECESSARY FOR API CONNECTION - START
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3333' : ''),
    products: 'products',
    orders: 'orders',
    bookings: 'bookings',
    events: 'events',
    dateStartParamKey: 'date_gte',
    dateEndParamKey: 'date_lte',
    notRepeatParam: 'repeat=false',
    repeatParam: 'repeat_ne=false',
  },
  // PARAMETERS NECESSARY FOR API CONNECTION - END
};

export const templates = {
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
  // CODE ADDED START
  cartProduct: Handlebars.compile(document.querySelector(select.templateOf.cartProduct).innerHTML),

  bookingWidget: Handlebars.compile(document.querySelector(select.templateOf.bookingWidget).innerHTML),

  homeWidget: Handlebars.compile(document.querySelector(select.templateOf.homeWidget).innerHTML),
};
