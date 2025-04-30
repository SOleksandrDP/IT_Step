// Ініціалізація слайдера на головній сторінці
function initWelcomeSlider() {
  // Масив зображень для слайдера
  const images = ["/static/img/Kyiv.jpg", "/static/img/hark.jpg", "/static/img/Crimea.jpg", "/static/img/lviv.jpg"]

  // Індекс поточного зображення
  let currentImage = 0

  // Отримання елементів DOM
  const slider = document.querySelector(".background-slider")
  const sliderControls = document.querySelector(".slider-controls")

  // Очищення існуючого вмісту
  if (slider) {
    slider.innerHTML = ""
  }

  if (sliderControls) {
    sliderControls.innerHTML = ""
  }

  // Створення елемента зображення для слайдера
  function createImageElement(src, index) {
    const img = document.createElement("img")
    img.src = src
    img.alt = `Пейзаж України ${index + 1}`
    img.className = index === 0 ? "active" : ""
    return img
  }

  // Створення точки керування для слайдера
  function createDotElement(index) {
    const dot = document.createElement("div")
    dot.className = index === 0 ? "slider-dot active" : "slider-dot"
    dot.addEventListener("click", () => {
      goToSlide(index)
    })
    return dot
  }

  // Перехід до конкретного слайду
  function goToSlide(index) {
    const imgs = slider.querySelectorAll("img")
    const dots = sliderControls.querySelectorAll(".slider-dot")

    // Видалення активного класу з поточного зображення та точки
    imgs[currentImage].classList.remove("active")
    dots[currentImage].classList.remove("active")

    // Оновлення індексу поточного зображення
    currentImage = index

    // Додавання активного класу до нового зображення та точки
    imgs[currentImage].classList.add("active")
    dots[currentImage].classList.add("active")
  }

  // Створення та додавання зображень
  images.forEach((src, index) => {
    slider.appendChild(createImageElement(src, index))
  })

  // Створення та додавання точок керування
  images.forEach((_, index) => {
    sliderControls.appendChild(createDotElement(index))
  })

  // Налаштування автоматичного перегортання слайдів
  let slideInterval = setInterval(() => {
    const nextSlide = (currentImage + 1) % images.length
    goToSlide(nextSlide)
  }, 5000)

  // Пауза автоматичного перегортання при наведенні на елементи керування
  sliderControls.addEventListener("mouseenter", () => {
    clearInterval(slideInterval)
  })

  // Відновлення автоматичного перегортання при виході з елементів керування
  sliderControls.addEventListener("mouseleave", () => {
    slideInterval = setInterval(() => {
      const nextSlide = (currentImage + 1) % images.length
      goToSlide(nextSlide)
    }, 5000)
  })
}

// Масив популярних напрямків
const popularDestinations = [
  {
    id: 1,
    name: "Київ",
    image: "/static/img/k.icon.jpg",
    description: "Вібруюча столиця з золотими куполами та багатою історією",
  },
  {
    id: 2,
    name: "Львів",
    image: "/static/img/l.icon.jpg",
    description: "Чарівне середньовічне місто з бруківкою та кавовою культурою",
  },
  {
    id: 3,
    name: "Одеса",
    image: "/static/img/o.icon.jpg",
    description: "Перлина біля моря з прекрасними пляжами та архітектурою 19-го століття",
  },
  {
    id: 4,
    name: "Карпатські гори",
    image: "/static/img/Karp.icon.jpg",
    description: "Захоплюючі гірські хребти з туристичними стежками та гірськолижними курортами",
  },
  {
    id: 5,
    name: "Харків",
    image: "/static/img/Harkiv.jpg",
    description: "Науковий та культурний центр із численними парками та визначними пам'ятками.",
  },
  {
    id: 6,
    name: "Дніпро",
    image: "/static/img/Dnipro.jpg",
    description: "Місто на Дніпрі, відоме своєю промисловістю та сучасною інфраструктурою.",
  },
  {
    id: 7,
    name: "Чернівці",
    image: "/static/img/Chernivtsi.jpg",
    description: "Місто з європейською архітектурою, відоме своїм університетом та культурною спадщиною.",
  },
  {
    id: 8,
    name: "Ужгород",
    image: "/static/img/Uzgorod.jpg",
    description: "Мальовниче прикордонне місто з унікальною історією та атмосферою.",
  },
  {
    id: 9,
    name: "Полтава",
    image: "/static/img/Poltava.jpg",
    description: "Історичне місто, відоме своїм літературним надбанням і українськими традиціями.",
  },
  {
    id: 10,
    name: "Запоріжжя",
    image: "/static/img/Zaporizhya.jpg",
    description: "Місто з козацькою спадщиною та найбільшим островом на Дніпрі – Хортицею.",
  },
  {
    id: 11,
    name: "Івано-Франківськ",
    image: "/static/img/Ivano-Frankivsk.jpg",
    description: "Затишне місто з історичною архітектурою та унікальною атмосферою.",
  },
  {
    id: 12,
    name: "Луцьк",
    image: "/static/img/Lutsk.jpg",
    description: "Старовинне місто з потужною фортецею та багатою історією.",
  },
  {
    id: 13,
    name: "Миколаїв",
    image: "/static/img/Mykolaiv.jpg",
    description: "Важливий суднобудівний центр України, розташований на Південному Бузі.",
  }
]

