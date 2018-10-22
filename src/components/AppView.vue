<style lang='less'>
	
@import "../styles/Layout.less";
@import "../styles/Splitter.less";

</style>

<template>

	<div class="layout">

		<div class="header">
			Header
		</div>        

        <div class="body">

            <div class="splitter-host">
                <div id="one" class="splitter-panel">Explorer</div>
                <div id="two" class="splitter-panel">
                    <div class="splitter-host">
                        <div id="alpha" class="splitter-panel">Metadata</div>
                        <div id="beta" class="splitter-panel">Files</div>
                    </div>
                </div>
            </div>

        </div>        
        
		<div class="footer">
			Footer
		</div>

	</div>

</template>

<script>

	import Split from 'split.js'
	
    export default {
        data() {
            return {
                message: 'Hello from your AppView single file component!',
            }
		},

		mounted() {

            Split(['#one', '#two'], {
                sizes: [25, 75],
                gutterSize: 8,
                direction: 'horizontal'
            });            

            Split(['#alpha', '#beta'], {
                sizes: [50,50],
                gutterSize: 8,
                direction: 'vertical'
            });  
        },
	}
	
</script>