<template>
    <div class="HomePage">
        <h1>Applicant: Jacky, Chap Shing Wong</h1>
        <h3><u>Create a web page with the following features:</u></h3>
        <ol type="1" class="scheme">
            <li>A button to allow users to acquire their current location from their browser.<span class="redText"> (Done in Current Location)</span></li>
            <li>A search module that lets users input the name of a location. The search feature is triggered by both button clicks and pressing the enter key on the keyboard.<span class="redText"> (Done in Search Location)</span></li>
            <li>Display the location on a map and add a marker to each searched location every time the location changes.<span class="redText"> (Done in Search Location)</span></li>
            <li>A table with pagination to show all searched places:
                <ol type='a'>
                    <li>Display a maximum of 10 records on each page. <span class="redText"> (Done in Search Location)</span></li>
                    <li>A checkbox at the beginning of each row to let users select multiple records at the same time. <span class="redText"> (Done in Search Location)</span></li>
                    <li>A delete button on the top to remove all selected records as well as their markers on the map. <span class="redText"> (Done in Search Location)</span></li>
                </ol>
            </li>
            <li>Display the time zone and local time of the latest searched location. <span class="redText"> (Done in Search Location)</span></li>
        </ol>

        <span class="redText"><h1>P.S. Please be reminded that Google Map API can sometime being unstable, if error occurs, you may simply refresh the browser.</h1></span>

    </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomePage'
}
</script>

<style>
ol[class="scheme"]{
    margin: auto;
    width: 40%;
    text-align: left;
    font-weight: bold;
}

.redText{
    color: red;
}
</style>