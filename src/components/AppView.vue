<style lang='less'>
	
@import "../styles/Layout.less";
@import "../styles/Splitter.less";

.inputthing {
    height: 30px;
    vertical-align: middle;
    margin-left:16px;
    width:128px;
}
.menubar {
    display: flex;
    height: 64px;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    .searchbox {
        width: 192px;
        margin-left: auto;
        margin-right: 12px;
    }
}
.statusbar {
    display: flex;
    height: 16px;
}



.el-tree {
    background: transparent;
    font-family: "Segoe WPC", "Segoe UI", ".SFNSDisplay-Light", "SFUIText-Light", "HelveticaNeue-Light", sans-serif, "Droid Sans Fallback";;
    font-size: 16px;
    color: @dm-gray-lightest;
}
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 8px;
    overflow: hidden;
  }

.el-tree-node__content {
    &:hover {
        background-color: @dm-explorer-hover;
    }
}
.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
    background-color: @dm-explorer-selected;
    color: @dm-explorer-selected-text;
}

.el-tree-node:focus > .el-tree-node__content {
    background-color: @dm-explorer-focus;
}

</style>

<template>

	<div class="layout">

		<div class="header">
            
            <div class="menubar">

                <el-input class="searchbox"
                    placeholder="Search"
                    prefix-icon="el-icon-search">
                </el-input>

            </div>

		</div>        

        <div class="body">

            <div class="splitter-host">
                <div id="splitter-panel-explorer" class="splitter-panel">

                    <el-tree :data="data5"
                             node-key="id"

                             :default-expand-all="false"
                             :expand-on-click-node="false"
                             :accordion="false"

                             :show-checkbox="true"
                             :check-on-click-node="false"
                             :check-strictly="false"

                             :highlight-current="true"

                             :draggable="false" >

                        <span class="custom-tree-node" slot-scope="{ node, data }">
                            <span>{{ node.label }}</span>
                            <span>
                                <el-button type="text" @click="() => append(data)">A</el-button>
                                <el-button type="text" @click="() => remove(node, data)">D</el-button>
                            </span>
                        </span>

                    </el-tree>

                </div>
                <div id="two" class="splitter-panel">
                    <div class="splitter-host">
                        <div id="splitter-panel-metadata" class="splitter-panel">Metadata</div>
                        <div id="splitter-panel-filelist" class="splitter-panel">Filelist</div>
                    </div>
                </div>
            </div>

        </div>        
        
		<div class="footer">
            <div class="statusbar">
            </div>
		</div>

	</div>

</template>

<script>

	import Split from 'split.js'
    
    let id = 1000;
    
    export default {
        data() {

            const data = [{
                id: 1,
                label: 'bundles',
                children: [{
                    id: 4,
                    label: 'AppView.vue',
                    children: [{
                        id: 9,
                        label: 'ColorPalette.less'
                        }, {
                        id: 10,
                        label: 'Splitter.less'
                    }]
                }]
            }, {
                id: 2,
                label: 'node_modules',
                children: [{
                    id: 5,
                    label: 'components'
                }, {
                    id: 6,
                    label: 'styles'
                }]
            }, {
                id: 3,
                label: 'out',
                children: [{
                    id: 7,
                    label: 'make'
                }, {
                    id: 8,
                    label: 'metaXplorer-win32-x64'
                }]
            }];

            return {
                data5: JSON.parse(JSON.stringify(data))
            }

            //return {
            //    message: 'nop',
            //}
		},

		mounted() {

            Split(['#splitter-panel-explorer', '#two'], {
                sizes: [25, 75],
                gutterSize: 8,
                direction: 'horizontal'
            });            

            Split(['#splitter-panel-metadata', '#splitter-panel-filelist'], {
                sizes: [50,50],
                gutterSize: 8,
                direction: 'vertical'
            });  
        },

         methods: {

            append(data) {
                const newChild = { id: id++, label: 'testtest', children: [] };
                if (!data.children) {
                    this.$set(data, 'children', []);
                }
                data.children.push(newChild);
            },

            remove(node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex(d => d.id === data.id);
                children.splice(index, 1);
            },

            // renderContent(h, { node, data, store }) {
            //     return (
            //     <span class="custom-tree-node">
            //         <span>{node.label}</span>
            //         <span>
            //         <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
            //         <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
            //         </span>
            //     </span>);
            // }

        }

	}
	
</script>