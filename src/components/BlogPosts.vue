<template>
  <div>
    <div v-for="(post, index) in posts" :key="index">
      <post-card :post="post"/>
    </div>
  </div>
</template>

<script>
import PostRepository from '@/repositories/PostRepository'
import PostCard from './PostCard.vue'

export default {
  name: 'BlogPosts',
  data() {
    return {
      posts: null
    }
  },
  async mounted() {
    this.posts = await PostRepository.getPosts()
    console.log(this.posts)
  },
  components: {
    PostCard
  }
}
</script>