// Масив водіїв (тестові дані)
const drivers = [
  {
    id: 101,
    name: "Олександр П.",
    rating: 4.8,
    trips: 124,
    from: "Київ",
    to: "Львів",
    price: 350,
    date: "2023-06-15",
    time: "08:00",
    seats: 3,
  },
  {
    id: 102,
    name: "Наталія К.",
    rating: 4.9,
    trips: 87,
    from: "Київ",
    to: "Одеса",
    price: 400,
    date: "2023-06-16",
    time: "09:30",
    seats: 2,
  },
  {
    id: 103,
    name: "Тарас М.",
    rating: 4.7,
    trips: 56,
    from: "Львів",
    to: "Карпатські гори",
    price: 300,
    date: "2023-06-17",
    time: "10:00",
    seats: 4,
  },
]

// Ключі для локального сховища
const AUTH_KEY = "travelUkraineUsers" // Ключ для збереження користувачів
const SESSION_KEY = "travelUkraineCurrentUser" // Ключ для поточної сесії
const TRIPS_KEY = "travelUkraineTrips" // Ключ для збереження поїздок
const BOOKED_TRIPS_KEY = "travelUkraineBookedTrips" // Ключ для збереження заброньованих поїздок

// Отримання списку користувачів з локального сховища
function getUsers() {
  return JSON.parse(localStorage.getItem(AUTH_KEY)) || []
}

// Збереження списку користувачів в локальне сховище
function saveUsers(users) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(users))
}

// Отримання даних поточного користувача
function getCurrentUser() {
  return JSON.parse(localStorage.getItem(SESSION_KEY)) || null
}

// Встановлення даних поточного користувача (логін)
function setCurrentUser(user) {
  // Видалення пароля перед збереженням в сесію
  const sessionUser = { ...user }
  delete sessionUser.password
  localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser))
}

// Оновлення даних користувача
function updateUser(userData) {
  // Отримання всіх користувачів
  const users = getUsers()

  // Знаходження індексу поточного користувача
  const currentUser = getCurrentUser()
  const userIndex = users.findIndex((user) => user.id === currentUser.id)

  if (userIndex === -1) {
    throw new Error("Користувача не знайдено")
  }

  // Оновлення даних користувача, зберігаючи пароль
  const updatedUser = {
    ...users[userIndex],
    fullName: userData.fullName,
    email: userData.email,
    phone: userData.phone,
  }

  // Оновлення користувача в масиві
  users[userIndex] = updatedUser

  // Збереження оновленого масиву користувачів
  saveUsers(users)

  // Оновлення сесії
  setCurrentUser(updatedUser)

  return updatedUser
}

// Очищення даних поточного користувача (вихід)
function clearCurrentUser() {
  localStorage.removeItem(SESSION_KEY)
}

// Реєстрація нового користувача
function registerUser(userData) {
  const users = getUsers()

  // Перевірка чи email вже зареєстрований
  if (users.some((user) => user.email === userData.email)) {
    throw new Error("Ця електронна адреса вже зареєстрована")
  }

  // Додавання ID користувача та дати реєстрації
  const newUser = {
    ...userData,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  }

  // Додавання користувача до масиву та збереження
  users.push(newUser)
  saveUsers(users)

  return newUser
}

// Вхід користувача
function loginUser(email, password) {
  const users = getUsers()
  const user = users.find((u) => u.email === email && u.password === password)

  if (!user) {
    throw new Error("Невірна електронна адреса або пароль")
  }

  setCurrentUser(user)
  return user
}

// Вихід користувача
function logoutUser() {
  clearCurrentUser()
}

// Перевірка співпадіння паролів
function doPasswordsMatch(password, confirmPassword) {
  return password === confirmPassword
}

// Отримання списку поїздок з локального сховища
function getTrips() {
  return JSON.parse(localStorage.getItem(TRIPS_KEY)) || []
}

// Збереження списку поїздок в локальне сховище
function saveTrips(trips) {
  localStorage.setItem(TRIPS_KEY, JSON.stringify(trips))
}

// Отримання списку заброньованих поїздок з локального сховища
function getBookedTrips() {
  return JSON.parse(localStorage.getItem(BOOKED_TRIPS_KEY)) || []
}

// Збереження списку заброньованих поїздок в локальне сховище
function saveBookedTrips(trips) {
  localStorage.setItem(BOOKED_TRIPS_KEY, JSON.stringify(trips))
}

// Додавання нової поїздки
function addTrip(tripData) {
  const trips = getTrips()
  const currentUser = getCurrentUser()

  if (!currentUser) {
    throw new Error("Ви повинні увійти, щоб запропонувати поїздку")
  }

  // Створення нової поїздки
  const newTrip = {
    ...tripData,
    id: Date.now().toString(),
    driverId: currentUser.id,
    driverName: currentUser.fullName,
    rating: 5.0, // Початковий рейтинг
    trips: 0, // Початкова кількість поїздок
    createdAt: new Date().toISOString(),
  }

  // Додавання поїздки до масиву та збереження
  trips.push(newTrip)
  saveTrips(trips)

  return newTrip
}

