<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<nav
	class="flex flex-col flex-wrap items-center justify-center gap-4 bg-surface-600 px-4 py-6 lg:flex-row lg:justify-between lg:gap-1"
>
	<div class="logo-container flex flex-nowrap justify-center">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="Group_22"
			data-name="Group 22"
			version="1.1"
			viewBox="0 0 258.5 164.8"
		>
			<path
				d="M17.1 161.1l-3.3-4.6H8.7v4.6H7.2v-14.4h5.4c1.8 0 3.3.4 4.3 1.3s1.6 2.1 1.6 3.6-.3 2.1-.9 2.9c-.6.8-1.4 1.3-2.4 1.7l3.5 4.9H17zm-1.2-6.9c.8-.6 1.1-1.5 1.1-2.7s-.4-2.1-1.1-2.7c-.8-.6-1.8-.9-3.3-.9H8.8v7.2h3.8c1.4 0 2.5-.3 3.3-.9zM32.4 159.7v1.3H22.2v-14.4h9.9v1.3h-8.4v5.1h7.5v1.3h-7.5v5.4h8.7zM36.9 160.7c-1-.3-1.7-.8-2.3-1.4l.6-1.2a6.9 6.9 0 004.8 1.8c.9 0 2.3-.2 2.9-.7.6-.5 1-1.1 1-1.8s-.2-1-.5-1.4l-1.3-.8-2.1-.6-2.6-.8c-.6-.3-1.2-.6-1.7-1.2-.5-.5-.7-1.2-.7-2.1s.2-1.4.6-2c.4-.6 1-1.1 1.8-1.4s1.8-.5 3-.5a7.8 7.8 0 014.4 1.2l-.5 1.2a7.5 7.5 0 00-3.9-1.2c-1.3 0-2.2.2-2.9.7-.6.5-1 1.1-1 1.9s.2 1 .5 1.4c.3.4.8.6 1.3.8l2.1.6 2.6.8a4 4 0 011.7 1.2c.5.5.7 1.2.7 2.1s-.2 1.4-.6 2-1 1.1-1.8 1.4-1.8.5-3 .5-2.1-.2-3.1-.5zM51.2 148h-5.1v-1.3h11.7v1.3h-5.1v13.1h-1.5V148zM68.6 157.2h-8l-1.7 3.9h-1.6l6.6-14.4h1.5l6.6 14.4h-1.6l-1.7-3.9zM68 156l-3.5-7.7L61 156h6.9zM75.4 159.6a6.7 6.7 0 01-1.6-4.7v-8.3h1.5v8.2c0 1.7.4 2.9 1.1 3.7.8.8 1.8 1.2 3.3 1.2s2.5-.4 3.3-1.2c.8-.8 1.1-2.1 1.1-3.7v-8.2h1.5v8.3c0 2-.5 3.6-1.6 4.7s-2.5 1.6-4.4 1.6-3.3-.5-4.4-1.6zM100.1 161.1l-3.3-4.6h-5.1v4.6h-1.5v-14.4h5.4c1.8 0 3.3.4 4.3 1.3s1.6 2.1 1.6 3.6-.3 2.1-.9 2.9c-.6.8-1.4 1.3-2.4 1.7l3.5 4.9H100zm-1.2-6.9c.8-.6 1.1-1.5 1.1-2.7s-.4-2.1-1.1-2.7c-.8-.6-1.8-.9-3.3-.9h-3.8v7.2h3.8c1.4 0 2.5-.3 3.3-.9zM114.2 157.2h-8l-1.7 3.9h-1.6l6.6-14.4h1.5l6.6 14.4H116l-1.7-3.9zm-.5-1.2l-3.5-7.7-3.5 7.7h6.9zM132 146.6V161h-1.3l-9.3-11.7V161h-1.5v-14.4h1.3l9.3 11.7v-11.7h1.5zM139.5 148h-5.1v-1.3h11.7v1.3H141v13.1h-1.5V148z"
			/>
			<path
				d="M7.3 74.2h13v59h-13v-59zM28 88h12.8v6.4c2.9-3.8 6.7-7.2 13.2-7.2 9.7 0 15.3 6.4 15.3 16.8v29.2H56.5V108c0-6.1-2.9-9.2-7.7-9.2s-8 3.1-8 9.2v25.2H28V88z"
			/>
			<path
				d="M81.5 124.6l7.7-9.2c5.3 4.4 10.9 7.2 17.6 7.2s8.5-2.1 8.5-5.6v-.2c0-3.3-2-5-11.9-7.5-11.9-3-19.5-6.3-19.5-18v-.2c0-10.7 8.6-17.8 20.6-17.8s15.9 2.7 21.9 7.5l-6.7 9.8c-5.2-3.6-10.4-5.8-15.3-5.8s-7.6 2.3-7.6 5.1v.2c0 3.9 2.5 5.1 12.7 7.7 12 3.1 18.7 7.4 18.7 17.7v.2c0 11.7-8.9 18.3-21.6 18.3s-17.9-3.1-25-9.4zM139.4 71.7h.3c3.6 0 6.4 2.9 6.4 6.4 0 3.6-2.9 6.4-6.4 6.4h-.3a6.4 6.4 0 01-6.4-6.4c0-3.6 2.9-6.4 6.4-6.4zM133.3 88h12.8v45.2h-12.8V88zM152.7 110.7v-.2c0-15.1 9.9-23.3 20.6-23.3s11 3.1 14.1 6.7V71.7h12.8v61.5h-12.8v-6.5a16.6 16.6 0 01-14.1 7.3c-10.5 0-20.6-8.3-20.6-23.3zm34.8 0v-.2c0-7.5-5-12.5-10.9-12.5s-11 4.9-11 12.5v.2c0 7.5 5.1 12.5 11 12.5s10.9-5 10.9-12.5zM206.9 110.9v-.2c0-12.9 9.2-23.5 22.3-23.5s22 11.7 22 24.5 0 2.2-.2 3.4h-31.4c1.3 5.8 5.3 8.8 11 8.8s7.4-1.3 11-4.6l7.3 6.5a22.6 22.6 0 01-18.4 8.4 22.6 22.6 0 01-23.6-23.3zm31.8-3.8c-.8-5.7-4.1-9.6-9.5-9.6s-8.8 3.8-9.8 9.6h19.3z"
			/>
			<g>
				<path
					d="M154.7 130.8v30.3h12.6v-22.3a23.8 23.8 0 01-12.6-8zM167.3 43.8L117.7 3.9l-.3-.3-8.9 8.9-51.6 51.6V81c5.4.6 9.7 3.1 12.6 7V69.3l48.9-48.9 36.4 29.3v40.4c3.4-4.1 7.8-6.8 12.6-8V43.8z"
				/>
			</g>
		</svg>
	</div>
	<div class="flex h-[100%] flex-row lg:flex-nowrap flex-wrap items-center lg:gap-2 gap-6 p-2">
		<div class="avatar-container">
			<Avatar src="https://i.pravatar.cc/300" />
		</div>
		<div>Witaj, Ada Błaszak!</div>
	</div>
