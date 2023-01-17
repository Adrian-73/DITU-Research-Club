
<script>
    import logo from "$lib/LOGO.png"
    import { fade } from "svelte/transition";
    import Paper from "$lib/Papers.json"
    const views = Paper.slice(0,9)
	
	/**
* @type {typeof Paper[1] | null}
*/
	let viewportComponent = null
	let currentView = 0
	
	function toggleView() {
		currentView = (currentView+1)%3
	}
    /**
* @type {string | number | NodeJS.Timeout | undefined}
*/
    let clear
    $: {
	 clearInterval(clear)
	 clear = setInterval(toggleView, 3000)
 }
	function updateViewportComponent() {
		viewportComponent = views[currentView]
	}
	updateViewportComponent()
	
</script>
<div>
<div  class=" grid grid-cols-6 p-10 h-[42rem]  " style=" background-size: cover; background-position: top center;background-image: linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0)), url(https://www.dituniversity.edu.in/Uploads/image/1005imguf_research-22.jpg) "> 
    <div class='col-end-2 col-span-2 w-[26rem]  rounded-3xl p-4'>
        <h1 class="text-[4rem] text-slate-100 shadow-2">Research for better tommrrow</h1>
        <h3 class="text-3xl text-slate-100 shadow-2 mt-4">Join us in the journy to unknown</h3>
        <div class="flex justify-center mt-16">
            <div class=" w-max"><a href="/Form/member" class="text-xl border-white border-2 transition-all hover:bg-white hover:text-black text-white justify-center py-2 px-10 rounded-full">RSVP & WIN</a>
        </div></div>
    </div>
</div></div>
<div data-aos="fade-up" data-aos-anchor-placement="center-bottom" class="place-self-center md:w-[80vw] w-full border-stone-300 border-2 grid md:grid-cols-3 bg-slate-400 p-8 md:p-0 md:rounded-full gap-8 my-8 ">
    <a href='/Research/#papers' class='md:text-lg text-2xl font-medium bg-white  md:py-2 py-4 rounded-full flex justify-center hover:bg-slate-200 transition-all '> <p>Papers</p></a>
    <a href='/Form/member'      class='md:text-lg text-2xl font-medium bg-white  md:py-2 py-4 rounded-full flex justify-center hover:bg-slate-200 transition-all'> <p>Join us</p></a>
    <a href='/Abouts'           class='md:text-lg text-2xl font-medium bg-white  md:py-2 py-4 rounded-full flex justify-center hover:bg-slate-200 transition-all '> <p>About</p></a>
</div>
<div data-aos="fade-up" data-aos-anchor-placement="center-bottom" class="max-w-[90rem] min-h-[40rem] h-max w-full p-4 bg-white shadow-xl my-12">
        <h1 class="text-4xl mb-4 underline">Research at DIT</h1>
        <div class='max-w-[90rem] h-max w-full place-self-center grid font-normal grid-cols-1 md:grid-cols-7'>
        <img src={logo}  class="md:w-1/2 h-auto col-span-3 place-self-center col-end-0" alt='Img1'>
        <div class="col-span-4 p-4 ">
            <p class="md:text-xl text-2xl shadow-2 mt-8">Our goal for research at DIT University is to establish a reputation for highly relevant, innovative, and societally relevant research that will not only advance our field of study but also have a substantial impact on the health and welfare of people living in our city, state, and region
                The vibrant research culture at our university, which is driven by the large number of academic scholars and faculty mentors, puts before us the unquestionable need to advance and assume leadership in important fields of study, leading to high-caliber publications and attracting research funding from local and federal agencies.
            </p>
            <div class =' grid grid-cols-2 h-min'>
                <a class='md:text-xl text-3xl transition hover:bg-teal-400 border-2 border-teal-400 hover:text-white text-teal-400 justify-center py-2 m-4 px-10 rounded-full md:w-max w-full text-center ' href='/Abouts'>Abouts </a>
            </div>
        </div>
    </div>
    
</div>

<div class="max-w-[90rem] h-[40rem] w-full p-10 bg-white shadow-xl  flex flex-col" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
	<p class=' text-4xl h-min bg-white'>Latest Research Articals</p>
    
{#if viewportComponent == views[currentView]}
	<div id="viewport" class="p-4 w-full max-w-[80rem] h-full place-self-center" on:outroend={updateViewportComponent} transition:fade>
            <div class="p-4 w-full bg-teal-50 my-6  grid grid-cols-1 min-h-[15rem] h-full border-[px] shadow-xl border-slate-900 " transition:fade>
                <div>
                    <p class= "md:text-3xl text-3xl md:w-2/3 w-5/6  md:my-0 my-5">{views[currentView]['Title of paper']}</p>
                    <a target="_blank" href="{views[currentView]['Journal Link']}"class= "place-self-end mt-4 text-blue-800 hover:text-blue-600 py-1  w-max">{views[currentView]['Name of journal']}</a>
                </div>
                <div class="flex w-full justify-between">
                    <p class= "text-xl w-max">Author's : {views[currentView]['Name of the author\/s']}</p>
                    <div class="flex">
                        <a target="_blank" href="{views[currentView]['Publication Link']}"class= "place-self-end mt-4 px-2 pb-2 pt-1 text-white bg-teal-400 rounded-2xl w-max">Read more</a>
                    </div>
                </div>
            </div>
	</div>
{/if}
</div>


<div data-aos="fade-up" data-aos-anchor-placement="center-bottom" class=' xl:w-[90rem] h-max lg:flex justify-around md:my-12 '>
    <div class='md:w-[37rem] w-full h-1/2 bg-white shadow-lg '>
        <img src="./images/honor-code-img.jpg"  class="w-full h-min" alt='Img1' >
        <div class="w-full py-3" >
            <h3 class='md:text-3xl text-4xl underline p-4'>Join Research Club</h3>
            <p class='md:text-xl text-2xl p-4'>Become a member of our research club, get insite on research conduction, thsease writing, Paper reading etc</p>
            <div class=" md:justify-start justify-center flex w-full "><a href="/Form/member" class="md:text-xl text-3xl transition hover:bg-teal-400 border-2 border-teal-400 hover:text-white text-teal-400 justify-center py-2 m-4 px-10 rounded-full md:w-max w-full text-center ">Join</a></div>
        </div>
    </div>
    
    <div class='md:w-[37rem] w-full h-full bg-white shadow-lg'>
        <div class="w-full py-3">
            <h3 class='md:text-3xl text-4xl underline p-4'>Conduct research</h3>
            <p class='md:text-xl text-2xl p-4'>Have an idea? Need help with publishing and proof reading? Require equripments to conduct experiment?
                apply to our research project program </p>
            <div class=" md:justify-start justify-center flex w-full"><a href="/Form/research" class="md:text-xl text-3xl transition hover:bg-teal-400 border-2 border-teal-400 hover:text-white text-teal-400 justify-center py-2 m-4 px-10 rounded-full  md:w-max w-full text-center" >Apply</a></div>
        </div>
    <img src="./images/2706imguf_Material,Nano.jpg"  class="w-full h-auto" alt='Img1' >
    </div>
</div>