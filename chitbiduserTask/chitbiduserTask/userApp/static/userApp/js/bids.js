/*
// Start Bids Page Column Configuration...

$(document).ready(function () {
    // Initial column visibility based on checkbox status
    toggleColumnVisibility("Bid_Amount", $("#toggleBid_Amount").prop("checked"));
    toggleColumnVisibility("Nth_Bid", $("#toggleNth_Bid").prop("checked"));
    toggleColumnVisibility("Chit_ID", $("#toggleChit_ID").prop("checked"));
    toggleColumnVisibility("Winner_Phone_no", $("#toggleWinner_Phone_no").prop("checked"));
    toggleColumnVisibility("Bid_Date_and_Time", $("#toggleBid_Date_and_Time").prop("checked"));
    toggleColumnVisibility("Number_OF_Bells", $("#toggleNumber_OF_Bells").prop("checked"));
    toggleColumnVisibility("Bid_at", $("#toggleBid_at").prop("checked"));
    toggleColumnVisibility("Ended_at", $("#toggleEnded_at").prop("checked"));
    toggleColumnVisibility("Is_Active", $("#toggleIs_Active").prop("checked"));
    toggleColumnVisibility("Is_Agent_bid", $("#toggleIs_Agent_bid").prop("checked"));
    toggleColumnVisibility("Is_Automatic", $("#toggleIs_Automatic").prop("checked"));
    toggleColumnVisibility("Is_Closed", $("#toggleIs_Closed").prop("checked"));
    toggleColumnVisibility("Is_Started", $("#toggleIs_Started").prop("checked"));
    toggleColumnVisibility("Started_at", $("#toggleStarted_at").prop("checked"));
    toggleColumnVisibility("Timer_Start", $("#toggleTimer_Start").prop("checked"));
    toggleColumnVisibility("Timer_started_at", $("#toggleTimer_started_at").prop("checked"));
    toggleColumnVisibility("Timer_Tick_In_Seconds", $("#toggleTimer_Tick_In_Seconds").prop("checked"));
    toggleColumnVisibility("Updated_at", $("#toggleUpdated_at").prop("checked"));

    // Event listeners for checkbox changes
    $("#toggleBid_Amount").change(function () {
        toggleColumnVisibility("Bid_Amount", $(this).prop("checked"));
    });

    $("#toggleNth_Bid").change(function () {
        toggleColumnVisibility("Nth_Bid", $(this).prop("checked"));
    });

    $("#toggleChit_ID").change(function () {
        toggleColumnVisibility("Chit_ID", $(this).prop("checked"));
    });


    $("#toggleWinner_Phone_no").change(function () {
        toggleColumnVisibility("Winner_Phone_no", $(this).prop("checked"));
    });


    $("#toggleBid_Date_and_Time").change(function () {
        toggleColumnVisibility("Bid_Date_and_Time", $(this).prop("checked"));
    });

    $("#toggleNumber_OF_Bells").change(function () {
        toggleColumnVisibility("Number_OF_Bells", $(this).prop("checked"));
    });

    $("#toggleBid_at").change(function () {
        toggleColumnVisibility("Bid_at", $(this).prop("checked"));
    });

    $("#toggleEnded_at").change(function () {
        toggleColumnVisibility("Ended_at", $(this).prop("checked"));
    });

    $("#toggleIs_Active").change(function () {
        toggleColumnVisibility("Is_Active", $(this).prop("checked"));
    });

    $("#toggleIs_Agent_bid").change(function () {
        toggleColumnVisibility("Is_Agent_bid", $(this).prop("checked"));
    });

    $("#toggleIs_Automatic").change(function () {
        toggleColumnVisibility("Is_Automatic", $(this).prop("checked"));
    });

    $("#toggleIs_Closed").change(function () {
        toggleColumnVisibility("Is_Closed", $(this).prop("checked"));
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
        toggleColumnVisibility("Updated_at", $(this).prop("checked"));
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

// End Bids Page Column Configuration...


*/



