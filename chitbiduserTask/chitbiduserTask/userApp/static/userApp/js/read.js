/*// For read.html page...
// Column Configuration...
$(document).ready(function () {
    // Initial column visibility based on checkbox status
    toggleColumnVisibility("Name", $("#toggleName").prop("checked"));
    toggleColumnVisibility("Date_Of_Birth", $("#toggleDate_Of_Birth").prop("checked"));
    toggleColumnVisibility("Gender", $("#toggleGender").prop("checked"));
    toggleColumnVisibility("E-mail", $("#toggleE-mail").prop("checked"));
    toggleColumnVisibility("Mobile_Number", $("#toggleMobile_Number").prop("checked"));
    toggleColumnVisibility("Language", $("#toggleLanguage").prop("checked"));
    toggleColumnVisibility("Organization", $("#toggleOrganization").prop("checked"));
    toggleColumnVisibility("Agent", $("#toggleAgent").prop("checked"));
    toggleColumnVisibility("Is_Email_Verified", $("#toggleIs_Email_Verified").prop("checked"));
    toggleColumnVisibility("Is_Profile_Created", $("#toggleIs_Profile_Created").prop("checked"));
    toggleColumnVisibility("Uid", $("#toggleUid").prop("checked"));
    toggleColumnVisibility("Url", $("#toggleUrl").prop("checked"));
    toggleColumnVisibility("Is_Started", $("#toggleIs_Started").prop("checked"));
    toggleColumnVisibility("Started_at", $("#toggleStarted_at").prop("checked"));
    toggleColumnVisibility("Timer_Start", $("#toggleTimer_Start").prop("checked"));
    toggleColumnVisibility("Timer_started_at", $("#toggleTimer_started_at").prop("checked"));
    toggleColumnVisibility("Timer_Tick_In_Seconds", $("#toggleTimer_Tick_In_Seconds").prop("checked"));
    toggleColumnVisibility("Updated_at", $("#toggleUpdated_at").prop("checked"));

    // Event listeners for checkbox changes
    $("#toggleName").change(function () {
        toggleColumnVisibility("Name", $(this).prop("checked"));
    });

    $("#toggleDate_Of_Birth").change(function () {
        toggleColumnVisibility("Date_Of_Birth", $(this).prop("checked"));
    });

    $("#toggleGender").change(function () {
        toggleColumnVisibility("Gender", $(this).prop("checked"));
    });


    $("#toggleE-mail").change(function () {
        toggleColumnVisibility("E-mail", $(this).prop("checked"));
    });


    $("#toggleMobile_Number").change(function () {
        toggleColumnVisibility("Mobile_Number", $(this).prop("checked"));
    });

    $("#toggleLanguage").change(function () {
        toggleColumnVisibility("Language", $(this).prop("checked"));
    });

    $("#toggleOrganization").change(function () {
        toggleColumnVisibility("Organization", $(this).prop("checked"));
    });

    $("#toggleAgent").change(function () {
        toggleColumnVisibility("Agent", $(this).prop("checked"));
    });

    $("#toggleIs_Email_Verified").change(function () {
        toggleColumnVisibility("Is_Email_Verified", $(this).prop("checked"));
    });

    $("#toggleIs_Profile_Created").change(function () {
        toggleColumnVisibility("Is_Profile_Created", $(this).prop("checked"));
    });

    $("#toggleUid").change(function () {
        toggleColumnVisibility("Uid", $(this).prop("checked"));
    });

    $("#toggleUrl").change(function () {
        toggleColumnVisibility("Url", $(this).prop("checked"));
    });


    $("#toggleIs_Started").change(function () {
        toggleColumnVisibility("Is_Started", $(this).prop("checked"));
    });

    $("#toggleStarted_at").change(function () {
        toggleColumnVisibility("Started_at", $(this).prop("checked"));
    });

    $("#toggleTimer_Start").change(function () {
        toggleColumnVisibility("Timer_Start", $(this).prop("checked"));
    });

    $("#toggleTimer_started_at").change(function () {
        toggleColumnVisibility("Timer_started_at", $(this).prop("checked"));
    });


    $("#toggleTimer_Tick_In_Seconds").change(function () {
        toggleColumnVisibility("Timer_Tick_In_Seconds", $(this).prop("checked"));
    });

    $("#toggleUpdated_at").change(function () {
        toggleColumnVisibility("Updated_at", $(this).prop("unchecked"));
    });



    // Function to toggle column visibility
    function toggleColumnVisibility(columnName, isVisible) {
        var columnIndex = $("#myTable th").filter(function () {
            return $(this).text() === columnName;
        }).index();

        $("#myTable tr").each(function () {
            $(this).find("th, td").eq(columnIndex).toggle(isVisible);
        });
    }
});

// For read.html page...
// Column Configuration...




*/

