<script>
	import faculties from '../../lib/Faculties.json';
</script>

<div
	class="place-self-center  grid grid-cols-6 p-10 h-[44rem] "
	style="background-size: cover; background-position: top center;background-image: linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0)),url(./images/Page-4-Image-8_clipdrop-enhance.jpg); "
>
	<div class="col-end-2 col-span-2 w-[26rem]  rounded-2xl p-4">
		<h1 class="text-[4rem] text-slate-100 shadow-2 ">About Us</h1>
		<h3 class="text-3xl text-slate-100 shadow-2 mt-4">.</h3>
		<div class="flex justify-center mt-16" />
	</div>
</div>

<div
	class="max-w-[90rem] h-max w-full p-10  my-10 bg-white shadow-2xl"
	data-aos="fade-up"
	data-aos-anchor-placement="center-bottom"
>
	<h1 class="text-4xl mb-4 underline">Faculty Advisor</h1>
	<div
		class="max-w-[90rem] h-max w-full place-self-center grid font-normal grid-cols-1 md:grid-cols-7"
	>
		<div class="col-span-4 p-4 ">
			<p class="md:text-2xl text-2xl shadow-2 mt-8">
				Our goal for research at DIT University is to establish a reputation for highly relevant,
				innovative, and societally relevant research that will not only advance our field of study
				but also have a substantial impact on the health and welfare of people living in our city,
				state, and region The vibrant research culture at our university, which is driven by the
				large number of academic scholars and faculty mentors, puts before us the unquestionable
				need to advance and assume leadership in important fields of study, leading to high-caliber
				publications and attracting research funding from local and federal agencies.
			</p>
			<p class="text-end text-2xl">Dr.Jogendra Kumar</p>
			<p class="text-end text-xl">(Associate Professor at DIT university)</p>
		</div>
		<img
			src="./images/jogendra.png"
			class=" h-auto col-span-3 place-self-center col-end-0"
			alt="Img1"
		/>
	</div>
</div>

<div
	class="max-w-[90rem] h-max w-full p-4 my-2 bg-white shadow-2xl"
	data-aos="fade-up"
	data-aos-anchor-placement="center-bottom"
>
	<h1 class="text-4xl mb-4 underline">Founder Of Research club</h1>
	<div
		class="max-w-[90rem] h-max w-full place-self-center grid font-normal grid-cols-1 md:grid-cols-7"
	>
		<img
			src="./images/41frt_PikforWebsite.jpg"
			class=" h-auto col-span-3 md:place-self-center col-end-0"
			alt="Img1"
		/>
		<div class="col-span-4 p-4 ">
			<p class="md:text-2xl text-2xl shadow-2 mt-8">
				Our goal for research at DIT University is to establish a reputation for highly relevant,
				innovative, and societally relevant research that will not only advance our field of study
				but also have a substantial impact on the health and welfare of people living in our city,
				state, and region The vibrant research culture at our university, which is driven by the
				large number of academic scholars and faculty mentors, puts before us the unquestionable
				need to advance and assume leadership in important fields of study, leading to high-caliber
				publications and attracting research funding from local and federal agencies.
			</p>
			<p class="text-end text-2xl">Dr. Kiran Badoni Mamgain</p>
			<p class="text-end text-xl">(Associate Professor at DIT university)</p>
		</div>
	</div>
</div>
<div class="max-w-[90rem] w-full bg-white p-4 my-8 shadow-2xl" />
<div
	class="max-w-[90rem] w-full bg-white p-4 my-8 shadow-2xl"
	data-aos="fade-up"
	data-aos-anchor-placement=""
>
	<h1 class="text-4xl mb-4 underline">Our Core members</h1>
	<div class="w-full h-full place-content-center grid md:grid-cols-4  gap-6 ">
		{#each faculties as facu}
			<div class="p-4 shadow-2xl" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
				<img src={facu['Photo']} class="w-full h-auto " alt="Img1" />
				<h1 class="text-2xl shadow-2 text-black col-span-6">{facu.name}</h1>
				<h1 class="text-2xl shadow-2 text-black col-span-6">{facu.designation}</h1>
			</div>
		{/each}
	</div>
</div>
