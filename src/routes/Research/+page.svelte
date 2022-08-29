<script>
	import { fade } from 'svelte/transition'
	import View from '../../lib/paper.svelte'
	import View1 from '../../lib/paper1.svelte'
	import View2 from '../../lib/paper2.svelte'
	const views = [View,View1, View2]

	/**
* @type {typeof View2 | null}
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

<div  class="place-self-center  w-[80vw] grid grid-cols-6 p-10 h-[32rem] bg-[url(https://www.dituniversity.edu.in/Uploads/image/1005imguf_research-22.jpg)]" > 
    <div class='col-end-2 col-span-2 w-[26rem] bg-teal-600 rounded-3xl p-4'>
        <h1 class="text-5xl text-slate-100 shadow-2">Apply for research</h1>
        <h3 class="text-2xl text-slate-100 shadow-2 mt-4">We will be helping, guiding and assisting you to bring forth your discoveries to the world from equripment handeling to publishing and proof reading we are on every step with you </h3>
        <div class="flex justify-center m-6">
            <div class="transition hover:scale-[1.15] w-max"><a href="" class="text-xl bg-white justify-center py-2 px-10 rounded-full">Apply</a>
        </div></div>
    </div>
</div>


<div class="w-[80vw] place-self-center my-10 p-[4rem]">
<p class=' text-4xl  p-4 bg-white'>Latest Research Articals</p>
<div class=' h-max bg-white justify-center flex p-6'>
    
{#if viewportComponent == views[currentView]}
	<div id="viewport" class='justify-center w-max flex ' on:outroend={updateViewportComponent} transition:fade>
		<svelte:component this={viewportComponent}></svelte:component>
	</div>
{/if}
</div></div>

<div class='max-w-[80rem] h-max bg-white place-self-end grid grid-cols-7 m-4 mx-8'>
    <div class="col-span-4 p-4 ">
        <h3 class="text-3xl shadow-2 mt-4">Research Fecility </h3>
    </div>
    <img src="https://www.dituniversity.edu.in/Uploads/image/2678imguf_1.Pluto.jpeg"  class="w-auto h-[30rem] col-span-3 col-end-0" alt='Img1'>
</div>

<div class='max-w-[80rem] h-max bg-white place-self-start grid grid-cols-7 m-4 mx-8'>
    <div class="col-span-4 p-4 ">
        <h3 class="text-3xl shadow-2 mt-4">Finatial support policy </h3>
    </div>
    <img src="https://www.dituniversity.edu.in/Uploads/image/2678imguf_1.Pluto.jpeg"  class="w-auto h-[30rem] col-span-3 col-end-0" alt='Img1'>
</div>