// Бронювання поїздки
function bookTrip(tripId) {
  const trips = getTrips()
  const bookedTrips = getBookedTrips()
  const currentUser = getCurrentUser()

  if (!currentUser) {
    throw new Error("Ви повинні увійти, щоб забронювати поїздку")
  }

  // Знаходження поїздки
  const trip = trips.find((t) => t.id === tripId)

  if (!trip) {
    throw new Error("Поїздку не знайдено")
  }

  // Перевірка наявності вільних місць
  if (trip.seats <= 0) {
    throw new Error("Немає вільних місць")
  }

  // Зменшення кількості вільних місць
  const tripIndex = trips.findIndex((t) => t.id === tripId)
  trips[tripIndex] = {
    ...trip,
    seats: trip.seats - 1,
  }

  // Створення запису про бронювання
  const booking = {
    id: Date.now().toString(),
    tripId: trip.id,
    userId: currentUser.id,
    userName: currentUser.fullName,
    tripDetails: trip,
    status: "підтверджено",
    bookedAt: new Date().toISOString(),
  }

  // Додавання бронювання до масиву та збереження
  bookedTrips.push(booking)
  saveBookedTrips(bookedTrips)
  saveTrips(trips)

  return booking
}

// Отримання заброньованих поїздок поточного користувача
function getUserBookedTrips() {
  const bookedTrips = getBookedTrips()
  const currentUser = getCurrentUser()

  if (!currentUser) {
    return []
  }

  return bookedTrips.filter((booking) => booking.userId === currentUser.id)
}

// Отримання поїздок, створених поточним користувачем
function getUserCreatedTrips() {
  const trips = getTrips()
  const currentUser = getCurrentUser()

  if (!currentUser) {
    return []
  }

  return trips.filter((trip) => trip.driverId === currentUser.id)
}

// Відображення поїздок користувача
function showUserTrips() {
  const profileContent = document.getElementById("profileContent")

  // Отримання заброньованих поїздок користувача
  const bookedTrips = getUserBookedTrips()

  // Отримання поїздок, створених користувачем
  const createdTrips = getUserCreatedTrips()

  // Відображення списку поїздок
  profileContent.innerHTML = `
    <div class="profile-section">
      <h3>Мої поїздки</h3>

      ${
        bookedTrips.length === 0 && createdTrips.length === 0
          ? "<p>У вас ще немає заброньованих або створених поїздок.</p>"
          : `
          ${
            createdTrips.length > 0
              ? `
            <h4 class="trip-section-title">Поїздки, які ви пропонуєте (${createdTrips.length})</h4>
            <div class="trips-list">
              ${createdTrips
                .map(
                  (trip) => `
                <div class="trip-card trip-created">
                  <h4>${trip.from} → ${trip.to}</h4>
                  <p>Дата: ${trip.date} о ${trip.time}</p>
                  <p>Ціна: ${trip.price} грн</p>
                  <p>Вільних місць: ${trip.seats}</p>
                  <p>Створено: ${new Date(trip.createdAt).toLocaleString()}</p>
                </div>
              `,
                )
                .join("")}
            </div>
          `
              : ""
          }

          ${
            bookedTrips.length > 0
              ? `
            <h4 class="trip-section-title">Заброньовані поїздки (${bookedTrips.length})</h4>
            <div class="trips-list">
              ${bookedTrips
                .map(
                  (booking) => `
                <div class="trip-card trip-booked">
                  <h4>${booking.tripDetails.from} → ${booking.tripDetails.to}</h4>
                  <p>Дата: ${booking.tripDetails.date} о ${booking.tripDetails.time}</p>
                  <p>Ціна: ${booking.tripDetails.price} грн</p>
                  <p>Водій: ${booking.tripDetails.name || booking.tripDetails.driverName}</p>
                  <p>Статус: <span class="status-${booking.status === "підтверджено" ? "confirmed" : "pending"}">${booking.status}</span></p>
                  <p>Заброньовано: ${new Date(booking.bookedAt).toLocaleString()}</p>
                </div>
              `,
                )
                .join("")}
            </div>
          `
              : ""
          }
        `
      }
      <button type="button" id="closeTrips" class="btn">Закрити</button>
    </div>
  `

  // Показ вмісту
  profileContent.classList.remove("hidden")

  // Обробник кліку по кнопці "Закрити"
  document.getElementById("closeTrips").addEventListener("click", () => {
    profileContent.classList.add("hidden")
  })
}