</nav>
<section class="px-4 flex flex-row flex-wrap items-center justify-center gap-4 py-4 bg-surface-700">
	<button class="variant-filled-primary btn">Zaloguj się</button>
	<button class="variant-filled-secondary btn">Zarejestruj się</button>
</section>
<section class="flex items-center justify-center py-4 bg-surface-800">
	<div class="flex flex-row lg:flex-nowrap flex-wrap gap-2">
		<input class="input inline-flex" type="text" placeholder="Wyszukaj przepis!" />
		<button type="button" class="variant-ringed btn">Szukaj 🔎</button>
	</div>
</section>
<aside class="py-6 px-4 bg-surface-900 text-justify font-semibold">
    <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam autem adipisci exercitationem error? Possimus nulla sunt quidem, cum vero a qui reprehenderit ullam? Quod iure laborum, eligendi in incidunt repellat.
Cumque labore dolore alias totam omnis molestias quam nostrum eaque, repellendus reiciendis rerum beatae. Sapiente consequuntur modi perferendis blanditiis fugit amet quae natus dolores est. Amet autem maiores rerum ut!
Quidem, magnam sit natus, beatae delectus consequuntur ab, rem aspernatur numquam harum minus accusamus? Similique, iste explicabo ipsam consectetur non sed incidunt? Tempore distinctio unde pariatur, error quia molestiae! At?
    </p>
