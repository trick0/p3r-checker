<template>
	<div class="checker" v-if="Object.keys(check).length > 0">
		<span class="circle" :class="{ available: check.status }"></span>
		{{ check.provider }}
	</div>
</template>

<script>
	import api from "../services/api.service"; // providers: mediaworld, unieuro, euronics, amazon

	export default {
		props: {
			provider: String,
		},
		data() {
			return {
				check: {},
			};
		},
		mounted() {
			api.providers[this.provider].action((status) => {
				this.$data.check = {
					provider: this.provider,
					status: status,
				};

				if (status && this.$store.state.soundEnabled)
					this.$store.state.sound.play()
			});
		},
	};
</script>

<style>
	.circle {
		width: 8px;
		height: 8px;
		background: red;
		display: inline-block;
		border-radius: 16px;
		margin-right: 5px;
	}

	.available {
		background: green;
	}
</style>
