<style lang='less' scoped>
	
@import "../styles/ColorPalette.less";

.layout {
	background-color: @dm-charcoal;
	color: @dm-lightgray;
	height: 100vh;
}

</style>

<template>

	<div class="layout">
		{{ message }}
	</div>

</template>

<script>

    export default {
        data() {
            return {
                message: 'Hello from your AppView single file component!',
            }
        }
	}
	
</script>