</aside>
<div class="px-4 py-6 flex flex-col gap-2 bg-surface-800 justify-center">
    <h2 class="text-primary-100 font-medium uppercase text-2xl mt-2 mb-6">kategorie przepisów</h2>
    <div class="flex lg:flex-row flex-col lg:flex-wrap flex-nowrap gap-4 items-center lg:justify-evenly justify-center">
    <div class="bg-tertiary-900 font-medium rounded py-4 px-6 card-hover text-primary-100 text-xl text-center cursor-pointer w-[90%] lg:w-auto">KATEGORIA 1</div>
    <div class="bg-tertiary-900  font-medium rounded py-4 px-6 card-hover text-primary-100 text-xl text-center cursor-pointer w-[90%] lg:w-auto">KATEGORIA 1</div>
    <div class="bg-tertiary-900  font-medium rounded py-4 px-6 card-hover text-primary-100 text-xl text-center cursor-pointer w-[90%] lg:w-auto">KATEGORIA 1</div>
    <div class="bg-tertiary-900  font-medium rounded py-4 px-6 card-hover text-primary-100 text-xl text-center cursor-pointer w-[90%] lg:w-auto">KATEGORIA 1</div>
    <div class="bg-tertiary-900  font-medium rounded py-4 px-6 card-hover text-primary-100 text-xl text-center cursor-pointer w-[90%] lg:w-auto">KATEGORIA 1</div>
    <div class="bg-tertiary-900  font-medium rounded py-4 px-6 card-hover text-primary-100 text-xl text-center cursor-pointer w-[90%] lg:w-auto">KATEGORIA 1</div>
    <div class="bg-tertiary-900  font-medium rounded py-4 px-6 card-hover text-primary-100 text-xl text-center cursor-pointer w-[90%] lg:w-auto">KATEGORIA 1</div>
    <div class="bg-tertiary-900  font-medium rounded py-4 px-6 card-hover text-primary-100 text-xl text-center cursor-pointer w-[90%] lg:w-auto">KATEGORIA 1</div>
    <div class="bg-tertiary-900  font-medium rounded py-4 px-6 card-hover text-primary-100 text-xl text-center cursor-pointer w-[90%] lg:w-auto">KATEGORIA 1</div>
    <div class="bg-tertiary-900  font-medium rounded py-4 px-6 card-hover text-primary-100 text-xl text-center cursor-pointer w-[90%] lg:w-auto">KATEGORIA 1</div>
</div>
</div>
<div class="px-4 py-6 flex flex-col gap-2 bg-surface-900 justify-center">
    <h2 class="text-secondary-100 font-medium uppercase text-2xl mt-2 mb-6">listy</h2>
    <div class="flex lg:flex-row flex-col lg:flex-wrap flex-nowrap gap-8 items-center justify-center">
    <div class="bg-secondary-900 font-medium rounded py-4 px-6 card-hover text-secondary-100 text-xl text-center cursor-pointer w-[90%] lg:w-auto">AKTUALNE LISTY</div>
    <div class="bg-secondary-900 font-medium rounded py-4 px-6 card-hover text-secondary-100 text-xl text-center cursor-pointer w-[90%] lg:w-auto">WSZYSTKIE LISTY</div>
</div>
</div>
<div class="px-4 py-6 flex flex-col lg:flex-wrap gap-2 bg-surface-800 justify-center mb-24">
    <h2 class="text-secondary-100 font-medium uppercase text-2xl mt-2 mb-6">panel administracyjny</h2>
    <div class="flex lg:flex-row flex-col lg:flex-wrap flex-nowrap gap-4 justify-evenly items-center">
    <div class="bg-success-600 font-medium rounded py-4 px-6 card-hover text-secondary-100 text-xl text-center cursor-pointer w-[90%] lg:w-auto"> DODAJ PRZEPIS</div>
    <div class="bg-warning-900 font-medium rounded py-4 px-6 card-hover text-secondary-100 text-xl text-center cursor-pointer w-[90%] lg:w-auto">DODAJ LISTĘ</div>
    <div class="bg-error-800 font-medium rounded py-4 px-6 card-hover text-secondary-100 text-xl text-center cursor-pointer w-[90%] lg:w-full">ZARZĄDZAJ KUCHARZAMI</div>
</div>
</div>

<footer class="abolute bottom-0 mt-6 w-screen rounded bg-surface-700 p-4">
	<div class="mx-auto text-center">
		<span class="block font-light text-tertiary-400"
			>Inside Recipe DB | Version 2.0 | 2024-2025 🧑‍🍳</span
		>
	</div>
</footer>

<style>
	.avatar-container {
		width: 8vh;
	}

	.logo-container {
		height: 10vh;
	}

	.logo-container > svg {
		fill: #fee4ee;
	}
</style>
