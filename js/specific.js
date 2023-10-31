"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } //else {
    //formBtn.setAttribute("disabled", "");
    //}
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

/*
function change() {
  var schoolCbs = document.querySelectorAll(".schools input[type='checkbox']");
  var yearCbs = document.querySelectorAll(".years input[type='checkbox']");
  var levelCbs = document.querySelectorAll(".levels input[type='checkbox']");
  var subjectCbs = document.querySelectorAll(
    ".subjects input[type='checkbox']"
  );
  var filters = {
    schools: getClassOfCheckedCheckboxes(schoolCbs),
    years: getClassOfCheckedCheckboxes(yearCbs),
    levels: getClassOfCheckedCheckboxes(levelCbs),
    subjects: getClassOfCheckedCheckboxes(subjectCbs),
  };

  filterResults(filters);
}

function getClassOfCheckedCheckboxes(checkboxes) {
  var classes = [];

  if (checkboxes && checkboxes.length > 0) {
    for (var i = 0; i < checkboxes.length; i++) {
      var cb = checkboxes[i];

      if (cb.checked) {
        classes.push(cb.getAttribute("rel"));
      }
    }
  }

  return classes;
}

function filterResults(filters) {
  var rElems = document.querySelectorAll(".result div");
  var hiddenElems = [];

  if (!rElems || rElems.length <= 0) {
    return;
  }

  for (var i = 0; i < rElems.length; i++) {
    var el = rElems[i];

    if (filters.schools.length > 0) {
      var isHidden = true;

      for (var j = 0; j < filters.schools.length; j++) {
        var filter = filters.schools[j];

        if (el.classList.contains(filter)) {
          isHidden = false;
          break;
        }
      }

      if (isHidden) {
        hiddenElems.push(el);
      }
    }

    if (filters.years.length > 0) {
      var isHidden = true;

      for (var j = 0; j < filters.years.length; j++) {
        var filter = filters.years[j];

        if (el.classList.contains(filter)) {
          isHidden = false;
          break;
        }
      }

      if (isHidden) {
        hiddenElems.push(el);
      }
    }

    if (filters.levels.length > 0) {
      var isHidden = true;

      for (var j = 0; j < filters.levels.length; j++) {
        var filter = filters.levels[j];

        if (el.classList.contains(filter)) {
          isHidden = false;
          break;
        }
      }

      if (isHidden) {
        hiddenElems.push(el);
      }
    }

    if (filters.subjects.length > 0) {
      var isHidden = true;

      for (var j = 0; j < filters.subjects.length; j++) {
        var filter = filters.subjects[j];

        if (el.classList.contains(filter)) {
          isHidden = false;
          break;
        }
      }

      if (isHidden) {
        hiddenElems.push(el);
      }
    }
  }

  for (var i = 0; i < rElems.length; i++) {
    rElems[i].style.display = "block";
  }

  if (hiddenElems.length <= 0) {
    return;
  }

  for (var i = 0; i < hiddenElems.length; i++) {
    hiddenElems[i].style.display = "none";
  }
}

var checkList1 = document.getElementById("list1");
checkList1.getElementsByClassName("anchor")[0].onclick = function (evt) {
  if (checkList1.classList.contains("visible"))
    checkList1.classList.remove("visible");
  else checkList1.classList.add("visible");
};

var checkList2 = document.getElementById("list2");
checkList2.getElementsByClassName("anchor")[0].onclick = function (evt) {
  if (checkList2.classList.contains("visible"))
    checkList2.classList.remove("visible");
  else checkList2.classList.add("visible");
};

var checkList3 = document.getElementById("list3");
checkList3.getElementsByClassName("anchor")[0].onclick = function (evt) {
  if (checkList3.classList.contains("visible"))
    checkList3.classList.remove("visible");
  else checkList3.classList.add("visible");
};

var checkList4 = document.getElementById("list4");
checkList4.getElementsByClassName("anchor")[0].onclick = function (evt) {
  if (checkList4.classList.contains("visible"))
    checkList4.classList.remove("visible");
  else checkList4.classList.add("visible");
};
*/

// Filter variables

// Select filter items and buttons

// Select filter items and buttons
const itemElements = document.querySelectorAll("[data-filter-item2]");
const filterButtons = document.querySelectorAll("[data-filter-button]");
const selectedCriteriaDisplay = document.querySelector(".selected-criteria");

const selectedCategories = {
  category: [],
  level: [],
  subject: [],
}; // Store selected criteria for each category

const applyFilters = function () {
  for (let i = 0; i < itemElements.length; i++) {
    const itemData = itemElements[i].dataset;
    const isMatching =
      (selectedCategories.category.length === 0 ||
        selectedCategories.category.includes(itemData.category)) &&
      (selectedCategories.level.length === 0 ||
        selectedCategories.level.includes(itemData.level)) &&
      (selectedCategories.subject.length === 0 ||
        selectedCategories.subject.includes(itemData.subject));

    if (isMatching) {
      itemElements[i].classList.add("visible");
    } else {
      itemElements[i].classList.remove("visible");
    }
  }
};

// Add click event listeners to filter buttons
for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    const clickedCriteria = this.innerText.toLowerCase();
    const category = this.dataset.category;

    // Toggle clickedCriteria in the appropriate category array
    const categoryArray = selectedCategories[category];
    if (clickedCriteria === "all") {
      categoryArray.length = 0; // Clear the array
    } else {
      const index = categoryArray.indexOf(clickedCriteria);
      if (index === -1) {
        categoryArray.push(clickedCriteria);
      } else {
        categoryArray.splice(index, 1);
      }
    }

    selectedCriteriaDisplay.innerText = Object.values(selectedCategories)
      .flat()
      .join(", "); // Update displayed criteria

    applyFilters(); // Apply filters based on the selected criteria
  });
}
