<script>
    import evnt from '../../lib/Eventa.json'
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css/sea-green';
    
</script>

<div  class="place-self-center group-active: grid grid-cols-6 p-10 h-[42rem]  " data-aos="fade-up" data-aos-anchor-placement="center-bottom" style=" background-size: cover; background-position: top center;background-image: linear-gradient(to Right,rgba(0,0,0,1),rgba(0,0,0,0)), url(./images/Page-3-Image-5.jpg)" > 
    <div class='col-end-2 col-span-2 w-[26rem] rounded-3xl p-4'>
        <h1 class="md:text-5xl text-[4rem] text-slate-100 shadow-2">Gallary</h1>
        <h3 class="text-2xl text-slate-100 shadow-2 mt-4">Here are all the events that we conduct </h3>
        <div class="flex justify-center m-6">
            </div>
    </div>
</div>
<section class="Event place-self-center w-full mt-14 max-w-[90rem] h-fit "data-aos="fade-up" data-aos-anchor-placement="center-bottom" style=" background-size: cover; background-position: top center;background-image: linear-gradient(to Right,rgba(0,0,0,1),rgba(0,0,0,0)), url(./images/Page-3-Image-5.jpg)">
    <div class="container  bg-white shadow-2xl p-4">
        <h1 class="text-5xl mt-[4.75rem] p-2 underline">
            Our previous events</h1>
        <!-- <p class="text-2xl ">We do various events in a year and several about them are very Entertaining</p> -->
        <div class="slider flex overflow-scroll snap-x gap-9 snap-mandatory before:shrink-0 before:w-[30vw] after:shrink-0 after:w-[30vw]">
            {#each evnt as _event}
            <div class="slide p-4 bg-slate-50 m-2 shrink-0 snap-x snap-center grid-cols-1 grid">
                <img src={_event.src}  class="h-[40em] w-auto bg-cover shadow-2xl" alt="">
                <p class="text-2xl mt-[4.75rem] text-center underline"> {_event.title} </p>
                <span class="text-3xl text-center">- Research Club -</span>
            </div>{/each}
        </div>
        <div class="slider-dots"></div>
    </div>
</section>
<div class="bg-white shadow-xl ">
    <Splide options={ { rewind: true,speed:1000,type:"loop",autoplay:true,} }  class="Event place-self-center w-full mt-14 max-w-[90rem] h-fit p-2">
        {#each evnt as _event}
                <SplideSlide>
                    <div class="slide p-4 bg-slate-50 m-2 shrink-0 snap-x snap-center grid-cols-1 grid">
                        <img src={_event.src}  class="h-[40em] w-auto bg-cover shadow-2xl place-self-center" alt="">
                        <p class="text-2xl mt-[4.75rem] text-center underline"> {_event.title} </p>
                        <span class="text-3xl text-center">- Research Club -</span>
                    </div>
                </SplideSlide>{/each}
    </Splide>
</div>