// Ініціалізація сторінки напрямків
function initDestinationsPage() {
  // Отримання елементів DOM
  const destinationsGrid = document.querySelector(".destinations-grid")
  const availableTrips = document.getElementById("availableTrips")
  const tripsList = document.getElementById("tripsList")
  const searchBtn = document.getElementById("searchBtn")
  const filterBtn = document.getElementById("filterBtn")
  const searchFilterPanel = document.getElementById("searchFilterPanel")
  const searchFilterForm = document.getElementById("searchFilterForm")
  const backToDestinations = document.getElementById("backToDestinations")
  const priceRange = document.getElementById("priceRange")
  const priceRangeValue = document.getElementById("priceRangeValue")

  // Оновлення посилання профілю
  updateProfileLink()

  let currentDestination = null

  // Створення картки напрямку
  function createDestinationCard(destination) {
    const card = document.createElement("div")
    card.className = "destination-card"
    card.innerHTML = `
    <img src="${destination.image}" alt="${destination.name}">
    <div class="content">
      <h3>${destination.name}</h3>
      <p>${destination.description}</p>
    </div>
  `
    card.addEventListener("click", () => showAvailableTrips(destination))
    return card
  }

  // Показ доступних поїздок для вибраного напрямку
  function showAvailableTrips(destination) {
    currentDestination = destination
    document.getElementById("popularDestinations").classList.add("hidden")
    availableTrips.classList.remove("hidden")
    renderFilteredTrips()
  }

  // Створення картки поїздки
  function createTripCard(driver) {
    const card = document.createElement("div")
    card.className = "trip-card"
    card.innerHTML = `
      <h3>${driver.from} → ${driver.to}</h3>
      <p>Дата: ${driver.date} о ${driver.time}</p>
      <p>Ціна: ${driver.price} грн</p>
      <p>Водій: ${driver.name} (Рейтинг: ${driver.rating}, ${driver.trips} поїздок)</p>
      <p>Вільних місць: ${driver.seats}</p>
      <a href="route-details.html?id=${driver.id}" class="btn">Деталі</a>
    `
    return card
  }

  // Відображення відфільтрованих поїздок
  function renderFilteredTrips() {
    const from = document.getElementById("fromLocation").value.toLowerCase()
    const to = document.getElementById("toLocation").value.toLowerCase()
    const maxPrice = Number.parseInt(priceRange.value)
    


    // Об'єднання масиву водіїв та поїздок з локального сховища
    const allTrips = [...drivers, ...getTrips()]

    const filteredDrivers = allTrips.filter((driver) => {
      const matchesDestination = !currentDestination || driver.to === currentDestination.name
      const matchesFrom = !from || driver.from.toLowerCase().includes(from)
      const matchesTo = !to || driver.to.toLowerCase().includes(to)
      const matchesPrice = driver.price <= maxPrice

      return matchesDestination && matchesFrom && matchesTo && matchesPrice
    })

    

    tripsList.innerHTML = ""
    if (filteredDrivers.length === 0) {
      tripsList.innerHTML = "<p>Не знайдено поїздок за вашими критеріями.</p>"
    } else {
      filteredDrivers.forEach((driver) => {
        const tripCard = createTripCard(driver)
        tripsList.appendChild(tripCard)
      })
    }
  }

  // Додавання карток напрямків
  popularDestinations.forEach((destination) => {
    const card = createDestinationCard(destination)
    destinationsGrid.appendChild(card)
  })

  // Додавання обробників подій
  searchBtn.addEventListener("click", () => searchFilterPanel.classList.toggle("hidden"))
  filterBtn.addEventListener("click", () => searchFilterPanel.classList.toggle("hidden"))

  priceRange.addEventListener("input", () => {
    priceRangeValue.textContent = `0 - ${priceRange.value} грн`
    renderFilteredTrips()
  })

  searchFilterForm.addEventListener("submit", (e) => {
    e.preventDefault()
    renderFilteredTrips()
  })

  backToDestinations.addEventListener("click", () => {
    currentDestination = null
    document.getElementById("popularDestinations").classList.remove("hidden")
    availableTrips.classList.add("hidden")
  })
}

// Оновлення посилання на профіль в залежності від статусу авторизації
function updateProfileLink() {
  const profileLinks = document.querySelectorAll(".icon-btn[href='profile.html']")
  const currentUser = getCurrentUser()

  profileLinks.forEach((link) => {
    if (currentUser) {
      link.classList.add("logged-in")
      link.setAttribute("title", `Ви увійшли як ${currentUser.fullName}`)
    } else {
      link.classList.remove("logged-in")
      link.setAttribute("title", "Увійти або Зареєструватися")
    }
  })
}

