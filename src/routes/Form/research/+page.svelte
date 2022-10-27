<script>
    let IsStudent = false;
</script>
<main>
    <form method="POST" class="grid-cols-2 grid text-2xl">
       <div class="form-entry"> <label for="name">Name</label>
        <input class="form-input" type="text" name="name" id="name" /></div>
        <div class="form-entry"><label for="email">Email</label>
        <input class="form-input" type="email" name="email" id="email" /></div>
        <div class="form-entry"> <label for="Phone">Phone</label>
        <input class="form-input" type="number" name="phone" id="phone" /></div>
        <div class="form-entry "><label for="IsStudent">Are you registered in DIT university?</label>
            <input class="scale-[200%] m-2" type="checkbox" name="IsStudent" id="IsStudent" bind:checked={IsStudent} />
        </div>
        {#if IsStudent}
        <div class="form-entry "> 
            <label for="Year">Year</label>
            <input class="form-input" type="number" name="Year" id="Year" />
        </div>
        <div class="form-entry"> 
            <label for="SAPID">SAPID</label>
            <select class="form-input" name="Stream" id="Stream" >
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="ME">ME</option>
                <option value="CE">CE</option>
                <option value="EE">EE</option>
                <option value="BT">BT</option>
            </select>
        </div>
        <div class="form-entry"> 
            <label for="SAPID">SAPID</label>
            <input class="form-input" type="number" name="SAPID" id="SAPID" />
        </div>{/if}
        <div class="form-entry"></div>
        <div class="form-entry"><label for="message">Message</label>
        <textarea class="form-textarea" name="message" id="message" rows="5"></textarea></div>
        <div class="form-entry"></div>
        <button  type="submit">Send</button>
    </form>
</main>
<style>
    .form-entry{
        @apply m-2 grid grid-cols-1 place-items-start;
    }
    .form-input{
        @apply w-3/4 rounded-full mt-2 focus:outline-blue-400 shadow-blue-400 focus:shadow-lg border-2 px-6 py-1 border-gray-300;
    }
    .form-textarea{
        @apply w-full rounded-xl border-2 px-6 py-2  focus:outline-blue-400 shadow-blue-400 focus:shadow-lg border-gray-300;
    }
</style>