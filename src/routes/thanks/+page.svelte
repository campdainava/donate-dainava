<script lang="ts">
	import { Confetti } from 'svelte-confetti';
</script>

<div class="confetti">
	<!-- <Confetti
		x={[-5, 5]}
		y={[0, 0.1]}
		delay={[500, 2000]}
		colorArray={['url(flag.svg)']}
		infinite
		rounded
		size={20}
		duration={3500}
		amount={100}
		fallDistance="100vh"
	/> -->
	<Confetti
		x={[-5, 5]}
		y={[0, 0.1]}
		delay={[500, 2000]}
		colorArray={['#FFB81C', '#046A38', '#BE3A34']}
		infinite
		rounded
		size={20}
		duration={3500}
		amount={200}
		fallDistance="100vh"
	/>
</div>
<div
	class="py-20 flex flex-col flex-1 background text-wrap text-5xl sm:text-7xl md:text-9xl pacifico-regular text-white place-items-center justify-center gap-20"
>
	<img class="bgimg" src="/tn_oak.jpg" alt="Dainava Oak Tree" />

	<div
		class="text-outline flex-none text-center"
		style="position:relative"
		data-content="Thank You!"
	>
		Thank You!
	</div>
	<div class="text-outline flex-none" style="position:relative" data-content="Ačiū!">Ačiū!</div>
</div>

<style>
	@font-face {
		font-display: block;
		font-family: 'Pacifico';
		font-style: normal;
		font-weight: 400;
		src: url('/Pacifico-Regular.ttf') format('truetype');
	}

	.text-outline {
		color: black;
		-webkit-text-stroke: 0.15em black;
	}

	.text-outline::before {
		content: attr(data-content);
		-webkit-text-fill-color: white;
		-webkit-text-stroke: 0;
		position: absolute;
	}

	.pacifico-regular {
		font-family: 'Pacifico', cursive;
		font-weight: 400;
		font-style: normal;
		/* text-shadow:
			3px 3px 0 #000,
			-3px 3px 0 #000,
			-3px -3px 0 #000,
			3px -3px 0 #000; */
	}
	.bgimg {
		opacity: 0.6;
		position: absolute;
		object-fit: cover;
		height: 100%;
		width: 100%;
	}
	.background {
		position: relative;
		/* background: url(oak.jpeg);
		background-repeat: no-repeat;
		background-size: cover; */
		background-color: white;
	}
	.confetti {
		position: fixed;
		top: -50px;
		left: 0;
		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		overflow: hidden;
		pointer-events: none;
		z-index: 100;
	}
</style>