function toggleColumnsBid() {

    console.log('toggleColumnsBid() called')

    var number_of_bells_checkbox = document.getElementById("number_of_bells_checkbox");
    var bid_at_checkbox = document.getElementById("bid_at_checkbox");
    var ended_at_checkbox = document.getElementById("ended_at_checkbox");
    var is_active_checkbox = document.getElementById("is_active_checkbox");
    var is_agent_bid_checkbox = document.getElementById("is_agent_bid_checkbox");
    var is_automatic_checkbox = document.getElementById("is_automatic_checkbox");
    var is_closed_checkbox = document.getElementById("is_closed_checkbox");
    var is_started_checkbox = document.getElementById("is_started_checkbox");
    var started_at_cells = document.getElementById("started_at_cells");
    var timer_start_checkbox = document.getElementById("timer_start_checkbox");
    var timer_started_at_checkbox = document.getElementById("timer_started_at_checkbox");
    var timer_tick_in_seconds_checkbox = document.getElementById("timer_tick_in_seconds_checkbox");
    var updated_at_checkbox = document.getElementById("updated_at_checkbox");


    var number_of_bells_cells = document.getElementsByClassName("number_of_bells");
    var bid_at_cells = document.getElementsByClassName("bid_at");
    var ended_at_cells = document.getElementsByClassName("ended_at");
    var is_active_cells = document.getElementsByClassName("is_active");
    var is_agent_bid_cells = document.getElementsByClassName("is_agent_bid");
    var is_automatic_cells = document.getElementsByClassName("is_automatic");
    var is_closed_cells = document.getElementsByClassName("is_closed");
    var is_started_cells = document.getElementsByClassName("is_started");
    var started_at_cells = document.getElementsByClassName("started_at");
    var timer_start_cells = document.getElementsByClassName("timer_start");
    var timer_started_at_cells = document.getElementsByClassName("timer_started_at");
    var timer_tick_in_seconds_cells = document.getElementsByClassName("timer_tick_in_seconds");
    var updated_at_cells = document.getElementsByClassName("updated_at");


    var number_of_bells_heading = document.getElementById("number_of_bells");
    var bid_at_heading = document.getElementById("bid_at");
    var ended_at_heading = document.getElementById("ended_at");
    var is_active_heading = document.getElementById("is_active");
    var is_agent_bid_heading = document.getElementById("is_agent_bid");
    var is_automatic_heading = document.getElementById("is_automatic");
    var is_closed_heading = document.getElementById("is_closed");
    var is_started_heading = document.getElementById("is_started");
    var started_at_heading = document.getElementById("started_at");
    var timer_start_heading = document.getElementById("timer_start");
    var timer_started_at_heading = document.getElementById("timer_started_at");
    var timer_tick_in_seconds_heading = document.getElementById("timer_tick_in_seconds");
    var updated_at_heading = document.getElementById("updated_at");

    if (number_of_bells_checkbox.checked) {
        number_of_bells_heading.classList.remove("hidden-column");
        for (var i = 0; i < number_of_bells_cells.length; i++) {
            number_of_bells_cells[i].classList.remove("hidden-column");
        }
    } else {
        number_of_bells_heading.classList.add("hidden-column");
        for (var i = 0; i < number_of_bells_cells.length; i++) {
            number_of_bells_cells[i].classList.add("hidden-column");
        }
    }



    if (bid_at_checkbox.checked) {
        bid_at_heading.classList.remove("hidden-column");
        for (var i = 0; i < bid_at_cells.length; i++) {
            bid_at_cells[i].classList.remove("hidden-column");
        }
    } else {
        bid_at_heading.classList.add("hidden-column");
        for (var i = 0; i < bid_at_cells.length; i++) {
            bid_at_cells[i].classList.add("hidden-column");
        }
    }


    if (ended_at_checkbox.checked) {
        ended_at_heading.classList.remove("hidden-column");
        for (var i = 0; i < ended_at_cells.length; i++) {
            ended_at_cells[i].classList.remove("hidden-column");
        }
    } else {
        ended_at_heading.classList.add("hidden-column");
        for (var i = 0; i < ended_at_cells.length; i++) {
            ended_at_cells[i].classList.add("hidden-column");
        }
    }

    if (is_active_checkbox.checked) {
        is_active_heading.classList.remove("hidden-column");
        for (var i = 0; i < is_active_cells.length; i++) {
            is_active_cells[i].classList.remove("hidden-column");
        }
    } else {
        is_active_heading.classList.add("hidden-column");
        for (var i = 0; i < is_active_cells.length; i++) {
            is_active_cells[i].classList.add("hidden-column");
        }
    }

    if (is_agent_bid_checkbox.checked) {
        is_agent_bid_heading.classList.remove("hidden-column");
        for (var i = 0; i < is_agent_bid_cells.length; i++) {
            is_agent_bid_cells[i].classList.remove("hidden-column");
        }
    } else {
        is_agent_bid_heading.classList.add("hidden-column");
        for (var i = 0; i < is_agent_bid_cells.length; i++) {
            is_agent_bid_cells[i].classList.add("hidden-column");
        }
    }

    if (is_automatic_checkbox.checked) {
        is_automatic_heading.classList.remove("hidden-column");
        for (var i = 0; i < is_automatic_cells.length; i++) {
            is_automatic_cells[i].classList.remove("hidden-column");
        }
    } else {
        is_automatic_heading.classList.add("hidden-column");
        for (var i = 0; i < is_automatic_cells.length; i++) {
            is_automatic_cells[i].classList.add("hidden-column");
        }
    }

    if (is_closed_checkbox.checked) {
        is_closed_heading.classList.remove("hidden-column");
        for (var i = 0; i < is_closed_cells.length; i++) {
            is_closed_cells[i].classList.remove("hidden-column");
        }
    } else {
        is_closed_heading.classList.add("hidden-column");
        for (var i = 0; i < is_closed_cells.length; i++) {
            is_closed_cells[i].classList.add("hidden-column");
        }
    }

    if (is_started_checkbox.checked) {
       is_started_heading.classList.remove("hidden-column");
        for (var i = 0; i <is_started_cells.length; i++) {
            is_started_cells[i].classList.remove("hidden-column");
        }
    } else {
        is_started_heading.classList.add("hidden-column");
        for (var i = 0; i < is_started_cells.length; i++) {
            is_started_cells[i].classList.add("hidden-column");
        }
    }

    if (started_at_checkbox.checked) {
        started_at_heading.classList.remove("hidden-column");
        for (var i = 0; i < started_at_cells.length; i++) {
            started_at_cells[i].classList.remove("hidden-column");
        }
    } else {
        started_at_heading.classList.add("hidden-column");
        for (var i = 0; i < started_at_cells.length; i++) {
            started_at_cells[i].classList.add("hidden-column");
        }
    }

    if (timer_started_at_checkbox.checked) {
        timer_started_at_heading.classList.remove("hidden-column");
        for (var i = 0; i < timer_started_at_cells.length; i++) {
            timer_started_at_cells[i].classList.remove("hidden-column");
        }
    } else {
        timer_started_at_heading.classList.add("hidden-column");
        for (var i = 0; i < timer_started_at_cells.length; i++) {
            timer_started_at_cells[i].classList.add("hidden-column");
        }
    }

    if (timer_start_checkbox.checked) {
        timer_start_heading.classList.remove("hidden-column");
        for (var i = 0; i < timer_start_cells.length; i++) {
            timer_start_cells[i].classList.remove("hidden-column");
        }
    } else {
        timer_start_heading.classList.add("hidden-column");
        for (var i = 0; i < timer_start_cells.length; i++) {
            timer_start_cells[i].classList.add("hidden-column");
        }
    }

    if (timer_tick_in_seconds_checkbox.checked) {
        timer_tick_in_seconds_heading.classList.remove("hidden-column");
        for (var i = 0; i < timer_tick_in_seconds_cells.length; i++) {
            timer_tick_in_seconds_cells[i].classList.remove("hidden-column");
        }
    } else { 
        timer_tick_in_seconds_heading.classList.add("hidden-column");
        for (var i = 0; i < timer_tick_in_seconds_cells.length; i++) {
            timer_tick_in_seconds_cells[i].classList.add("hidden-column");
        }
    }


    if (updated_at_checkbox.checked) {
        updated_at_heading.classList.remove("hidden-column");
        for (var i = 0; i < updated_at_cells.length; i++) {
            updated_at_cells[i].classList.remove("hidden-column");
        }
    } else {
        updated_at_heading.classList.add("hidden-column");
        for (var i = 0; i < updated_at_cells.length; i++) {
            updated_at_cells[i].classList.add("hidden-column");
        }
    }


}