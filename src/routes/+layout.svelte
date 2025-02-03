<script lang="ts">
	import '../app.css';
	let { data, children }: LayoutProps = $props();
</script>

<main class="flex flex-col flex-1">
	<header class="h-[75px] bg-[#0d4a80] flex place-items-center flex-none">
		<span class="flex gap-x-4 mx-4 mr-12 flex-none">
	
			<a href={data.info?.DAINAVA_URL}>
				<img
					class="flex-none hidden md:inline"
					style="height:39px;object-fit:cover"
					src="/Dainava_saule.webp"
				/><img
					class="flex-none hidden md:inline"
					style="height:39px;object-fit:cover"
					src="/Dainava_white_orig.webp"
				/>
				<img
					class="flex-none md:hidden"
					style="height:20px;object-fit:cover"
					src="/Dainava_white_orig.webp"
				/>
			</a>
		</span>
		<span class="flex flex-none gap-x-4">
			<a
				href={data.info?.DAINAVA_URL}
				class=" poppins-semibold text-base uppercase text-white hover:text-[#f4ce50] hidden md:inline"
				>Home</a
			>
			<a
				href={data.info?.DAINAVA_WAYS_TO_DONATE_URL}
				class=" poppins-semibold text-base uppercase text-white hover:text-[#f4ce50]"
				>Other ways to donate</a
			>
		</span>
	</header>

	{@render children()}

	<footer
		class="shrink-0 text-[#f4ce50] text-center poppins-semibold flex place-items-center flex-col justify-center p-4"
	>
		<p class="">Camp Dainava exists because of the generous support of people like you.</p>
		<p class="">Dainava is a 501(c)3 not-for-profit organization.</p>
		<p class="">All donations are tax deductible. (Tax ID: 38-1717920)</p>
	</footer>
</main>

<style lang="postcss">
	main {
		overflow: auto;
	}
	footer {
		background-color: green;
		min-height: 100px;
	}
	@font-face {
		src: url('/Poppins-SemiBold.ttf') format('truetype');
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		font-style: normal;
	}

	.poppins-semibold {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		font-style: normal;
		font-size: 15px;
	}
</style>
