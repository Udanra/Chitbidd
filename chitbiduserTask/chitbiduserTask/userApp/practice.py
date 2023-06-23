# Define a variable to store the selected commission type
selected_commission_type = "one_time_commission"  # Change this value as needed

# Generate the HTML code with the selected commission type enabled
html_code = '''
<div class="commission">
    <div class="">
        <div class="col-md mx-4">
            <h4 class="my-4">Agent Commission Type</h4>
            <div class="mx-4">
                <input type="radio" id="one_time_commission" name="one_time_commission"'''
if selected_commission_type == "one_time_commission":
    html_code += ' checked="checked"'
html_code += '''/>
                <label for="one_time_commission" class="mx-4">One time collection at beginning</label>
            </div>
            <div class="mx-4">
                <input type="radio" id="n_percent_with" name="n_percent_with"'''
if selected_commission_type == "n_percent_with":
    html_code += ' checked="checked"'
html_code += '''/>
                <label for="n_percent_with" class="mx-4">N percentage with repayment</label>
            </div>
            <div class="mx-4">
                <input type="radio" id="n_percent_without" name="n_percent_without"'''
if selected_commission_type == "n_percent_without":
    html_code += ' checked="checked"'
html_code += '''/>
                <label for="n_percent_without" class="mx-4">N percentage without repayment</label>
            </div>
        </div>
        <div class="col-md my-4 mx-4 ">
            <h4 class="mb-4">Member Commission Type</h4>
            <div class="mx-4">
                <input type="radio" id="eligible_until" name="eligible_until" />
                <label for="eligible_until" class="mx-4">Eligible until auction won</label>
            </div>
            <div class="mx-4">
                <input type="radio" id="eligible_entire" name="eligible_entire" />
                <label for="eligible_entire" class="mx-4">Eligible for entire chit</label>
            </div>
        </div>
    </div>
</div>
'''

# Print the generated HTML code
print(html_code)
