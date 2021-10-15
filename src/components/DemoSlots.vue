<template>
    <div class="tab-wrapper">
        <Tab title="Tieu de cua tab">
            <ul class="tab-item">
                <li v-for="(tabItem, index) in tabList" :key="index" @click="setActiveTab(index)" :class="{active: tabActive == index}">{{ tabItem.text }}</li>
            </ul>
            <div class="tab1" v-if="tabActive == 0">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet aut quam magni accusantium perspiciatis laboriosam similique fugiat quisquam, odio, reprehenderit fugit obcaecati nostrum illo facere! Iste soluta neque excepturi obcaecati?</p>
            </div>
            <div class="tab2" v-else-if="tabActive == 1">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsum voluptates debitis doloribus corrupti nesciunt nostrum velit error aliquam assumenda illum, recusandae necessitatibus in perspiciatis sapiente praesentium nihil vel inventore!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sunt ex ratione perferendis. Accusantium porro laudantium nostrum magni, labore, nesciunt, corporis expedita id incidunt saepe natus corrupti animi tempora non!</p>
            </div>
            <div class="tab3" v-else>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed temporibus nisi facere maiores enim inventore ratione nemo corrupti? Cupiditate nobis quae harum tempora explicabo expedita ad error nostrum eaque. Similique.</p>
            </div>
        </Tab>
    </div>
</template>

<script>
    import Tab from "./Tabs.vue";

    export default {
        data() {
            return {
                tabList: [
                    {text: 'tab1'},
                    {text: 'tab2'},
                    {text: 'tab3'}
                ],
                tabActive: 0
            }
        },
        components: {
            Tab
        },
        methods: {
            setActiveTab(index) {
                this.tabActive = index;
            }
        }
    }
</script>

<style lang="postcss">
    .tab-wrapper {
        @apply border border-black w-1/2;
    }
    
    .tab-item {
        @apply flex;
    }

    .tab-item li {
        padding: 10px;
    }

    .active {
        @apply bg-black text-white;
    }
</style>

