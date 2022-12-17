// $('.home_opener').click(function () {
//     if (lcTab.classList.contains("open") && shifterTab.classList.contains("open")) {
//         homeTab.classList.add("open");
//     }
//     else if (shifterTab.classList.contains("")) {
//         homeTab.classList.add("open");
//     }
//     homeTabIn.classList.remove("off_on");
//     homeTab.classList.add("driver");
//     calTab.classList.remove("driver");
//     lcTab.classList.remove("driver");
//     lcTabIn.classList.remove("new_lc");
//     lcTab.classList.remove("open");
//     return false;
// });


function openStudentdata(value) {
    if (value == 1) {
      document.getElementById("dashboard_flex").style.display = "block";
      document.getElementById("container_diaplay_property").style.display =
        "none";
      document.getElementById("student_tables").style.display = "none";
    } else if (value == 2) {
      document.getElementById("container_diaplay_property").style.display =
        "block";
      document.getElementById("dashboard_flex").style.display = "none";
      document.getElementById("student_tables").style.display = "none";
    } else if (value == 3) {
      document.getElementById("student_tables").style.display = "flex";
      document.getElementById("container_diaplay_property").style.display =
        "none";
      document.getElementById("dashboard_flex").style.display = "none";
    }
  }


    
  let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
  let searchBtn = document.querySelector(".bx-search");

  closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
  });

  searchBtn.addEventListener("click", () => {
    // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
  });

  // following are the code to change sidebar button(optional)
  function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
    }
  }
