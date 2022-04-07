<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <title-page/>
    <separate/>
    <elf-title :title="'关于我们'"/>
    <learn-more/>
    <elf-title :title="'混个眼熟'"/>
    <team-members/>
    <elf-title :title="'更多信息'"/>
    <footer-page/>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'
import TitlePage from '@/components/TitlePage/TitlePage.vue'
import Separate from '@/components/Separate.vue'
import ElfTitle from '@/components/ElfTitle.vue'
import TeamMembers from '@/components/TeamMembers/TeamMembers.vue'
import LearnMore from '@/components/LearnMore/LearnMore.vue'
import FooterPage from '@/components/FooterPage/FooterPage.vue'

import { NButton } from 'naive-ui'
</script>
<style scoped>
.home{
  overflow: hidden;
}
</style>