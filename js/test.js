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

function toggleCheckbox(id) {
  var checkbox = document.getElementById(id);
  checkbox.checked = !checkbox.checked;
  change();
}
