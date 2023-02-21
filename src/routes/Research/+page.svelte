<script>
	import { fade } from 'svelte/transition'
	import Paper from '../../lib/Papers.json';
	import labs from '../../lib/labs.json'
	/**
	 * @type {{ Page: any; }}
	 */
	 export let data
	 let page_no =  Number(data.Page)
	 let pages = Paper.slice((page_no-1)*10,(page_no-1)*10 + 9)
	
</script>

<div  class="place-self-center group-active: grid grid-cols-6 p-10 h-[42rem]  " data-aos="fade-up" data-aos-anchor-placement="center-bottom" style=" background-size: cover; background-position: top center;background-image: linear-gradient(to Right,rgba(0,0,0,1),rgba(0,0,0,0)), url(https://www.dituniversity.edu.in/Uploads/image/1005imguf_research-22.jpg)" > 
    <div class='col-end-2 col-span-2 w-[26rem] rounded-3xl p-4'>
        <h1 class="md:text-5xl text-[4rem] text-slate-100 shadow-2">Apply for research</h1>
        <h3 class="text-2xl text-slate-100 shadow-2 mt-4">We will be helping, guiding and assisting you to bring forth your discoveries to the world from equripment handeling to publishing and proof reading we are on every step with you </h3>
        <div class="flex justify-center m-6">
            <div class="transition hover:scale-[1.15] w-max"><a href="/Form/research" class="text-xl border-white border-2 transition-all hover:bg-white hover:text-black text-white justify-center py-2 px-10 rounded-full">Apply</a>
        </div></div>
    </div>
</div>




<div id ="labs" class="bg-white w-full max-w-[90rem] grid grid-cols-1  p-6 m-6 shadow-2xl " data-aos="fade-up" data-aos-anchor-placement="center-bottom"> <p class="text-4xl underline">Research Fecility </p>
<div class="w-  h-full flex overflow-x-auto snap-x snap-mandatory gap-1 scroll-smooth">
		{#each labs as lab,index}	
			<ul class="shrink-0 w-full w-max-[80rem] snap-center" id="car-item-{index}">
				<p class="text-3xl p-2">{lab.name}</p>
				<div class="md:flex">
					<img src="{lab.image}" alt="" class="w-full shadow-lg p-4">
					<div class="w-full max-w-[90rem] text-2xl p-4 text-justify">{lab.description}</div>
				</div>
			</ul>
		{/each}
		
</div>
<nav class="place-self-center flex gap-5 p-4" >
		{#each labs as _,index}
			<div class=" flex gap-5 ">
				<a href="#car-item-{index}"  class="text-lg ">{index+1}</a>
			</div>
		{/each}

</nav>
</div>
<div>

</div>

<div data-aos="fade-up" data-aos-anchor-placement="top-center"  class="bg-white w-full max-w-[90rem] grid grid-cols-1 place-items-center pt-16 shadow-2xl" id="papers">
<div class = "flex justify-between w-full">
	<p class=' text-4xl  px-8 bg-white underline'>Research Papers</p>

	<div class='flex place-self-end m-10'>
		<a href="/Research?page={page_no}#papers " on:click={()=>{page_no = (page_no>1)?page_no-1:page_no;pages = Paper.slice((page_no-1)*10,(page_no-1)*10 + 9)}} class="bg-teal-400 shadow-lg text-white rounded-xl p-2 mx-3 my-2">Prev</a>
		<p class = 'p-2 m-2'>{page_no } of 99  </p>
		<a href="/Research?page={page_no}#papers "  on:click={()=>{page_no = (page_no<99)?page_no+1:page_no;pages = Paper.slice((page_no-1)*10,(page_no-1)*10 + 9)}} class="bg-teal-400 shadow-lg text-white rounded-xl p-2 mx-3 my-2">Next</a>
	</div>
</div>
	{#each pages as page}<div class="p-4 w-full max-w-[80rem]">
		<div class="p-4 w-full bg-teal-50 my-6  grid grid-cols-1 min-h-[15rem] border-[px] shadow-2xl border-slate-900 " transition:fade>
			<div>
				<p class= "md:text-2xl text-3xl md:w-2/3 w-5/6  md:my-0 my-5">{page['Title of paper']}</p>
				<a target="_blank" href="{page['Journal Link']}"class= "place-self-end mt-4 text-blue-800 hover:text-blue-600 py-1  w-max">{page['Name of journal']}</a>
			</div>
			<div class="flex w-full justify-between">
				<p class= "text-xl w-max">Author's : {page['Name of the author\/s']}</p>
				<div class="flex">
					<a target="_blank" href="{page['Publication Link']}"class= "place-self-end mt-4 px-2 text-white pb-2 pt-1 bg-teal-400 rounded-2xl w-max">Read more</a>
				</div>
			</div>
		</div></div>	
	{/each}
	<div class='flex place-self-end m-10'>
		<a href="/Research?page={page_no}#papers " on:click={()=>{page_no = (page_no>1)?page_no-1:page_no;pages = Paper.slice((page_no-1)*10,(page_no-1)*10 + 9)}} class="bg-teal-400 shadow-lg text-white rounded-xl p-2 mx-3 my-2">Prev</a>
		<p class = 'p-2 m-2'>{page_no } of 99  </p>
		<a href="/Research?page={page_no}#papers "  on:click={()=>{page_no = (page_no<99)?page_no+1:page_no;pages = Paper.slice((page_no-1)*10,(page_no-1)*10 + 9)}} class="bg-teal-400 shadow-lg text-white rounded-xl p-2 mx-3 my-2">Next</a>
	</div>
</div>