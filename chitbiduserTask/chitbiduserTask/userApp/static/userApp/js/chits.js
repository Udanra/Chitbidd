function toggleColumns() {
    // Checkbox reference Start
    var agent_commission_percent_checkbox = document.getElementById("agent_commission_percent_checkbox");
    var agent_phone_no_checkbox = document.getElementById("agent_phone_no_checkbox");
    var bid_difference_amount_checkbox = document.getElementById("bid_difference_amount_checkbox");
    var clients_checkbox = document.getElementById("clients_checkbox");
    var has_active_bid_checkbox = document.getElementById("has_active_bid_checkbox");
    var is_bid_started_by_agent_checkbox = document.getElementById("is_bid_started_by_agent_checkbox");
    var is_closed_checkbox = document.getElementById("is_closed_checkbox");
    var lapse_in_days_checkbox = document.getElementById("lapse_in_days_checkbox");
    var last_bid_rebate_value_checkbox = document.getElementById("last_bid_rebate_value_checkbox");
    var member_commission_type_checkbox = document.getElementById("member_commission_type_checkbox");
    var next_bid_date_checkbox = document.getElementById("next_bid_date_checkbox");
    var no_of_closed_bids_checkbox = document.getElementById("no_of_closed_bids_checkbox");
    var payment_grace_period_in_days_checkbox = document.getElementById("payment_grace_period_in_days_checkbox");
    var payment_grace_period_type_checkbox = document.getElementById("payment_grace_period_type_checkbox");
    var start_bid_date_checkbox = document.getElementById("start_bid_date_checkbox");
    var updated_at_checkbox = document.getElementById("updated_at_checkbox");
    var winners_checkbox = document.getElementById("winners_checkbox");
    var past_rebate_values_checkbox = document.getElementById("past_rebate_values_checkbox");

    // Checkbox reference End

    //Cell reference Start
    var agent_commission_percent_cells = document.getElementsByClassName("agent_commission_percent");
    var agent_phone_no_cells = document.getElementsByClassName("agent_phone_no");
    var bid_difference_amount_cells = document.getElementsByClassName("bid_difference_amount");
    var clients_cells = document.getElementsByClassName("clients");
    var has_active_bid_cells = document.getElementsByClassName("has_active_bid");
    var is_bid_started_by_agent_cells = document.getElementsByClassName("is_bid_started_by_agent");
    var is_closed_cells = document.getElementsByClassName("is_closed");
    var lapse_in_days_cells = document.getElementsByClassName("lapse_in_days");
    var last_bid_rebate_value_cells = document.getElementsByClassName("last_bid_rebate_value");
    var member_commission_type_cells = document.getElementsByClassName("member_commission_type");
    var next_bid_date_cells = document.getElementsByClassName("next_bid_date");
    var no_of_closed_bids_cells = document.getElementsByClassName("no_of_closed_bids");
    var payment_grace_period_in_days_cells = document.getElementsByClassName("payment_grace_period_in_days");
    var payment_grace_period_type_cells = document.getElementsByClassName("payment_grace_period_type");
    var start_bid_date_cells = document.getElementsByClassName("start_bid_date");
    var updated_at_cells = document.getElementsByClassName("updated_at");
    var winners_cells = document.getElementsByClassName("winners");
    var past_rebate_values_cells = document.getElementsByClassName("past_rebate_values");

    //Cell reference End

    // Heading Reference Start
    var agent_commission_percent_heading = document.getElementById("agent_commission_percent");
    var agent_phone_no_heading = document.getElementById("agent_phone_no");
    var bid_difference_amount_heading = document.getElementById("bid_difference_amount");
    var clients_heading = document.getElementById("clients");
    var has_active_bid_heading = document.getElementById("has_active_bid");
    var is_bid_started_by_agent_heading = document.getElementById("is_bid_started_by_agent");
    var is_closed_heading = document.getElementById("is_closed");
    var lapse_in_days_heading = document.getElementById("lapse_in_days");
    var last_bid_rebate_value_heading = document.getElementById("last_bid_rebate_value");
    var member_commission_type_heading = document.getElementById("member_commission_type");
    var next_bid_date_heading = document.getElementById("next_bid_date");
    var no_of_closed_bids_heading = document.getElementById("no_of_closed_bids");
    var payment_grace_period_in_days_heading = document.getElementById("payment_grace_period_in_days");
    var payment_grace_period_type_heading = document.getElementById("payment_grace_period_type");
    var start_bid_date_heading = document.getElementById("start_bid_date");
    var updated_at_heading = document.getElementById("updated_at");
    var winners_heading = document.getElementById("winners");
    var past_rebate_values_heading = document.getElementById("past_rebate_values");

    // Heading Reference End


    if (agent_commission_percent_checkbox.checked) {
        agent_commission_percent_heading.classList.remove("hidden-column");
        for (var i = 0; i < agent_commission_percent_cells.length; i++) {
            agent_commission_percent_cells[i].classList.remove("hidden-column");
        }
    } else {
        agent_commission_percent_heading.classList.add("hidden-column");
        for (var i = 0; i < agent_commission_percent_cells.length; i++) {
            agent_commission_percent_cells[i].classList.add("hidden-column");
        }
    }

    if (agent_phone_no_checkbox.checked) {
        agent_phone_no_heading.classList.remove("hidden-column");
        for (var i = 0; i < agent_phone_no_cells.length; i++) {
            agent_phone_no_cells[i].classList.remove("hidden-column");
        }
    } else {
        agent_phone_no_heading.classList.add("hidden-column");
        for (var i = 0; i < agent_phone_no_cells.length; i++) {
            agent_phone_no_cells[i].classList.add("hidden-column");
        }
    }

    if (bid_difference_amount_checkbox.checked) {
        bid_difference_amount_heading.classList.remove("hidden-column");
        for (var i = 0; i < bid_difference_amount_cells.length; i++) {
            bid_difference_amount_cells[i].classList.remove("hidden-column");
        }
    } else {
        bid_difference_amount_heading.classList.add("hidden-column");
        for (var i = 0; i < bid_difference_amount_cells.length; i++) {
            bid_difference_amount_cells[i].classList.add("hidden-column");
        }
    }

    if (clients_checkbox.checked) {
        clients_heading.classList.remove("hidden-column");
        for (var i = 0; i < clients_cells.length; i++) {
            clients_cells[i].classList.remove("hidden-column");
        }
    } else {
        clients_heading.classList.add("hidden-column");
        for (var i = 0; i < clients_cells.length; i++) {
            clients_cells[i].classList.add("hidden-column");
        }
    }

    if (has_active_bid_checkbox.checked) {
        has_active_bid_heading.classList.remove("hidden-column");
        for (var i = 0; i < has_active_bid_cells.length; i++) {
            has_active_bid_cells[i].classList.remove("hidden-column");
        }
    } else {
        has_active_bid_heading.classList.add("hidden-column");
        for (var i = 0; i < has_active_bid_cells.length; i++) {
            has_active_bid_cells[i].classList.add("hidden-column");
        }
    }


    if (is_bid_started_by_agent_checkbox.checked) {
        is_bid_started_by_agent_heading.classList.remove("hidden-column");
        for (var i = 0; i < is_bid_started_by_agent_cells.length; i++) {
            is_bid_started_by_agent_cells[i].classList.remove("hidden-column");
        }
    } else {
        is_bid_started_by_agent_heading.classList.add("hidden-column");
        for (var i = 0; i < is_bid_started_by_agent_cells.length; i++) {
            is_bid_started_by_agent_cells[i].classList.add("hidden-column");
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

    if (lapse_in_days_checkbox.checked) {
        lapse_in_days_heading.classList.remove("hidden-column");
        for (var i = 0; i < lapse_in_days_cells.length; i++) {
            lapse_in_days_cells[i].classList.remove("hidden-column");
        }
    } else {
        lapse_in_days_heading.classList.add("hidden-column");
        for (var i = 0; i < lapse_in_days_cells.length; i++) {
            lapse_in_days_cells[i].classList.add("hidden-column");
        }
    }

    if (last_bid_rebate_value_checkbox.checked) {
        last_bid_rebate_value_heading.classList.remove("hidden-column");
        for (var i = 0; i < last_bid_rebate_value_cells.length; i++) {
            last_bid_rebate_value_cells[i].classList.remove("hidden-column");
        }
    } else {
        last_bid_rebate_value_heading.classList.add("hidden-column");
        for (var i = 0; i < last_bid_rebate_value_cells.length; i++) {
            last_bid_rebate_value_cells[i].classList.add("hidden-column");
        }
    }

    if (member_commission_type_checkbox.checked) {
        member_commission_type_heading.classList.remove("hidden-column");
        for (var i = 0; i < member_commission_type_cells.length; i++) {
            member_commission_type_cells[i].classList.remove("hidden-column");
        }
    } else {
        member_commission_type_heading.classList.add("hidden-column");
        for (var i = 0; i < member_commission_type_cells.length; i++) {
            member_commission_type_cells[i].classList.add("hidden-column");
        }
    }

    if (next_bid_date_checkbox.checked) {
        next_bid_date_heading.classList.remove("hidden-column");
        for (var i = 0; i < next_bid_date_cells.length; i++) {
            next_bid_date_cells[i].classList.remove("hidden-column");
        }
    } else {
        next_bid_date_heading.classList.add("hidden-column");
        for (var i = 0; i < next_bid_date_cells.length; i++) {
            next_bid_date_cells[i].classList.add("hidden-column");
        }
    }

    if (no_of_closed_bids_checkbox.checked) {
        no_of_closed_bids_heading.classList.remove("hidden-column");
        for (var i = 0; i < no_of_closed_bids_cells.length; i++) {
            no_of_closed_bids_cells[i].classList.remove("hidden-column");
        }
    } else {
        no_of_closed_bids_heading.classList.add("hidden-column");
        for (var i = 0; i < no_of_closed_bids_cells.length; i++) {
            no_of_closed_bids_cells[i].classList.add("hidden-column");
        }
    }

    if (payment_grace_period_in_days_checkbox.checked) {
        payment_grace_period_in_days_heading.classList.remove("hidden-column");
        for (var i = 0; i < payment_grace_period_in_days_cells.length; i++) {
            payment_grace_period_in_days_cells[i].classList.remove("hidden-column");
        }
    } else {
        payment_grace_period_in_days_heading.classList.add("hidden-column");
        for (var i = 0; i < payment_grace_period_in_days_cells.length; i++) {
            payment_grace_period_in_days_cells[i].classList.add("hidden-column");
        }
    }

    if (payment_grace_period_type_checkbox.checked) {
        payment_grace_period_type_heading.classList.remove("hidden-column");
        for (var i = 0; i < payment_grace_period_type_cells.length; i++) {
            payment_grace_period_type_cells[i].classList.remove("hidden-column");
        }
    } else {
        payment_grace_period_type_heading.classList.add("hidden-column");
        for (var i = 0; i < payment_grace_period_type_cells.length; i++) {
            payment_grace_period_type_cells[i].classList.add("hidden-column");
        }
    }

    if (start_bid_date_checkbox.checked) {
        start_bid_date_heading.classList.remove("hidden-column");
        for (var i = 0; i < start_bid_date_cells.length; i++) {
            start_bid_date_cells[i].classList.remove("hidden-column");
        }
    } else {
        start_bid_date_heading.classList.add("hidden-column");
        for (var i = 0; i < start_bid_date_cells.length; i++) {
            start_bid_date_cells[i].classList.add("hidden-column");
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

    if (winners_checkbox.checked) {
        winners_heading.classList.remove("hidden-column");
        for (var i = 0; i < winners_cells.length; i++) {
            winners_cells[i].classList.remove("hidden-column");
        }
    } else {
        winners_heading.classList.add("hidden-column");
        for (var i = 0; i < winners_cells.length; i++) {
            winners_cells[i].classList.add("hidden-column");
        }
    }

    if (past_rebate_values_checkbox.checked) {
        past_rebate_values_heading.classList.remove("hidden-column");
        for (var i = 0; i < past_rebate_values_cells.length; i++) {
            past_rebate_values_cells[i].classList.remove("hidden-column");
        }
    } else {
        past_rebate_values_heading.classList.add("hidden-column");
        for (var i = 0; i < past_rebate_values_cells.length; i++) {
            past_rebate_values_cells[i].classList.add("hidden-column");
        }
    }

}



// chit_add_form code Start

document.addEventListener('DOMContentLoaded', function () {
    var nextButton = document.querySelector('.btn-primary');
    var formCard = document.querySelector('.card');
    nextButton.addEventListener('click', function () {
        formCard.classList.add('slide-left');
    });
});


// chit_add_form code End