// Ініціалізація сторінки деталей маршруту
function initRouteDetailsPage() {
  // Отримання параметрів з URL
  const urlParams = new URLSearchParams(window.location.search)
  const driverId = urlParams.get("id")

  // Об'єднання масиву водіїв та поїздок з локального сховища
  const allTrips = [...drivers, ...getTrips()]
  const driver = allTrips.find((d) => d.id.toString() === driverId)

  if (!driver) {
    document.getElementById("routeDetails").innerHTML = "<p>Водія не знайдено</p>"
    return
  }

  // Відображення деталей маршруту
  const routeDetails = document.getElementById("routeDetails")
  routeDetails.innerHTML = `
        <div class="route-summary">
            <h2>${driver.from} → ${driver.to}</h2>
            <p>Дата: ${driver.date} о ${driver.time}</p>
            <p>Ціна: ${driver.price} грн</p>
            <p>Вільних місць: ${driver.seats}</p>
        </div>
        <div class="driver-info">
            <h3>Водій: ${driver.name || driver.driverName}</h3>
            <p>Рейтинг: ${driver.rating} (${driver.trips} поїздок)</p>
            <button id="contactDriver" class="btn">Зв'язатися з водієм</button>
        </div>
        <div class="route-timeline">
            <div class="route-stop">
                <h4>${driver.from}</h4>
                <p>Відправлення о ${driver.time}</p>
            </div>
            <div class="route-stop">
                <h4>${driver.to}</h4>
                <p>Орієнтовне прибуття о ${estimateArrival(driver.time, 6)}</p>
            </div>
        </div>
        <button id="bookTrip" class="btn">Забронювати поїздку</button>
    `

  // Обробник кліку по кнопці "Зв'язатися з водієм"
  document.getElementById("contactDriver").addEventListener("click", () => {
    if (!getCurrentUser()) {
      alert("Будь ласка, увійдіть щоб зв'язатися з водієм")
      window.location.href = "profile.html"
      return
    }

    alert(`Зв'яжіться з ${driver.name || driver.driverName} за номером +380991234567`)
  })

  // Обробник кліку по кнопці "Забронювати поїздку"
  document.getElementById("bookTrip").addEventListener("click", () => {
    if (!getCurrentUser()) {
      alert("Будь ласка, увійдіть щоб забронювати поїздку")
      window.location.href = "profile.html"
      return
    }

    try {
      // Бронювання поїздки
      const booking = bookTrip(driver.id.toString())
      alert("Поїздку успішно заброньовано! Перейдіть до розділу 'Мої поїздки' у профілі, щоб переглянути деталі.")
    } catch (error) {
      alert(error.message)
    }
  })
}

// Розрахунок орієнтовного часу прибуття
function estimateArrival(departureTime, duration) {
  const [hours, minutes] = departureTime.split(":").map(Number)
  const arrivalDate = new Date(2025, 0, 1, hours, minutes)
  arrivalDate.setHours(arrivalDate.getHours() + duration)
  return arrivalDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}

// Ініціалізація сторінки профілю
function initProfilePage() {
  // Отримання елементів DOM
  const authForms = document.getElementById("authForms")
  const userProfile = document.getElementById("userProfile")
  const tabs = document.querySelectorAll(".tab")
  const tabContents = document.querySelectorAll(".tab-content")
  const registerForm = document.getElementById("registerForm")
  const loginForm = document.getElementById("loginForm")
  const errorMessages = document.querySelectorAll(".error-message")

  // Перевірка чи користувач вже увійшов
  const currentUser = getCurrentUser()
  if (currentUser) {
    authForms.classList.add("hidden")
    userProfile.classList.remove("hidden")
    showUserProfile(currentUser)
  }

  // Обробка перемикання вкладок
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabId = tab.getAttribute("data-tab")
      tabs.forEach((t) => t.classList.remove("active"))
      tabContents.forEach((c) => c.classList.remove("active"))
      tab.classList.add("active")
      document.getElementById(`${tabId}Div`).classList.add("active")

      // Очищення повідомлень про помилки при перемиканні вкладок
      errorMessages.forEach((msg) => (msg.textContent = ""))
    })
  })

  // Обробка форми реєстрації
  registerForm.addEventListener("submit", async function (e) {
    e.preventDefault()
    const formData = new FormData(registerForm)
    const userData = Object.fromEntries(formData.entries())
    const registerError = document.getElementById("registerError")

    // Очищення попередньої помилки
    registerError.textContent = ""

    // Перевірка співпадіння паролів
    if (!doPasswordsMatch(userData.password, userData.confirmPassword)) {
      registerError.textContent = "Паролі не співпадають"
      return
    }

    try {
      const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
      
      const response = await fetch("/profile/", {
        method: "POST",
        headers: {
            "X-CSRFToken": csrfToken
        },
        body: formData
      });

      const data = await response.json();

      if (data.success) {
          //window.location.href = data.redirect_url;
      } else {
          registerError.textContent = data.error || "Registration failed.";
          return;
      }

      // Реєстрація користувача
      const newUser = registerUser(userData)

      // Автоматичний вхід
      setCurrentUser(newUser)

      // Показ профілю
      authForms.classList.add("hidden")
      userProfile.classList.remove("hidden")
      showUserProfile(newUser)

      // Очищення форми
      registerForm.reset()
    } catch (error) {
      registerError.textContent = error.message
    }
  })

  // Обробка форми входу
  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault()
    const formData = new FormData(loginForm)
    const loginData = Object.fromEntries(formData.entries())
    const loginError = document.getElementById("loginError")

    // Очищення попередньої помилки
    loginError.textContent = ""

    try {
      const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
      
      const response = await fetch("/profile/login/", {
        method: "POST",
        headers: {
            "X-CSRFToken": csrfToken
        },
        body: formData
      });

      const data = await response.json();

      if (data.success) {
          //window.location.href = data.redirect_url;
          loginError.textContent = "Authorization valid.";
      } else {
          loginError.textContent = data.error || "Authorization failed.";
          return;
      }

      // Спроба входу
      const user = loginUser(loginData.email, loginData.password)

      // Показ профілю
      authForms.classList.add("hidden")
      userProfile.classList.remove("hidden")
      showUserProfile(user)

      // Очищення форми
      loginForm.reset()
    } catch (error) {
      loginError.textContent = error.message
    }
  })
}