function toggleColumnsRead() {

    console.log("toggleColumns() called");

    var email_checkbox = document.getElementById("email_checkbox");
    var language_checkbox = document.getElementById("language_checkbox");
    var agent_checkbox = document.getElementById("agent_checkbox");
    var is_email_verified_checkbox = document.getElementById("is_email_verified_checkbox");
    var is_profile_created_checkbox = document.getElementById("is_profile_created_checkbox");
    var uid_checkbox = document.getElementById("uid_checkbox");
    var url_checkbox = document.getElementById("url_checkbox");

    var email_cells = document.getElementsByClassName("email");
    var language_cells = document.getElementsByClassName("language");
    var agent_cells = document.getElementsByClassName("agent");
    var is_email_verified_cells = document.getElementsByClassName("is_email_verified");
    var is_profile_created_cells = document.getElementsByClassName("is_profile_created");
    var uid_cells = document.getElementsByClassName("uid");
    var url_cells = document.getElementsByClassName("url");

    var email_heading = document.getElementById("email");
    var language_heading = document.getElementById("language");
    var agent_heading = document.getElementById("agent");
    var is_email_verified_heading = document.getElementById("is_email_verified");
    var is_profile_created_heading = document.getElementById("is_profile_created");
    var uid_heading = document.getElementById("uid");
    var url_heading = document.getElementById("url");


    if (email_checkbox.checked) {
        email_heading.classList.remove("hidden-column");
        for (var i = 0; i < email_cells.length; i++) {
            email_cells[i].classList.remove("hidden-column");
        }
    } else {
        email_heading.classList.add("hidden-column");
        for (var i = 0; i < email_cells.length; i++) {
            email_cells[i].classList.add("hidden-column");
        }
    }


    if (language_checkbox.checked) {
        language_heading.classList.remove("hidden-column");
        for (var i = 0; i < language_cells.length; i++) {
            language_cells[i].classList.remove("hidden-column");
        }
    } else {
        language_heading.classList.add("hidden-column");
        for (var i = 0; i < language_cells.length; i++) {
            language_cells[i].classList.add("hidden-column");
        }
    }

    if (agent_checkbox.checked) {
        agent_heading.classList.remove("hidden-column");
        for (var i = 0; i < agent_cells.length; i++) {
            agent_cells[i].classList.remove("hidden-column");
        }
    } else {
        agent_heading.classList.add("hidden-column");
        for (var i = 0; i < agent_cells.length; i++) {
            agent_cells[i].classList.add("hidden-column");
        }
    }

    if (is_email_verified_checkbox.checked) {
        is_email_verified_heading.classList.remove("hidden-column");
        for (var i = 0; i < is_email_verified_cells.length; i++) {
            is_email_verified_cells[i].classList.remove("hidden-column");
        }
    } else {
        is_email_verified_heading.classList.add("hidden-column");
        for (var i = 0; i < is_email_verified_cells.length; i++) {
            is_email_verified_cells[i].classList.add("hidden-column");
        }
    }

    if (is_profile_created_checkbox.checked) {
        is_profile_created_heading.classList.remove("hidden-column");
        for (var i = 0; i < is_profile_created_cells.length; i++) {
            is_profile_created_cells[i].classList.remove("hidden-column");
        }
    } else {
        is_profile_created_heading.classList.add("hidden-column");
        for (var i = 0; i < is_profile_created_cells.length; i++) {
            is_profile_created_cells[i].classList.add("hidden-column");
        }
    }

    if (uid_checkbox.checked) {
        uid_heading.classList.remove("hidden-column");
        for (var i = 0; i < uid_cells.length; i++) {
            uid_cells[i].classList.remove("hidden-column");
        }
    } else {
        uid_heading.classList.add("hidden-column");
        for (var i = 0; i < uid_cells.length; i++) {
            uid_cells[i].classList.add("hidden-column");
        }
    }

    if (url_checkbox.checked) {
        url_heading.classList.remove("hidden-column");
        for (var i = 0; i < url_cells.length; i++) {
            url_cells[i].classList.remove("hidden-column");
        }
    } else {
        url_heading.classList.add("hidden-column");
        for (var i = 0; i < url_cells.length; i++) {
            url_cells[i].classList.add("hidden-column");
        }
    }


}

