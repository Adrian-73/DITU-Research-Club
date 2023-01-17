<script>
    import { onMount } from 'svelte';
    
    onMount(()=>{
        // @ts-ignore
        AOS.init();
    }
    )
    import "../app.css" ;
    import logo from "$lib/LOGO.png" ;
    import {cubicOut} from 'svelte/easing' ;
    import {tweened} from 'svelte/motion' ;
    import dit from "$lib/SeekPng.com_cognizant-logo-png_3357203.png" ;
    let menu= false ;
    export const nav1 = tweened(0,{
        easing: cubicOut
    })
    export const nav2 = tweened(0,{
        easing: cubicOut
    })
    export const nav3 = tweened(0,{
        easing: cubicOut
    });
    function nav(){menu = !menu;
        nav1.set(menu?110:0);
        nav2.set(menu?30:0);
        nav3.set(menu?100:0);}

  </script>

<div class='nav' style='--sm:{$nav1-110}px; --lg : { $nav3 - 100 }% '>
        <div class='max-w-full h-16 bg-stone-400 rounded-r-full left-0 ' style='width: {90 + $nav2}px'></div>
        {#if ($nav3 > 40)}<div class =' py-6  h-full w-full flex flex-col ' style = 'size :{$nav3}%'>
            <a href="/" class='nav_item' on:click={nav}>Home </a>
            <hr class="divide-solid mx-4 border-slate-500 ">
            <a href="/Abouts" class='nav_item'on:click={nav}>Abouts </a>
            <hr class="divide-solid mx-4 border-slate-500 ">
            <a href="/Gallary" class='nav_item'on:click={nav}>Gallary</a>
            <hr class="divide-solid mx-4 border-slate-500 ">
            <a href="/Research" class='nav_item'on:click={nav}>Research </a>
            <!-- <a href="/Form" class='nav_item'on:click={nav}>Form </a> -->
        </div>{/if}
</div>

<header class='h-min w-full flex fixed top-0 left-0 place-self-center  z-50'>

    <button class=' menu_btn ' on:click={nav} > <p style='margin-left: {$nav2}px ;margin-right: {$nav2}px' > Menu</p>  </button>
    <div class='bg-stone-900 flex p-3 justify-start items-center w-full rounded-l-full sm:my-0 pl-6' >
        <img class='h-[3.25rem]' src={dit} alt="View All Dit Dehradun - Dit University Dehradun Logo@seekpng.com">
        <p class='sm:text-4xl text-5xl  text-white pl-4'>Research</p>
        <!--div class="px-4 h-min bg-white rounded-full">
            <input class = 'p-1 max-w-[90px] lg:w-min' type="text" placeholder="Search..">
            <button class='bg-white p-1'>Search</button>
        </div-->
        
    </div>
</header>
<div class="w-full sm:pt-0  grid grid-cols-1 main place-items-center" style="--size : {$nav1+70 }px">
    <slot>
    </slot>
</div>

<footer class=' bg-black pt-20 p-[50px] sm:pl-[100px] justify-center w-full sm:w-full'>
    <div class='px-4 justify-center w-full md:flex mr-10' >
        <nav class='min-h-[560px] w-[490px] grid grid-cols-2 gap-0'>
            <div class='block'>
                <h3 class='text-white text-3xl '><a href="/">Home</a></h3>
                <p class='text-white text-xl '><a href="/">Link1</a></p>
                <p class='text-white text-xl '>Link2</p>
                <p class='text-white text-xl '>Link3</p>
            </div>
            <div class='block'>
                <h3 class='text-white text-3xl '><a href="/About">About</a></h3>
                <p class='text-white text-xl '>Link1</p>
                <p class='text-white text-xl '>Link2</p>
                <p class='text-white text-xl '>Link3</p>
            </div>
            <div class='block'>
                <h3 class='text-white text-3xl '><a href="/Gallary">Gallary</a></h3>
                <p class='text-white text-xl '>Link1</p>
                <p class='text-white text-xl '>Link2</p>
                <p class='text-white text-xl '>Link3</p>
            </div>
            <div class='block'>
                <h3 class='text-white text-3xl '><a href="/Research">Research</a></h3>
                <p class='text-white text-xl '>Link1</p>
                <p class='text-white text-xl '>Link2</p>
                <p class='text-white text-xl '>Link3</p>
            </div>
            <div class='block'>
                <h3 class='text-white text-3xl '>Forms</h3>
                <p class='text-white text-lg  '><a href="/Form/member">Join Club</a></p>
                <p class='text-white text-lg '><a href="/Form/research">Conduct Research</a></p>
                
            </div>
        </nav>
        <div class=' max-w-[490px] place-items-center justify-center'>
            
            <div class="lg:w-full w-max ml-2 place-items-center grid"><a href="/"><img src={logo} alt="Research club logo" class="mb-8 h-[190px]"/></a></div>
            <div class="flex min-w-[260px]  justify-between pb-4">
                <a href="" target="_blank">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"  class="social">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM26.5016 38.1115V25.0542H30.1059L30.5836 20.5546H26.5016L26.5077 18.3025C26.5077 17.1289 26.6192 16.5001 28.3048 16.5001H30.5581V12H26.9532C22.6231 12 21.0991 14.1828 21.0991 17.8536V20.5551H18.4V25.0547H21.0991V38.1115H26.5016Z" />
                    </svg>
                </a>
                <a href="" target="_blank">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"  class="social">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM23.9639 26.0193L14.9987 19.5115V33.23H13.5009C12.6664 33.23 12.0031 32.5667 12.0031 31.7322V16.562C12.0031 16.4985 12.007 16.4389 12.0144 16.3831C12.0416 16.1451 12.1284 15.9122 12.2813 15.7061C12.7734 15.0428 13.7363 14.893 14.421 15.3851L23.9853 22.3391L33.6138 15.2996C34.2771 14.8074 35.2186 14.9572 35.7107 15.6419C35.9723 15.9945 36.0525 16.4256 35.9674 16.8261V31.7536C35.9674 32.5667 35.3041 33.23 34.4697 33.23H32.9719V19.4788L23.9639 26.0193Z" />
                    </svg>
                </a>
                <a href="" target="_blank">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"  class="social">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM24.0012 11.2C20.5249 11.2 20.0886 11.2152 18.7233 11.2773C17.3606 11.3397 16.4305 11.5555 15.6166 11.872C14.7747 12.1989 14.0606 12.6363 13.3491 13.348C12.6371 14.0595 12.1997 14.7736 11.8717 15.6152C11.5544 16.4294 11.3384 17.3598 11.2771 18.7219C11.216 20.0873 11.2 20.5238 11.2 24.0001C11.2 27.4764 11.2155 27.9114 11.2773 29.2767C11.34 30.6394 11.5557 31.5695 11.872 32.3834C12.1992 33.2253 12.6365 33.9394 13.3483 34.6509C14.0595 35.3629 14.7736 35.8013 15.615 36.1283C16.4294 36.4448 17.3598 36.6605 18.7222 36.7229C20.0876 36.7851 20.5236 36.8003 23.9996 36.8003C27.4762 36.8003 27.9111 36.7851 29.2765 36.7229C30.6391 36.6605 31.5703 36.4448 32.3848 36.1283C33.2264 35.8013 33.9394 35.3629 34.6506 34.6509C35.3626 33.9394 35.8 33.2253 36.128 32.3837C36.4427 31.5695 36.6587 30.6391 36.7227 29.277C36.784 27.9116 36.8 27.4764 36.8 24.0001C36.8 20.5238 36.784 20.0876 36.7227 18.7222C36.6587 17.3595 36.4427 16.4294 36.128 15.6155C35.8 14.7736 35.3626 14.0595 34.6506 13.348C33.9386 12.636 33.2266 12.1987 32.384 11.872C31.5679 11.5555 30.6373 11.3397 29.2746 11.2773C27.9092 11.2152 27.4746 11.2 23.9972 11.2H24.0012Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8529 13.5067C23.1937 13.5062 23.574 13.5067 24.0012 13.5067C27.4188 13.5067 27.8239 13.519 29.1735 13.5803C30.4215 13.6374 31.0989 13.8459 31.5501 14.0211C32.1474 14.2531 32.5733 14.5304 33.021 14.9784C33.469 15.4264 33.7464 15.8531 33.9789 16.4505C34.1541 16.9011 34.3629 17.5785 34.4197 18.8265C34.481 20.1758 34.4944 20.5812 34.4944 23.9972C34.4944 27.4132 34.481 27.8186 34.4197 29.1679C34.3626 30.4159 34.1541 31.0933 33.9789 31.5439C33.7469 32.1413 33.469 32.5666 33.021 33.0144C32.573 33.4624 32.1477 33.7397 31.5501 33.9717C31.0994 34.1477 30.4215 34.3557 29.1735 34.4128C27.8242 34.4741 27.4188 34.4874 24.0012 34.4874C20.5833 34.4874 20.1782 34.4741 18.8289 34.4128C17.5809 34.3552 16.9035 34.1466 16.4521 33.9714C15.8547 33.7394 15.428 33.4621 14.98 33.0141C14.532 32.5661 14.2547 32.1405 14.0222 31.5429C13.847 31.0922 13.6382 30.4149 13.5814 29.1669C13.52 27.8175 13.5078 27.4122 13.5078 23.994C13.5078 20.5758 13.52 20.1726 13.5814 18.8233C13.6384 17.5753 13.847 16.8979 14.0222 16.4467C14.2542 15.8494 14.532 15.4227 14.98 14.9747C15.428 14.5267 15.8547 14.2494 16.4521 14.0168C16.9033 13.8408 17.5809 13.6328 18.8289 13.5755C20.0097 13.5222 20.4673 13.5062 22.8529 13.5035V13.5067ZM30.8338 15.632C29.9858 15.632 29.2978 16.3193 29.2978 17.1675C29.2978 18.0155 29.9858 18.7035 30.8338 18.7035C31.6818 18.7035 32.3698 18.0155 32.3698 17.1675C32.3698 16.3195 31.6818 15.632 30.8338 15.632ZM24.0012 17.4267C20.371 17.4267 17.4278 20.37 17.4278 24.0001C17.4278 27.6303 20.371 30.5722 24.0012 30.5722C27.6314 30.5722 30.5735 27.6303 30.5735 24.0001C30.5735 20.37 27.6314 17.4267 24.0012 17.4267Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0012 19.7334C26.3575 19.7334 28.2679 21.6436 28.2679 24.0001C28.2679 26.3564 26.3575 28.2668 24.0012 28.2668C21.6446 28.2668 19.7345 26.3564 19.7345 24.0001C19.7345 21.6436 21.6446 19.7334 24.0012 19.7334Z" />
                    </svg>
                </a>
                <a href="" target="_blank">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"  class="social">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM16.9605 19.8778H11.5216V36.2196H16.9605V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM36.5754 26.8497C36.5754 21.8303 33.8922 19.4941 30.3131 19.4941C27.4254 19.4941 26.1326 21.0802 25.4107 22.1929V19.8783H19.9711C20.0428 21.4117 19.9711 36.22 19.9711 36.22H25.4107V27.0934C25.4107 26.605 25.446 26.1178 25.5898 25.7681C25.9829 24.7924 26.8779 23.7822 28.3805 23.7822C30.3494 23.7822 31.1365 25.2807 31.1365 27.4767V36.2196H36.5752L36.5754 26.8497Z" />
                    </svg>
                </a>
                <a href="" target="_blank">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"  class="social">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM23.2812 19.5075L23.3316 20.338L22.4922 20.2363C19.4369 19.8465 16.7677 18.5245 14.5013 16.3043L13.3934 15.2027L13.108 16.0162C12.5036 17.8296 12.8897 19.7448 14.1488 21.0328C14.8203 21.7446 14.6692 21.8463 13.5109 21.4226C13.108 21.287 12.7554 21.1854 12.7219 21.2362C12.6044 21.3548 13.0073 22.8971 13.3262 23.5072C13.7627 24.3546 14.6524 25.1851 15.6261 25.6766L16.4487 26.0664L15.475 26.0833C14.5349 26.0833 14.5013 26.1003 14.6021 26.4562C14.9378 27.5578 16.264 28.7272 17.7413 29.2357L18.7822 29.5916L17.8756 30.1339C16.5326 30.9135 14.9546 31.3542 13.3766 31.3881C12.6211 31.405 12 31.4728 12 31.5237C12 31.6931 14.0481 32.6422 15.24 33.0151C18.8157 34.1167 23.063 33.6422 26.2526 31.7609C28.5189 30.422 30.7852 27.7612 31.8428 25.1851C32.4136 23.8123 32.9844 21.304 32.9844 20.1007C32.9844 19.3211 33.0347 19.2194 33.9748 18.2872C34.5288 17.7449 35.0492 17.1517 35.15 16.9822C35.3178 16.6602 35.3011 16.6602 34.4449 16.9483C33.018 17.4568 32.8165 17.389 33.5216 16.6263C34.042 16.084 34.6631 15.101 34.6631 14.8129C34.6631 14.762 34.4113 14.8468 34.1259 14.9993C33.8238 15.1688 33.1523 15.423 32.6486 15.5756L31.7421 15.8637L30.9195 15.3044C30.4663 14.9993 29.8283 14.6604 29.4926 14.5587C28.6364 14.3214 27.327 14.3553 26.5548 14.6265C24.4563 15.3891 23.1301 17.3551 23.2812 19.5075Z" />
                    </svg>
                </a>
               
            </div>
            <hr/>
            <p class="text-white text-justify">Our goal for research at DIT University is to establish a reputation for highly relevant, innovative, and societally relevant research that will not only advance our field of study but also have a substantial impact on the health and welfare of people living in our city, state, and region</p>
            <hr/>
            <hr/>
            <hr/>
        </div>
</footer>

<style>
    @media only screen and (
        min-width: 640px
    ) {
        .main {
            padding-left: var(--size);
        }
        .nav{
            @apply w-[180px];
            left: var(--sm);
        }
        .nav_item{
            @apply text-xl  px-6 py-1;
        }
    }
    @media only screen and (max-width: 640px) {
        .nav {
            @apply w-full opacity-80 shadow-black drop-shadow-2xl z-10;
            left: var(--lg) ;

        }
        .nav_item{
            @apply text-4xl  px-10 pt-10 grid-cols-1;
        }
        .menu_btn{
            @apply bg-stone-400;
        }
    }
    .nav{
        @apply bg-white  shadow-xl fixed h-full  top-0;
    }
    .nav_item{
        @apply bg-white hover:bg-stone-200 w-full h-max;

    }
    .menu_btn{
        @apply px-3 md:text-lg text-2xl font-bold mr-3 rounded-r-full;
    }
</style>