// Відображення профілю користувача
function showUserProfile(userData) {
  const userProfile = document.getElementById("userProfile")

  userProfile.innerHTML = `
    <div class="user-info">
      <h2>${userData.fullName || "Користувач"}</h2>
      <p>Email: ${userData.email || "user@example.com"}</p>
      <p>Телефон: ${userData.phone || "+380991234567"}</p>
    </div>
    <div class="user-actions">
      <button id="editProfile" class="btn">Редагувати профіль</button>
      <button id="offerRide" class="btn">Запропонувати поїздку</button>
      <button id="viewTrips" class="btn">Мої поїздки</button>
      <button id="logout" class="btn">Вийти</button>
    </div>
    <div id="profileContent" class="hidden">
      <!-- Тут буде відображатися вміст для редагування профілю, пропонування поїздок та перегляду поїздок -->
    </div>
  `

  // Обробник кліку по кнопці "Вийти"
  document.getElementById("logout").addEventListener("click", () => {
    logoutUser()
    document.getElementById("authForms").classList.remove("hidden")
    userProfile.classList.add("hidden")
  })

  // Обробник кліку по кнопці "Редагувати профіль"
  document.getElementById("editProfile").addEventListener("click", () => {
    showEditProfileForm(userData)
  })

  // Обробник кліку по кнопці "Запропонувати поїздку"
  document.getElementById("offerRide").addEventListener("click", () => {
    showOfferRideForm()
  })

  // Обробник кліку по кнопці "Мої поїздки"
  document.getElementById("viewTrips").addEventListener("click", () => {
    showUserTrips()
  })
}

// Відображення форми редагування профілю
function showEditProfileForm(userData) {
  const profileContent = document.getElementById("profileContent")

  // Відображення форми
  profileContent.innerHTML = `
    <div class="profile-section">
      <h3>Редагування профілю</h3>
      <form id="editProfileForm">
        <div class="form-group">
          <label for="fullName">Повне ім'я</label>
          <input type="text" id="fullName" name="fullName" value="${userData.fullName || ""}" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" value="${userData.email || ""}" required>
        </div>
        <div class="form-group">
          <label for="phone">Телефон</label>
          <input type="tel" id="phone" name="phone" value="${userData.phone || ""}" required>
        </div>
        <p id="editProfileError" class="error-message"></p>
        <div class="form-actions">
          <button type="submit" class="btn">Зберегти зміни</button>
          <button type="button" id="cancelEdit" class="btn btn-secondary">Скасувати</button>
        </div>
      </form>
    </div>
  `

  // Показ вмісту
  profileContent.classList.remove("hidden")

  // Обробник кліку по кнопці "Скасувати"
  document.getElementById("cancelEdit").addEventListener("click", () => {
    profileContent.classList.add("hidden")
  })

  // Обробник відправки форми
  document.getElementById("editProfileForm").addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const userData = Object.fromEntries(formData.entries())
    const errorElement = document.getElementById("editProfileError")

    try {
      // Оновлення даних користувача
      const updatedUser = updateUser(userData)

      // Оновлення відображення профілю
      showUserProfile(updatedUser)

      // Приховання форми
      profileContent.classList.add("hidden")

      // Повідомлення про успішне оновлення
      alert("Профіль успішно оновлено!")
    } catch (error) {
      // Відображення помилки
      errorElement.textContent = error.message
    }
  })
}

// Відображення форми пропонування поїздки
function showOfferRideForm() {
  const profileContent = document.getElementById("profileContent")

  // Відображення форми
  profileContent.innerHTML = `
    <div class="profile-section">
      <h3>Запропонувати поїздку</h3>
      <form id="offerRideForm">
        <div class="form-group">
          <label for="from">Звідки</label>
          <input type="text" id="from" name="from" required>
        </div>
        <div class="form-group">
          <label for="to">Куди</label>
          <input type="text" id="to" name="to" required>
        </div>
        <div class="form-group">
          <label for="date">Дата</label>
          <input type="date" id="date" name="date" required>
        </div>
        <div class="form-group">
          <label for="time">Час</label>
          <input type="time" id="time" name="time" required>
        </div>
        <div class="form-group">
          <label for="price">Ціна (грн)</label>
          <input type="number" id="price" name="price" min="0" required>
        </div>
        <div class="form-group">
          <label for="seats">Кількість місць</label>
          <input type="number" id="seats" name="seats" min="1" max="8" required>
        </div>
        <div class="form-group">
          <label for="description">Опис поїздки</label>
          <textarea id="description" name="description" rows="3"></textarea>
        </div>
        <p id="offerRideError" class="error-message"></p>
        <div class="form-actions">
          <button type="submit" class="btn">Запропонувати</button>
          <button type="button" id="cancelOffer" class="btn btn-secondary">Скасувати</button>
        </div>
      </form>
    </div>
  `

  // Показ вмісту
  profileContent.classList.remove("hidden")

  // Обробник кліку по кнопці "Скасувати"
  document.getElementById("cancelOffer").addEventListener("click", () => {
    profileContent.classList.add("hidden")
  })

  // Обробник відправки форми
  document.getElementById("offerRideForm").addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const tripData = Object.fromEntries(formData.entries())
    const errorElement = document.getElementById("offerRideError")

    try {
      // Додавання нової поїздки
      addTrip(tripData)

      // Приховання форми
      profileContent.classList.add("hidden")

      // Повідомлення про успішне додавання
      alert("Поїздку успішно запропоновано!")
    } catch (error) {
      // Відображення помилки
      errorElement.textContent = error.message
    }
  })
}

// Відображення поїздок користувача
function showUserTrips() {
  const profileContent = document.getElementById("profileContent")

  // Отримання заброньованих поїздок користувача
  const bookedTrips = getUserBookedTrips()

  // Отримання поїздок, створених користувачем
  const createdTrips = getUserCreatedTrips()

  // Відображення списку поїздок
  profileContent.innerHTML = `
    <div class="profile-section">
      <h3>Мої поїздки</h3>

      ${
        bookedTrips.length === 0 && createdTrips.length === 0
          ? "<p>У вас ще немає заброньованих або створених поїздок.</p>"
          : `
          ${
            createdTrips.length > 0
              ? `
            <h4 class="trip-section-title">Поїздки, які ви пропонуєте (${createdTrips.length})</h4>
            <div class="trips-list">
              ${createdTrips
                .map(
                  (trip) => `
                <div class="trip-card trip-created">
                  <h4>${trip.from} → ${trip.to}</h4>
                  <p>Дата: ${trip.date} о ${trip.time}</p>
                  <p>Ціна: ${trip.price} грн</p>
                  <p>Вільних місць: ${trip.seats}</p>
                  <p>Створено: ${new Date(trip.createdAt).toLocaleString()}</p>
                </div>
              `,
                )
                .join("")}
            </div>
          `
              : ""
          }

          ${
            bookedTrips.length > 0
              ? `
            <h4 class="trip-section-title">Заброньовані поїздки (${bookedTrips.length})</h4>
            <div class="trips-list">
              ${bookedTrips
                .map(
                  (booking) => `
                <div class="trip-card trip-booked">
                  <h4>${booking.tripDetails.from} → ${booking.tripDetails.to}</h4>
                  <p>Дата: ${booking.tripDetails.date} о ${booking.tripDetails.time}</p>
                  <p>Ціна: ${booking.tripDetails.price} грн</p>
                  <p>Водій: ${booking.tripDetails.name || booking.tripDetails.driverName}</p>
                  <p>Статус: <span class="status-${booking.status === "підтверджено" ? "confirmed" : "pending"}">${booking.status}</span></p>
                  <p>Заброньовано: ${new Date(booking.bookedAt).toLocaleString()}</p>
                </div>
              `,
                )
                .join("")}
            </div>
          `
              : ""
          }
        `
      }
      <button type="button" id="closeTrips" class="btn">Закрити</button>
    </div>
  `

  // Показ вмісту
  profileContent.classList.remove("hidden")

  // Обробник кліку по кнопці "Закрити"
  document.getElementById("closeTrips").addEventListener("click", () => {
    profileContent.classList.add("hidden")
  })
}

// Ініціалізація сторінок при завантаженні
document.addEventListener("DOMContentLoaded", () => {
  // Перевірка статусу авторизації на кожній сторінці
  updateProfileLink()

  console.log(window.location.pathname)

  // Ініціалізація відповідної сторінки в залежності від URL
  if (
    window.location.pathname.includes("index") ||
    window.location.pathname === "/" ||
    window.location.pathname === ""
  ) {
    initWelcomeSlider()
  } else if (window.location.pathname.includes("destinations")) {
    initDestinationsPage()
  } else if (window.location.pathname.includes("route-details")) {
    initRouteDetailsPage()
  } else if (window.location.pathname.includes("profile")) {
    initProfilePage()
  }
})





const cities = [
  'Авдіївка', 'Алчевськ', 'Антрацит', 'Апостолове', 'Армянськ', 'Балаклія', 'Бар', 'Бахмач', 'Бахмут', 'Бердичів', 
  'Бердянськ', 'Берегове', 'Біла Церква', 'Білгород-Дністровський', 'Білопілля', 'Бориспіль', 'Борзна', 'Боярка', 
  'Бровари', 'Броди', 'Бурштин', 'Буськ', 'Вараш', 'Васильків', 'Ватутіне', 'Великий Бурлук', 'Верхньодніпровськ', 
  'Вижниця', 'Вилкове', 'Винники', 'Вінниця', 'Вовчанськ', 'Вознесенськ', 'Володимир', 'Гадяч', 'Генічеськ', 
  'Глобине', 'Глухів', 'Гола Пристань', 'Горішні Плавні', 'Горлівка', 'Городенка', 'Городище', 'Городок', 'Гребінка', 
  'Дебальцеве', 'Дергачі', 'Джанкой', 'Дніпро', 'Добропілля', 'Докучаєвськ', 'Долина', 'Дрогобич', 'Дружківка', 
  'Дубно', 'Дунаївці', 'Євпаторія', 'Жашків', 'Жидачів', 'Житомир', 'Жовква', 'Жовті Води', 'Залізне', 'Запоріжжя', 
  'Заставна', 'Зборів', 'Здолбунів', 'Зміїв', 'Знам’янка', 'Івано-Франківськ', 'Ізмаїл', 'Ізюм', 'Іллінці', 
  'Ірпінь', 'Ічня', 'Кагарлик', 'Калуш', 'Кам’янка-Бузька', 'Кам’янка-Дніпровська', 'Кам’янець-Подільський', 
  'Кам’янське', 'Канів', 'Карлівка', 'Каховка', 'Керч', 'Київ', 'Кіцмань', 'Кобеляки', 'Ковель', 'Коломия', 
  'Конотоп', 'Костопіль', 'Краматорськ', 'Красноград', 'Кременець', 'Кременчук', 'Кривий Ріг', 'Кропивницький', 
  'Ладижин', 'Лисичанськ', 'Лозова', 'Лубни', 'Луганськ', 'Луцьк', 'Львів', 'Марганець', 'Маріуполь', 'Мелітополь', 
  'Миргород', 'Миколаїв', 'Монастириська', 'Мукачево', 'Надвірна', 'Ніжин', 'Нікополь', 'Новгород-Сіверський', 
  'Новий Розділ', 'Новоград-Волинський', 'Новомосковськ', 'Новояворівськ', 'Обухів', 'Одеса', 'Олександрія', 
  'Охтирка', 'Павлоград', 'Первомайськ', 'Перемишляни', 'Перечин', 'Переяслав', 'Підгайці', 'Подільськ', 
  'Покровськ', 'Полонне', 'Полтава', 'Прилуки', 'Радомишль', 'Рахів', 'Рені', 'Рівне', 'Ромни', 'Рубіжне', 
  'Самбір', 'Сарни', 'Севастополь', 'Сєвєродонецьк', 'Сімферополь', 'Славута', 'Слов’янськ', 'Сміла', 
  'Сновськ', 'Старий Самбір', 'Старокостянтинів', 'Стебник', 'Стрий', 'Судак', 'Суми', 'Теребовля', 'Тернопіль', 
  'Тетіїв', 'Токмак', 'Тростянець', 'Трускавець', 'Тульчин', 'Тячів', 'Ужгород', 'Умань', 'Фастів', 'Феодосія', 
  'Харків', 'Херсон', 'Хмельницький', 'Хорол', 'Хуст', 'Черкаси', 'Чернівці', 'Чернігів', 'Чорноморськ', 
  'Шепетівка', 'Шостка', 'Щастя', 'Южне', 'Южноукраїнськ', 'Яворів', 'Ялта', 'Яремче'
];

function renderFilteredTrips() {
    const from = document.getElementById("fromLocation").value.toLowerCase();
    const to = document.getElementById("toLocation").value.toLowerCase();
    const maxPrice = Number.parseInt(priceRange.value);

    // Подсказки для поля "Откуда"
    updateSuggestions("fromLocation", from);

    // Подсказки для поля "Куда"
    updateSuggestions("toLocation", to);

    // ... ваш код для фильтрации поездок ...
}

function updateSuggestions(inputId, inputValue) {
    const suggestionsId = inputId + "Suggestions";
    const suggestions = document.getElementById(suggestionsId);
    if (suggestions) {
        suggestions.remove();
    }

    if (inputValue.length > 0) {
        const filteredCities = cities.filter(city => city.toLowerCase().startsWith(inputValue));

        if (filteredCities.length > 0) {
            const suggestionsList = document.createElement("ul");
            suggestionsList.id = suggestionsId;
            suggestionsList.style.position = "absolute";
            suggestionsList.style.background = "white";
            suggestionsList.style.border = "1px solid #ccc";
            suggestionsList.style.listStyleType = "none";
            suggestionsList.style.padding = "0";
            suggestionsList.style.margin = "0";
            suggestionsList.style.maxHeight = "200px";
            suggestionsList.style.overflowY = "auto";
            suggestionsList.style.display = "block"; // Убедитесь, что список отображается как блочный элемент
            suggestionsList.style.boxSizing = "border-box"; // Учитывайте границы и отступы при расчете высоты

            const maxSuggestions = 4;

            for (let i = 0; i < Math.min(maxSuggestions, filteredCities.length); i++) {
                const city = filteredCities[i];
                const suggestionItem = document.createElement("li");
                suggestionItem.textContent = city;
                suggestionItem.style.padding = "5px";
                suggestionItem.style.cursor = "pointer";

                suggestionItem.addEventListener("click", function() {
                    document.getElementById(inputId).value = city;
                    suggestionsList.remove();
                });
                suggestionsList.appendChild(suggestionItem);
            }

            const inputElement = document.getElementById(inputId);
            const inputRect = inputElement.getBoundingClientRect();

            suggestionsList.style.left = inputRect.left + "px";
            suggestionsList.style.top = inputRect.bottom + "px";

            document.body.appendChild(suggestionsList);
        }
    }
}

  // Добавляем обработчики событий для полей ввода
  if(document.getElementById("fromLocation") != null)
  {
    document.getElementById("fromLocation").addEventListener("input", renderFilteredTrips);
  }

  if(document.getElementById("toLocation") != null)
  {
    document.getElementById("toLocation").addEventListener("input", renderFilteredTrips);
  }